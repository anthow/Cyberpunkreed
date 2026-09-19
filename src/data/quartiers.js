const PLACEHOLDER =
  '<p class="text-gray-400"><em>Lore à coller ici. Le texte original vivait dans DatoCMS et n\'a pas pu être récupéré. Remplace ce paragraphe dans src/data/quartiers.js.</em></p>'

const quartiers = [
  {
    slug: "watson",
    nom: "Watson",
    typeDeZone: "Zone mixte — portuaire et populaire",
    imageSrc: "/quartiers/placeholder.svg",
    description:
      "<p>Zone de reconstruction urbaine. Un district en plein boom, où les mégabuildings et les arcologies poussent à grande vitesse sous l'influence de la mairie, afin d'offrir un toit aux milliers de personnes encore sans foyer du fait de la guerre. La grande majorité de la population asiatique de Night City y est installée, en particulier dans le quartier désormais appelé Kabuki, où ils représentent désormais plus de 80 % des habitants.</p>",
    complet: true,
    quartierParent: null,
    sousQuartiers: ["kabuki", "northside", "japantown"],
  },
  { slug: "little-europe", nom: "Little Europe", typeDeZone: "Zone populaire", imageSrc: "/quartiers/placeholder.svg" },
  {
    slug: "kabuki",
    nom: "Kabuki",
    typeDeZone: "Zone populaire",
    imageSrc: "/quartiers/placeholder.svg",
    quartierParent: "watson",
    complet: true,
    description:
      "<p>Zone de loisirs et de marché gris, née comme un sous-secteur de Watson avant de prendre sa propre identité. Kabuki concentre ce que Night City refuse de montrer en plein jour : cliniques de rue tenues par des ripperdocs sans licence, échoppes qui vendent aussi bien du synthfood que du matériel volé, et des néons qui promettent plus que ce qu'ils tiennent. Le quartier reste marqué par l'héritage de la communauté asiatique qui l'a bâti après la guerre, et les gangs qui s'y disputent l'influence savent qu'ils ne contrôlent jamais tout : dans ces ruelles, quelqu'un a toujours un œil sur toi.</p>",
  },
  {
    slug: "northside",
    nom: "Northside",
    typeDeZone: "Zone industrielle",
    imageSrc: "/quartiers/placeholder.svg",
    quartierParent: "watson",
    complet: true,
    description:
      "<p>À l'écart des néons de Kabuki, Northside est la partie de Watson que la reconstruction a oubliée. Les mégabuildings y sont plus vieux, plus fissurés, souvent à moitié désaffectés — et pourtant toujours habités, faute de mieux. C'est un quartier de survivants plus que d'habitants : ferrailleurs, familles entassées dans des appartements jamais rénovés, et une économie parallèle qui recycle tout ce que le reste de la ville jette. Les corpos n'y mettent les pieds qu'escortés, et encore.</p>",
  },
  {
    slug: "japantown",
    nom: "Japantown",
    typeDeZone: "Zone commerciale",
    imageSrc: "/quartiers/placeholder.svg",
    quartierParent: "watson",
    complet: true,
    description:
      "<p>Le plus ancien des sous-quartiers de Watson, et le plus surveillé. Japantown a gardé une identité propre — façades traditionnelles reconverties, jardins miniatures coincés entre deux immeubles, sanctuaires urbains — sous une présence corpo permanente qui n'a jamais vraiment disparu depuis les premières implantations d'après-guerre. On y respire un calme trompeur : les rues sont plus propres qu'ailleurs à Watson, et c'est précisément ce qui devrait alerter quiconque n'est pas censé s'y trouver.</p>",
  },
  { slug: "charter-hill", nom: "Charter Hill", typeDeZone: "Zone résidentielle aisée", imageSrc: "/quartiers/placeholder.svg" },
  { slug: "north-oak", nom: "North Oak", typeDeZone: "Zone résidentielle de luxe", imageSrc: "/quartiers/placeholder.svg" },
  { slug: "the-glen", nom: "The Glen", typeDeZone: "Zone mixte — politique et résidentielle", imageSrc: "/quartiers/placeholder.svg" },
  { slug: "wellsprings", nom: "Wellsprings", typeDeZone: "Zone résidentielle", imageSrc: "/quartiers/placeholder.svg" },
  { slug: "vista-del-rey", nom: "Vista del Rey", typeDeZone: "Zone populaire", imageSrc: "/quartiers/placeholder.svg" },
  { slug: "arroyo", nom: "Arroyo", typeDeZone: "Zone industrielle", imageSrc: "/quartiers/placeholder.svg" },
  { slug: "rancho-coronado", nom: "Rancho Coronado", typeDeZone: "Zone résidentielle", imageSrc: "/quartiers/placeholder.svg" },
  { slug: "coastview", nom: "Coastview", typeDeZone: "Zone abandonnée", imageSrc: "/quartiers/placeholder.svg" },
  { slug: "west-wind-estate", nom: "West Wind Estate", typeDeZone: "Zone abandonnée", imageSrc: "/quartiers/placeholder.svg" },
  { slug: "downtown", nom: "Downtown", typeDeZone: "Centre-ville", imageSrc: "/quartiers/placeholder.svg" },
  { slug: "corpo-plaza", nom: "Corpo Plaza", typeDeZone: "Zone corporatiste", imageSrc: "/quartiers/placeholder.svg" },
  { slug: "pacifica", nom: "Pacifica", typeDeZone: "Zone abandonnée", imageSrc: "/quartiers/placeholder.svg" },
  { slug: "combat-zone", nom: "Combat Zone", typeDeZone: "Combat Zone", imageSrc: "/quartiers/placeholder.svg" },
].map(quartier => ({
  ...quartier,
  description: quartier.description || PLACEHOLDER,
  complet: quartier.complet === true,
  quartierParent: quartier.quartierParent ?? null,
  sousQuartiers: quartier.sousQuartiers || [],
}))

function getQuartier(slug) {
  return quartiers.find(quartier => quartier.slug === slug)
}

function quartiersIncomplets() {
  return quartiers.filter(quartier => !quartier.complet)
}

module.exports = { quartiers, getQuartier, quartiersIncomplets }
