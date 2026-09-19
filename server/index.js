const fs = require("fs")
const { randomInt } = require("crypto")
const http = require("http")
const os = require("os")
const path = require("path")

const express = require("express")
const { Server } = require("socket.io")

const PORT = 4000
const HOST = "0.0.0.0"
const ROOM = "table"
const HISTORY_LIMIT = 10

const dataDir = path.join(__dirname, "data")
const charactersFile = path.join(dataDir, "characters.json")

const app = express()
const server = http.createServer(app)
const io = new Server(server)

const publicDir = path.join(__dirname, "public")

app.get("/", (_req, res) => {
  res.sendFile(path.join(publicDir, "index.html"))
})

app.get("/mj", (_req, res) => {
  res.sendFile(path.join(publicDir, "mj.html"))
})

app.use(express.static(publicDir))

function getLocalIPv4() {
  const candidates = []

  for (const addrs of Object.values(os.networkInterfaces())) {
    for (const iface of addrs || []) {
      const ipv4 = iface.family === "IPv4" || iface.family === 4
      if (ipv4 && !iface.internal) {
        candidates.push(iface.address)
      }
    }
  }

  const preferred = candidates.find(ip => ip.startsWith("192.168."))
    || candidates.find(ip => ip.startsWith("10."))
    || candidates.find(ip => /^172\.(1[6-9]|2\d|3[0-1])\./.test(ip))

  return preferred || candidates[0] || "127.0.0.1"
}

function rollD10() {
  return randomInt(1, 11)
}

// d10 explosif Cyberpunk Red :
// 10 → relance et additionne, en boucle tant que la relance est un 10
// 1  → une seule relance, soustraite, quelle que soit sa valeur
function rollExplosiveD10() {
  const first = rollD10()
  const dice = [first]

  if (first === 10) {
    let next
    do {
      next = rollD10()
      dice.push(next)
    } while (next === 10)
  } else if (first === 1) {
    dice.push(rollD10())
  }

  const extras = dice.slice(1).reduce((sum, n) => sum + n, 0)
  const total = first === 1 ? 1 - extras : first + extras
  const kind = first === 10 ? "critique" : first === 1 ? "echec" : "normal"

  return { dice, total, kind }
}

function ensureStore() {
  fs.mkdirSync(dataDir, { recursive: true })
  if (!fs.existsSync(charactersFile)) {
    fs.writeFileSync(charactersFile, "[]\n", "utf8")
  }
}

function loadCharacters() {
  ensureStore()
  try {
    const parsed = JSON.parse(fs.readFileSync(charactersFile, "utf8"))
    if (Array.isArray(parsed)) return parsed
    if (parsed && typeof parsed === "object") return Object.values(parsed)
  } catch (err) {
    console.error("Impossible de lire characters.json :", err.message)
  }
  return []
}

function saveCharacters(characters) {
  ensureStore()
  fs.writeFileSync(charactersFile, JSON.stringify(characters, null, 2) + "\n", "utf8")
}

function normalizeName(name) {
  return String(name || "").trim()
}

function namesMatch(a, b) {
  return normalizeName(a).toLocaleLowerCase("fr") === normalizeName(b).toLocaleLowerCase("fr")
}

function authenticate(payload, routeRole) {
  const name = normalizeName(payload && payload.name)
  const code = String((payload && payload.code) || "").trim()

  if (!name) {
    return { ok: false, message: "Le nom est requis." }
  }
  if (name.length > 32) {
    return { ok: false, message: "Le nom est trop long (32 caractères max)." }
  }
  if (!/^\d{4}$/.test(code)) {
    return { ok: false, message: "Le code doit être composé de 4 chiffres." }
  }

  const characters = loadCharacters()
  const existing = characters.find(character => namesMatch(character.name, name))
  const mj = characters.find(character => character.role === "mj")

  if (routeRole === "mj") {
    if (mj) {
      if (!namesMatch(mj.name, name)) {
        return { ok: false, message: "Un MJ est déjà enregistré pour cette table." }
      }
      if (mj.code !== code) {
        return { ok: false, message: "Code incorrect pour ce nom." }
      }
      return { ok: true, character: mj }
    }

    if (existing) {
      if (existing.code !== code) {
        return { ok: false, message: "Code incorrect pour ce nom." }
      }
      existing.role = "mj"
      saveCharacters(characters)
      return { ok: true, character: existing }
    }

    const character = {
      name,
      code,
      role: "mj",
      createdAt: new Date().toISOString(),
    }
    characters.push(character)
    saveCharacters(characters)
    return { ok: true, character }
  }

  if (existing) {
    if (existing.code !== code) {
      return { ok: false, message: "Code incorrect pour ce nom." }
    }
    return { ok: true, character: existing }
  }

  const character = {
    name,
    code,
    role: "player",
    createdAt: new Date().toISOString(),
  }
  characters.push(character)
  saveCharacters(characters)
  return { ok: true, character }
}

const state = {
  history: [],
  sockets: new Map(),
}

function presenceList() {
  const seen = new Set()
  const list = []
  for (const seated of state.sockets.values()) {
    if (!seated.name || seen.has(seated.name)) continue
    seen.add(seated.name)
    list.push({ name: seated.name, role: seated.role })
  }
  return list
}

function seatSocket(socket, character) {
  socket.data.name = character.name
  socket.data.role = character.role
  socket.join(ROOM)
  state.sockets.set(socket.id, {
    name: character.name,
    role: character.role,
  })
}

function unseatSocket(socket) {
  socket.leave(ROOM)
  state.sockets.delete(socket.id)
  socket.data.name = null
  socket.data.role = null
}

ensureStore()

io.on("connection", socket => {
  const routeRole = socket.handshake.query.role === "mj" ? "mj" : "player"

  socket.on("login", payload => {
    const result = authenticate(payload, routeRole)
    if (!result.ok) {
      socket.emit("login-error", { message: result.message })
      return
    }

    seatSocket(socket, result.character)
    socket.emit("login-ok", {
      name: result.character.name,
      role: result.character.role,
      history: state.history,
    })
    io.to(ROOM).emit("presence", presenceList())
  })

  socket.on("logout", () => {
    unseatSocket(socket)
    io.to(ROOM).emit("presence", presenceList())
  })

  socket.on("roll", () => {
    if (!socket.data.name) return

    const result = rollExplosiveD10()
    const entry = {
      id: `${Date.now()}-${socket.id.slice(0, 6)}`,
      name: socket.data.name,
      role: socket.data.role,
      dice: result.dice,
      total: result.total,
      kind: result.kind,
      at: Date.now(),
    }

    state.history.unshift(entry)
    if (state.history.length > HISTORY_LIMIT) {
      state.history.length = HISTORY_LIMIT
    }

    io.to(ROOM).emit("roll", entry)
  })

  socket.on("disconnect", () => {
    const wasSeated = state.sockets.has(socket.id)
    state.sockets.delete(socket.id)
    if (wasSeated) {
      io.to(ROOM).emit("presence", presenceList())
    }
  })
})

server.listen(PORT, HOST, () => {
  const ip = getLocalIPv4()
  console.log(`Table connectée démarrée : http://${ip}:${PORT}`)
  console.log(`Vue MJ : http://${ip}:${PORT}/mj`)
})
