const gangs = [
  // { slug: "maelstrom", nom: "Maelstrom", typeDeZone: "Watson", imageSrc: "/gangs/maelstrom.svg", description: "<p></p>" },
]

function getGang(slug) {
  return gangs.find(gang => gang.slug === slug)
}

module.exports = { gangs, getGang }
