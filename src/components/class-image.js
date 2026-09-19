import * as React from "react"

const LOCAL_IMAGES = {
  rockeur: "/classes/rockeur.webp",
  solo: "/classes/solo.webp",
  netrunner: "/classes/netrunner.webp",
  techie: "/classes/techie.webp",
  medtech: "/classes/medtech.webp",
  media: "/classes/media.webp",
  corporatiste: "/classes/corporatiste.webp",
  justicier: "/classes/justicier.jpg",
  fixer: "/classes/fixer.webp",
  nomade: "/classes/nomade.webp",
}

export function localClassKey(slug = "", name = "") {
  const s = `${slug} ${name}`.toLowerCase()
  if (s.includes("netrun")) return "netrunner"
  if (s.includes("rock")) return "rockeur"
  if (s.includes("nomad")) return "nomade"
  if (s.includes("solo")) return "solo"
  if (s.includes("medtech") || s.includes("med tech")) return "medtech"
  if (s.includes("media")) return "media"
  if (s.includes("corpo") || s.includes("exec")) return "corporatiste"
  if (s.includes("justic") || s.includes("lawman")) return "justicier"
  if (s.includes("fixer")) return "fixer"
  if (s.includes("techie") || /\btech\b/.test(s)) return "techie"
  return null
}

const ClassImage = ({ slug, name, imageSrc, className = "w-full", rounded = false }) => {
  const key = localClassKey(slug, name)
  const src = imageSrc || (key ? LOCAL_IMAGES[key] : null)
  if (!src) return null

  return (
    <img
      src={src}
      alt={name || key || ""}
      className={`${className} ${rounded ? "rounded-full" : ""}`.trim()}
    />
  )
}

export default ClassImage
