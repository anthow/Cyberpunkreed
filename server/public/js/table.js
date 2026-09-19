(function () {
  const role = document.body.dataset.role === "mj" ? "mj" : "player"
  const storageKey = role === "mj" ? "dnc-table-mj" : "dnc-table-player"

  const statusEl = document.getElementById("status")
  const loginScreen = document.getElementById("login-screen")
  const loginForm = document.getElementById("login-form")
  const loginName = document.getElementById("login-name")
  const loginCode = document.getElementById("login-code")
  const loginError = document.getElementById("login-error")
  const loginSubmit = document.getElementById("login-submit")
  const tableScreen = document.getElementById("table-screen")
  const youNameEl = document.getElementById("you-name")
  const presenceEl = document.getElementById("presence")
  const switchBtn = document.getElementById("switch-character")
  const rollBtn = document.getElementById("roll")
  const latestEl = document.getElementById("latest")
  const latestEmpty = document.getElementById("latest-empty")
  const latestBody = document.getElementById("latest-body")
  const historyEl = document.getElementById("history")

  let myName = ""
  let seated = false
  let history = []

  const kindLabel = {
    critique: "Critique",
    echec: "Échec critique",
    normal: "",
  }

  function formatDetail(entry) {
    const [first, ...rest] = entry.dice
    if (!rest.length) return String(first)
    if (entry.kind === "echec") {
      return `${first} − ${rest.join(" − ")}`
    }
    return [first, ...rest].join(" + ")
  }

  function formatSigned(total) {
    return String(total)
  }

  function setStatus(online) {
    statusEl.dataset.state = online ? "on" : "off"
    statusEl.textContent = online ? "en ligne" : "hors ligne"
    loginSubmit.disabled = !online
    rollBtn.disabled = !online || !seated
  }

  function showError(message) {
    if (!message) {
      loginError.hidden = true
      loginError.textContent = ""
      return
    }
    loginError.hidden = false
    loginError.textContent = message
  }

  function readSaved() {
    try {
      const raw = localStorage.getItem(storageKey)
      return raw ? JSON.parse(raw) : null
    } catch {
      return null
    }
  }

  function saveCredentials(name, code) {
    localStorage.setItem(storageKey, JSON.stringify({ name, code }))
  }

  function clearCredentials() {
    localStorage.removeItem(storageKey)
  }

  function prefillForm() {
    const saved = readSaved()
    loginName.value = saved && saved.name ? saved.name : ""
    loginCode.value = saved && saved.code ? saved.code : ""
  }

  function showLogin() {
    seated = false
    myName = ""
    loginScreen.hidden = false
    tableScreen.hidden = true
    youNameEl.textContent = "—"
    rollBtn.disabled = true
    prefillForm()
    loginName.focus()
  }

  function showTable(name) {
    seated = true
    myName = name
    youNameEl.textContent = name
    loginScreen.hidden = true
    tableScreen.hidden = false
    rollBtn.disabled = !socket.connected
    showError("")
  }

  function renderPresence(people) {
    if (!people || !people.length) {
      presenceEl.textContent = "Personne autour de la table pour l'instant."
      return
    }
    const names = people.map(p => p.name).join(" · ")
    presenceEl.textContent =
      people.length === 1
        ? `${names} autour de la table.`
        : `${people.length} autour de la table : ${names}`
  }

  function renderLatest(entry, flash) {
    if (!entry) {
      latestEmpty.hidden = false
      latestBody.hidden = true
      latestBody.innerHTML = ""
      return
    }

    latestEmpty.hidden = true
    latestBody.hidden = false
    const label = kindLabel[entry.kind] || ""
    const exploded = entry.dice.length > 1
    const detail = exploded
      ? `${formatDetail(entry)} = ${formatSigned(entry.total)}`
      : ""
    latestBody.innerHTML = `
      <p class="latest-who">${escapeHtml(entry.name)}</p>
      <p class="latest-total" data-kind="${entry.kind}">${formatSigned(entry.total)}</p>
      ${detail ? `<p class="latest-detail">${escapeHtml(detail)}</p>` : ""}
      ${label ? `<p class="kind-tag" data-kind="${entry.kind}">${label}</p>` : ""}
    `

    if (flash) {
      latestEl.classList.remove("is-fresh")
      void latestEl.offsetWidth
      latestEl.classList.add("is-fresh")
    }
  }

  function renderHistory() {
    historyEl.innerHTML = history
      .map(entry => {
        const mine = entry.name === myName ? " is-mine" : ""
        const label = kindLabel[entry.kind]
        const detail = entry.dice.length > 1 ? formatDetail(entry) : ""
        return `
          <li class="roll-row${mine}">
            <span class="who">${escapeHtml(entry.name)}${label ? ` · ${label}` : ""}</span>
            <span class="total">${formatSigned(entry.total)}</span>
            ${detail ? `<span class="detail">${escapeHtml(detail)}</span>` : ""}
          </li>
        `
      })
      .join("")
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
  }

  function applyHistory(next, flashLatest) {
    history = next.slice(0, 10)
    renderLatest(history[0] || null, flashLatest)
    renderHistory()
  }

  const socket = io({ query: { role } })

  socket.on("connect", () => {
    setStatus(true)
    if (seated) {
      const saved = readSaved()
      if (saved && saved.name && saved.code) {
        socket.emit("login", saved)
      }
    }
  })
  socket.on("disconnect", () => setStatus(false))

  socket.on("login-ok", payload => {
    saveCredentials(payload.name, loginCode.value.trim() || (readSaved() && readSaved().code) || "")
    showTable(payload.name)
    applyHistory(payload.history || [], false)
  })

  socket.on("login-error", payload => {
    showError((payload && payload.message) || "Connexion refusée.")
  })

  socket.on("presence", renderPresence)

  socket.on("roll", entry => {
    if (!seated) return
    applyHistory([entry, ...history.filter(item => item.id !== entry.id)], true)
  })

  loginCode.addEventListener("input", () => {
    loginCode.value = loginCode.value.replace(/\D/g, "").slice(0, 4)
  })

  loginForm.addEventListener("submit", event => {
    event.preventDefault()
    showError("")
    if (!socket.connected) {
      showError("Hors ligne — attends que le serveur réponde.")
      return
    }
    socket.emit("login", {
      name: loginName.value,
      code: loginCode.value,
    })
  })

  switchBtn.addEventListener("click", () => {
    socket.emit("logout")
    clearCredentials()
    loginName.value = ""
    loginCode.value = ""
    showError("")
    showLogin()
  })

  rollBtn.addEventListener("click", () => {
    if (!socket.connected || !seated) return
    socket.emit("roll")
  })

  prefillForm()
})()
