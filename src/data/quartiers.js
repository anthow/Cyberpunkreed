const PLACEHOLDER =
  '<p class="text-gray-400"><em>Lore à coller ici. Le texte original vivait dans DatoCMS et n\'a pas pu être récupéré. Remplace ce paragraphe dans src/data/quartiers.js.</em></p>'

const quartiers = [
  {
    slug: "watson",
    nom: "Watson",
    typeDeZone: "Zone mixte — portuaire et populaire",
    imageSrc: "/quartiers/watson.png",
    description:
      "<p>Zone de reconstruction urbaine. Un district en plein boom, où les mégabuildings et les arcologies poussent à grande vitesse sous l'influence de la mairie, afin d'offrir un toit aux milliers de personnes encore sans foyer du fait de la guerre. La grande majorité de la population asiatique de Night City y est installée, en particulier dans le quartier désormais appelé Kabuki, où ils représentent désormais plus de 80 % des habitants.</p>",
    complet: true,
    quartierParent: null,
    sousQuartiers: ["kabuki", "northside", "japantown"],
    figureLocale: {
      nom: "Lucius Rhyne",
      role: "Conseiller municipal, ancien organisateur syndical",
      accroche: "A mené une grève de trois jours qui a forcé une réforme du conseil municipal de Night City. Depuis son élection, les tensions montent avec un NCPD accusé d'un usage de la force de plus en plus brutal dans le quartier.",
    },
  },
  {
    slug: "little-europe",
    nom: "Little Europe",
    typeDeZone: "Zone populaire",
    imageSrc: "/quartiers/little-europe.png",
    complet: true,
    description:
      "<p>Une enclave où les vieilles familles venues d'Europe après l'effondrement ont recréé un morceau de ce qu'elles avaient perdu : façades en pierre reconstituée, cafés qui refusent de servir en dehors des heures fixées par la tradition, et une méfiance tenace envers tout ce qui vient d'ailleurs. Le quartier vit replié sur lui-même, fier de ses propres règles, et n'hésite pas à rappeler aux visiteurs qu'ici, ce sont eux qui font la loi — pas la police de Night City.</p>",
    figureLocale: {
      nom: "Amanda \"The Pole\" Polishcuk",
      role: "Ancienne solo, gestionnaire du quartier",
      accroche: "Gère un quartier encore marqué par une vague d'overdoses de masse, séquelle d'une guerre interne chez les Bozos qui a débordé jusque dans ses rues.",
    },
  },
  {
    slug: "kabuki",
    nom: "Kabuki",
    typeDeZone: "Zone populaire",
    imageSrc: "/quartiers/kabuki.png",
    quartierParent: "watson",
    complet: true,
    description:
      "<p>Zone de loisirs et de marché gris, née comme un sous-secteur de Watson avant de prendre sa propre identité. Kabuki concentre ce que Night City refuse de montrer en plein jour : cliniques de rue tenues par des ripperdocs sans licence, échoppes qui vendent aussi bien du synthfood que du matériel volé, et des néons qui promettent plus que ce qu'ils tiennent. Le quartier reste marqué par l'héritage de la communauté asiatique qui l'a bâti après la guerre, et les gangs qui s'y disputent l'influence savent qu'ils ne contrôlent jamais tout : dans ces ruelles, quelqu'un a toujours un œil sur toi.</p>",
    figureLocale: {
      nom: "Yoshiki Murakami",
      role: "Négociant et intermédiaire local",
      accroche: "Sert de tampon discret entre le conseil de quartier et les Kimen-Gumi, filiale locale des Tyger Claws qui \"sponsorisent\" de fait Kabuki. Un équilibre de plus en plus difficile à tenir.",
    },
  },
  {
    slug: "northside",
    nom: "Northside",
    typeDeZone: "Zone industrielle",
    imageSrc: "/quartiers/northside.png",
    quartierParent: "watson",
    complet: true,
    description:
      "<p>À l'écart des néons de Kabuki, Northside est la partie de Watson que la reconstruction a oubliée. Les mégabuildings y sont plus vieux, plus fissurés, souvent à moitié désaffectés — et pourtant toujours habités, faute de mieux. C'est un quartier de survivants plus que d'habitants : ferrailleurs, familles entassées dans des appartements jamais rénovés, et une économie parallèle qui recycle tout ce que le reste de la ville jette. Les corpos n'y mettent les pieds qu'escortés, et encore.</p>",
  },
  {
    slug: "japantown",
    nom: "Japantown",
    typeDeZone: "Zone commerciale",
    imageSrc: "/quartiers/japantown.jpeg",
    quartierParent: "watson",
    complet: true,
    description:
      "<p>Le plus ancien des sous-quartiers de Watson, et le plus surveillé. Japantown a gardé une identité propre — façades traditionnelles reconverties, jardins miniatures coincés entre deux immeubles, sanctuaires urbains — sous une présence corpo permanente qui n'a jamais vraiment disparu depuis les premières implantations d'après-guerre. On y respire un calme trompeur : les rues sont plus propres qu'ailleurs à Watson, et c'est précisément ce qui devrait alerter quiconque n'est pas censé s'y trouver.</p>",
    figureLocale: {
      nom: "Adriane Casselle",
      role: "Gestionnaire de quartier (active aussi du côté de Pacifica)",
      accroche: "Essaie de préserver la gare du quartier comme zone neutre entre gangs, alors que la guerre entre Iron Sights et Red Chrome Legion s'intensifie et qu'une hausse inexpliquée de cancers inquiète les habitants.",
    },
  },
  {
    slug: "charter-hill",
    nom: "Charter Hill",
    typeDeZone: "Zone résidentielle aisée",
    imageSrc: "/quartiers/charter-hill.png",
    complet: true,
    description:
      "<p>Un quartier résidentiel fermé, où chaque rue est surveillée par une sécurité privée qui répond plus vite que n'importe quelle patrouille municipale. Les cliniques de chirurgie esthétique et de cyberware haut de gamme y poussent aussi vite que les maisons elles-mêmes, toutes discrètes, toutes hors de prix. On n'entre pas à Charter Hill par hasard : soit on y habite, soit on y est invité, soit on a une très bonne raison d'expliquer pourquoi on y est.</p>",
    figureLocale: {
      nom: "Symon Featherstonehaugh",
      role: "Gestionnaire de quartier, réputé corruptible",
      accroche: "Ferme les yeux sur le recrutement actif des Inquisitors auprès des adolescents du quartier, tant que le calme apparent est maintenu sur ses rapports d'activité.",
    },
  },
  {
    slug: "north-oak",
    nom: "North Oak",
    typeDeZone: "Zone résidentielle de luxe",
    imageSrc: "/quartiers/north-oak.png",
    complet: true,
    description:
      "<p>Le quartier le plus riche de Night City, où les propriétés s'étendent derrière des murs que même les meilleurs grimpeurs évitent d'approcher. Cadres corpos, célébrités et rentiers de troisième génération y cultivent une discrétion absolue — personne ne veut être celui dont le nom apparaît dans un scandale. Ceux qui travaillent ici, jardiniers, gardes, domestiques, savent une chose : ce qu'ils voient à North Oak reste à North Oak.</p>",
  },
  {
    slug: "the-glen",
    nom: "The Glen",
    typeDeZone: "Zone mixte — politique et résidentielle",
    imageSrc: "/quartiers/the-glen.png",
    complet: true,
    description:
      "<p>Quartier ouvrier construit autour d'anciennes usines pétrochimiques, où les familles vivent encore à l'ombre de cheminées qui ne fument plus depuis des décennies. Les rues sont larges, presque vides le jour, et se remplissent le soir de gangs locaux qui tiennent le quartier avec une loyauté de clan plus qu'avec des armes. On y respecte encore les anciens, on y règle les comptes en famille, et on n'aime pas voir débarquer des étrangers sans y être invité.</p>",
    figureLocale: {
      nom: "Zohara Freeman",
      role: "Gestionnaire de quartier, fille d'un ancien maire de Night City",
      accroche: "Gère les suites de l'effondrement récent d'une tour résidentielle du quartier — un sabotage des fondations est fortement soupçonné, sans coupable désigné pour l'instant.",
    },
  },
  {
    slug: "wellsprings",
    nom: "Wellsprings",
    typeDeZone: "Zone résidentielle",
    imageSrc: "/quartiers/wellsprings.png",
    complet: true,
    description:
      "<p>Le quartier le plus religieux de Night City, construit autour d'une ancienne église reconvertie en lieu de rassemblement communautaire. Les peintures murales colorées racontent l'histoire de ceux qui ont survécu à la guerre et à la faillite des corpos qui les employaient. La criminalité y est réelle, mais encadrée par des codes que même les flics finissent par respecter : ici, on ne touche pas aux enfants, et on ne trahit pas son quartier.</p>",
  },
  {
    slug: "vista-del-rey",
    nom: "Vista del Rey",
    typeDeZone: "Zone populaire",
    imageSrc: "/quartiers/vista-del-rey.png",
    complet: true,
    description:
      "<p>Un ancien lotissement pavillonnaire aux couleurs pastel, aujourd'hui vieilli et surpeuplé, où plusieurs générations d'une même famille s'entassent dans des maisons prévues pour une seule. Les jardins ont été transformés en ateliers de mécanique ou en poulaillers de fortune. Vista del Rey vit en autarcie relative, méfiante envers le reste de la ville, et n'hésite pas à fermer ses rues à la circulation quand elle estime ne pas devoir de comptes à qui que ce soit.</p>",
  },
  {
    slug: "arroyo",
    nom: "Arroyo",
    typeDeZone: "Zone industrielle",
    imageSrc: "/quartiers/arroyo.png",
    complet: true,
    description:
      "<p>Zone industrielle reconvertie en logements de fortune, où d'anciens entrepôts abritent désormais des familles entières derrière des cloisons de fortune. L'air y sent encore le métal et l'huile de moteur, hérité des usines qui employaient jadis la moitié du quartier. Ceux qui y vivent travaillent dur, souvent pour des salaires que la ville d'à côté jugerait indignes, et développent une fierté méthodique à ne devoir leur survie à personne d'autre qu'eux-mêmes.</p>",
  },
  {
    slug: "rancho-coronado",
    nom: "Rancho Coronado",
    typeDeZone: "Zone résidentielle",
    imageSrc: "/quartiers/rancho-coronado.png",
    complet: true,
    description:
      "<p>Le quartier le plus récent de Santo Domingo, construit sur un ancien complexe militaire désaffecté, où les mégabuildings à bas coût s'alignent avec une régularité presque militaire. Beaucoup de vétérans de la guerre corporatiste s'y sont installés après leur démobilisation, faute de mieux, et continuent d'y vivre selon une discipline qu'ils n'ont jamais vraiment quittée. C'est un des quartiers les plus sûrs de Night City la nuit — et l'un des plus surveillés.</p>",
    figureLocale: {
      nom: "Aucun gestionnaire officiel actuellement",
      role: "Poste vacant depuis la mort de Sœur Shelly Simpson",
      accroche: "L'ancienne responsable du quartier, à la tête d'un culte technologique local, est morte quand son quartier général a explosé il y a plusieurs années. Depuis, la sécurité y est quasi inexistante et le Weng Fang Tong y fait tourner un atelier clandestin en toute impunité.",
    },
  },
  {
    slug: "coastview",
    nom: "Coastview",
    typeDeZone: "Zone abandonnée",
    imageSrc: "/quartiers/coastview.png",
    complet: true,
    description:
      "<p>D'anciennes résidences balnéaires haut de gamme, construites en prévision d'une clientèle qui n'est jamais venue quand le projet Pacifica s'est effondré. Les façades élégantes tiennent encore debout, rongées par le sel et l'abandon, occupées aujourd'hui par ceux qui ont su s'approprier ce que les corpos ont laissé derrière eux. Vu de loin, ça ressemble presque à ce que ça devait être — de près, plus du tout.</p>",
  },
  {
    slug: "west-wind-estate",
    nom: "West Wind Estate",
    typeDeZone: "Zone abandonnée",
    imageSrc: "/quartiers/west-wind-estate.png",
    complet: true,
    description:
      "<p>Le dernier quartier résidentiel construit avant que Pacifica ne soit abandonné, à moitié vide depuis toujours. Les immeubles qui devaient accueillir des familles entières n'ont jamais été achevés au-delà du rez-de-chaussée, et ceux qui s'y sont installés ont fait avec ce qu'il y avait : des structures nues, sans façade, ouvertes aux quatre vents et à quiconque a le courage d'y monter.</p>",
  },
  {
    slug: "downtown",
    nom: "Downtown",
    typeDeZone: "Centre-ville",
    imageSrc: "/quartiers/downtown.png",
    complet: true,
    description:
      "<p>Le centre névralgique de Night City, où les tours des plus grandes corporations rivalisent de hauteur au-dessus d'une foule qui n'a jamais le temps de lever les yeux. Le jour, c'est une ruche de costumes et de badges d'accès ; la nuit, les mêmes rues appartiennent à ceux qui savent se fondre dans les ombres entre deux halos de sécurité. Rien ne se passe à Downtown sans qu'une corpo, quelque part, ne le sache déjà.</p>",
  },
  {
    slug: "corpo-plaza",
    nom: "Corpo Plaza",
    typeDeZone: "Zone corporatiste",
    imageSrc: "/quartiers/corpo-plaza.png",
    complet: true,
    description:
      "<p>Le cœur du cœur : l'esplanade où se dressent les sièges des méga-corporations qui font vraiment tourner la ville, chacune dans sa propre tour-forteresse. L'accès est filtré, les patrouilles y sont privées et mieux équipées que la police, et le moindre écart de comportement peut vous valoir une expulsion manu militari avant même d'avoir compris votre erreur. Corpo Plaza n'appartient pas à Night City — Night City appartient un peu à Corpo Plaza.</p>",
  },
  {
    slug: "pacifica",
    nom: "Pacifica",
    typeDeZone: "Zone abandonnée",
    imageSrc: "/quartiers/pacifica.png",
    complet: true,
    description:
      "<p>Le grand projet inachevé de Night City : un complexe touristique pensé pour rivaliser avec les plus grandes stations du monde, abandonné à mi-construction quand l'argent corpo s'est retiré du jour au lendemain. Les tours à moitié terminées et le centre commercial vide sont devenus un territoire à part, que même la police évite d'arpenter sans renfort. Ceux qui y vivent ont appris à se passer de tout ce que la ville promet ailleurs — eau, électricité, protection — et ça se voit dans leur regard.</p>",
    figureLocale: {
      nom: "Elliot Kane",
      role: "Gestionnaire de quartier",
      accroche: "Administre un quartier rongé par une guerre froide permanente entre Voodoo Boys et Piranhas locaux, tandis que les ruines de l'ancienne arcologie continuent d'engloutir les pillards trop téméraires.",
    },
  },
  {
    slug: "combat-zone",
    nom: "Combat Zone",
    typeDeZone: "Combat Zone",
    imageSrc: "/quartiers/combat-zone.png",
    complet: true,
    description:
      "<p>Le nom n'est pas une métaphore : c'est une zone que la municipalité a officiellement classée comme non sécurisée, où les patrouilles ne s'aventurent plus depuis des années. Les immeubles qui tenaient encore debout après la guerre ont fini par s'effondrer d'eux-mêmes, ou ont été rasés par ceux qui s'en servaient comme couverture. On y trouve de tout, à condition de savoir à qui demander et de ne pas poser de questions sur la provenance.</p>",
    figureLocale: {
      nom: "Brick Coleman",
      role: "Ancien mercenaire, gestionnaire de quartier",
      accroche: "Tente de maintenir un équilibre précaire entre les vétérans du quartier et la milice Edgerunners Inc qui a pris le relais de la sécurité locale, alors que les Iron Sights regagnent lentement du terrain.",
    },
  },
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
