function ranksHtml(intro, lines) {
  return `${intro}${lines
    .map((line, i) => `<p><strong>Rang ${i + 1}</strong> — ${line}</p>`)
    .join("")}`
}

const classes = [
  {
    slug: "rockeur",
    nomDeLaClasse: "Rockeur",
    nomDeLaCapacitSpCiale: "Impact charismatique",
    portraitSrc: "/classes/rockeur.webp",
    imageSrc: "/classes/rockeur.webp",
    excerpt:
      "Artistes rebelles qui transforment une scène, un discours ou une chanson en arme politique. Impact charismatique mesure qui tu peux remuer, et jusqu'où.",
    background: `<p>Les Rockeurs sont les bardes du futur sombre : punks, chanteurs, poètes de rue et agitateurices qui transforment une foule en arme. Là où un Solo sort un fusil, le Rockeur sort une riff, un discours, un visage que toute la rue reconnaît.</p>
<p>Dans le Temps du Rouge, on ne « vend » plus des disques comme en 2020 : on vend une légende. Un bon Rockeur fait basculer un bar, un quartier, parfois une ville entière. Johnny Silverhand a fixé la barre. La plupart des choombas qui montent sur scène se brûlent bien avant de l'atteindre.</p>`,
    description: `<p><strong>Impact charismatique</strong> permet d'influencer des gens par la présence, la performance ou la réputation. On oppose généralement COOL + Impact charismatique à une DV qui dépend de l'audience et de ce qu'on leur demande.</p>
<p>Plus le rang monte, plus le groupe visé peut être large, et plus la faveur demandée peut être lourde — d'une tournée offerte jusqu'à suivre le Rockeur dans une émeute.</p>`,
    dTailCapacitSpCiale: ranksHtml(
      `<p>Le rang d'Impact charismatique élargit l'audience et la gravité de ce que tu peux obtenir.</p>`,
      [
        "Cercle intime (1 ou 2 personnes). Faveur simple : un verre, un coup de main, un renseignement anodin.",
        "Petite tablée. Tu es déjà « quelqu'un » dans le bar.",
        "Petit club (une dizaine de personnes). Faveur sérieuse : cacher quelqu'un, prêter un véhicule.",
        "Salle de quartier. Tes fans te reconnaissent dans la rue.",
        "Foule locale. Tu peux pousser un quartier à se soulever — ou à se calmer.",
        "Scène de district. Faveur dangereuse : prendre les armes, défier un petit caïd.",
        "Night City te connaît. Une rumeur lancée par toi circule en quelques heures.",
        "Tournée urbaine. Tu peux demander un sacrifice réel (argent, couverture, violence).",
        "Légende régionale. Les corps et les gangs font attention à ce que tu dis en public.",
        "Icône. Une foule entière peut suivre, se battre, ou se sacrifier pour ta cause. Attention à ce que tu chantes.",
      ]
    ),
  },
  {
    slug: "solo",
    nomDeLaClasse: "Solo",
    nomDeLaCapacitSpCiale: "Conscience de combat",
    portraitSrc: "/classes/solo.webp",
    imageSrc: "/classes/solo.webp",
    excerpt:
      "Mercenaires, gardes du corps et tueurs à gages. Conscience de combat donne un pool de points à répartir chaque combat.",
    background: `<p>Les Solos sont la violence professionnelle de Night City : vétérans de la 4<sup>e</sup> Guerre, ex-milices corpo, rōnin de la Zone de Combat. Ils ne « jouent » pas les durs. Ils facturent le fait de rester debout quand tout le monde est déjà à terre.</p>
<p>Dans le Temps du Rouge, le travail ne manque pas. Les corporations n'ont plus d'armées aussi propres qu'avant, les gangs ont besoin de muscle, et un edgerunner sans Solo dans l'équipe est un edgerunner qui compte sur la chance.</p>`,
    description: `<p><strong>Conscience de combat</strong> représente l'instinct de survie du Solo. Ton rang égale le nombre de points que tu répartis au début de chaque combat (et que tu peux réajuster selon les règles de ta table) parmi plusieurs options.</p>
<p>Options typiques : Initiative, Détection de menace, Esquive des fumbles, Réduction des dégâts, Attaque précise, Repérer une faiblesse. Chaque point placé améliore cet aspect pour le combat en cours.</p>`,
    dTailCapacitSpCiale: ranksHtml(
      `<p>Points de Conscience de combat = rang. Tu les places dans les options de combat.</p>`,
      [
        "1 point. Tu n'es plus un amateur : un bonus, bien placé, change une passe d'armes.",
        "2 points. Initiative ou réduction de dégâts, au choix.",
        "3 points. Tu peux couvrir deux menaces à la fois.",
        "4 points. Un Solo qui a le temps de lire la pièce.",
        "5 points. Moitié du chemin : tu dictes souvent le tempo du round.",
        "6 points. Les fumbles et les embuscades commencent à te glisser dessus.",
        "7 points. Tu ouvres les armures et tu vois les angles morts.",
        "8 points. Un fireteam corpo te considère comme une cible prioritaire. C'est un compliment.",
        "9 points. Presque trop d'options : le danger, c'est de trop les disperser.",
        "10 points. Légende de la Zone. Dix points à placer, et la pièce entière est déjà réglée dans ta tête.",
      ]
    ),
  },
  {
    slug: "netrunner",
    nomDeLaClasse: "Netrunner",
    nomDeLaCapacitSpCiale: "Interface",
    portraitSrc: "/classes/netrunner.webp",
    imageSrc: "/classes/netrunner.webp",
    excerpt:
      "Les Netrunners plongent leur esprit dans les architectures numériques. Interface ajoute son rang aux tests de run et détermine le nombre d'actions NET par tour.",
    background: `<p>Les Netrunners sont les cowboys du Net : des spécialistes qui plongent leur esprit dans les architectures numériques avec une cyberdeck, des câbles d'interface et, trop souvent, un café trop froid. Là où un Solo ouvre une porte à coups de canon, le Netrunner l'ouvre depuis l'intérieur — caméras, serrures, coffres de données, drones.</p>
<p>Dans le Temps du Rouge, le Vieux Net n'est plus le Far West global d'avant la 4<sup>e</sup> Guerre des Corporations. Les RABIDS de Rache Bartmoss l'ont rendu largement inhabitables. On ne « surf » plus le réseau mondial : on s'infiltre dans des architectures locales, étage par étage, fichier par fichier, ICE par ICE. Un run se joue dans la tête du Netrunner pendant que son corps reste vulnérable dans la viande.</p>
<p>C'est un rôle de précision et de sang-froid. Une mauvaise manœuvre, et le Black ICE vous grille le cerveau sans que personne dans la pièce n'ait levé une arme.</p>`,
    description: `<p><strong>Interface</strong> est la capacité de rôle du Netrunner. Elle mesure sa maîtrise du Netrunning : le rang d'Interface s'ajoute à tous les tests d'Interface effectués pendant un run, et il détermine le nombre d'<strong>actions NET</strong> dont le Netrunner dispose chaque tour.</p>
<p>Pendant un run, le Netrunner agit dans le Net en parallèle du monde réel. Une action NET permet notamment de se jacker ou se déjacker, de se déplacer d'un étage à l'autre de l'architecture (dans la limite de la Vitesse de la cyberdeck), d'activer un Programme, ou d'utiliser une capacité d'Interface.</p>
<p>Capacités d'Interface toujours disponibles (test d'Interface, 1 action NET) :</p>
<ul>
<li><strong>Pathfinder</strong> — cartographier les étages d'une architecture.</li>
<li><strong>Backdoor</strong> — briser un mot de passe / une porte numérique.</li>
<li><strong>Cloak</strong> — se dissimuler aux programmes et aux autres Netrunners.</li>
<li><strong>Control</strong> — prendre le contrôle d'un nœud (caméras, portes, machines).</li>
<li><strong>Eye-Dee</strong> — identifier un fichier ou un programme.</li>
<li><strong>Scanner</strong> — détecter d'autres présences dans l'architecture.</li>
<li><strong>Slide</strong> — échapper à un programme qui vous a accroché.</li>
<li><strong>Virus</strong> — laisser un virus pour plus tard.</li>
<li><strong>Zap</strong> — attaquer un programme ou un Netrunner ennemi.</li>
</ul>`,
    dTailCapacitSpCiale: ranksHtml(
      `<p>Le rang s'ajoute aux tests d'Interface et donne autant d'actions NET par tour.</p>`,
      [
        "+1 aux tests d'Interface. 1 action NET par tour.",
        "+2 aux tests d'Interface. 2 actions NET par tour.",
        "+3 aux tests d'Interface. 3 actions NET par tour.",
        "+4 aux tests d'Interface. 4 actions NET par tour.",
        "+5 aux tests d'Interface. 5 actions NET par tour.",
        "+6 aux tests d'Interface. 6 actions NET par tour.",
        "+7 aux tests d'Interface. 7 actions NET par tour.",
        "+8 aux tests d'Interface. 8 actions NET par tour.",
        "+9 aux tests d'Interface. 9 actions NET par tour.",
        "+10 aux tests d'Interface. 10 actions NET par tour. Tu orchestres un run entier en un battement de cil.",
      ]
    ),
  },
  {
    slug: "techie",
    nomDeLaClasse: "Techie",
    nomDeLaCapacitSpCiale: "Maker",
    portraitSrc: "/classes/techie.webp",
    imageSrc: "/classes/techie.webp",
    excerpt:
      "Bricoleurs, armuriers et génies du rebut. Maker mesure combien d'inventions ou d'améliorations tu peux entretenir.",
    background: `<p>Les Techies font tenir Night City avec du fil de fer, des pièces volées et un fer à souder trop chaud. Personne ne sait vraiment comment la moitié des machines fonctionne encore. Eux, si — ou ils font semblant assez longtemps pour que ça reparte.</p>
<p>Après la Guerre, les chaînes d'approvisionnement sont mortes. Un Techie qui sait fabriquer, réparer et améliorer vaut plus qu'un cargo de chrome flambant neuf. Dans un groupe d'edgerunners, c'est souvent la personne qui transforme un plan idiot en plan faisable.</p>`,
    description: `<p><strong>Maker</strong> est la capacité de rôle du Techie. Ton rang égale le nombre d'objets inventés ou améliorés que tu peux entretenir en même temps. Tu peux fabriquer, améliorer, inventer, et faire du <strong>Jury Rig</strong> (réparation de fortune, le temps d'un combat ou d'une scène).</p>
<p>Plus le rang monte, plus la qualité des améliorations grimpe, et plus tu peux t'attaquer à du matériel lourd : armes exotiques, véhicules, cyberware bricolé.</p>`,
    dTailCapacitSpCiale: ranksHtml(
      `<p>Objets entretenus = rang de Maker. Le Jury Rig est disponible dès le rang 1.</p>`,
      [
        "1 objet. Jury Rig. Tu maintiens un gadget ou une arme améliorée.",
        "2 objets. Tes réparations tiennent plus longtemps que le ruban adhésif.",
        "3 objets. Améliorations correctes, déjà vendables dans la rue.",
        "4 objets. Tu commences à viser de la qualité Excellent.",
        "5 objets. Inventions franches : du matériel qui n'existait pas dans le catalogue.",
        "6 objets. Armes, armures, outils : l'atelier devient une boutique.",
        "7 objets. Véhicules et systèmes lourds. Un Nomade te paierait en essence.",
        "8 objets. Qualité Exceptionnelle. Les corpos envoient des recruteurs — ou des tueurs.",
        "9 objets. Presque plus de limite pratique, sauf le temps et les pièces.",
        "10 objets. Légende du Maker. Ce que tu sors de l'établi n'a pas de prix, et tout le monde le sait.",
      ]
    ),
  },
  {
    slug: "medtech",
    nomDeLaClasse: "Medtech",
    nomDeLaCapacitSpCiale: "Médecine",
    portraitSrc: "/classes/medtech.webp",
    imageSrc: "/classes/medtech.webp",
    excerpt:
      "Chirurgiens de rue, ripperdocs et sauveteurs. Médecine couvre pharma, chirurgie, cyberware et cryo.",
    background: `<p>Les Medtechs sont ceux qui recollent les edgerunners. Parfois dans un hôpital corpo. Plus souvent dans une baignoire de Kabuki, sous une lumière chirurgicale volée, pendant que quelqu'un tient la porte.</p>
<p>Dans le Temps du Rouge, Trauma Team n'arrive pas toujours, et les cliniques légales coûtent un organe. Un Medtech de groupe sait extraire une balle, poser du cyberware, synthétiser un stimulant, et parfois geler un choomba en train de mourir le temps de trouver une vraie table d'opération.</p>`,
    description: `<p><strong>Médecine</strong> regroupe la pharma de combat, la chirurgie (blessures critiques, installation / retrait de cyberware) et les systèmes cryo (cryopompe, cryocuve). Le rang s'ajoute aux tests médicaux pertinents et détermine combien de préparations ou de protocoles tu peux entretenir.</p>
<p>Sans Medtech, un critique à la tête est souvent une retraite vers le cimetière de North Oak.</p>`,
    dTailCapacitSpCiale: ranksHtml(
      `<p>Le rang de Médecine s'ajoute aux tests de soin / chirurgie / pharma, et élargit ce que tu peux maintenir.</p>`,
      [
        "Premier secours sérieux. 1 préparation pharma. Tu stabilises au lieu de prier.",
        "Tu poses du chrome simple et tu traites les critiques les moins horribles.",
        "Petite clinique mobile. 3 préparations. Cryo d'urgence possible.",
        "Chirurgie de rue fiable. Les ripperdocs commencent à te respecter.",
        "Tu installes du cyberware non trivial sans transformer le patient en viande.",
        "Pharma avancée. 6 préparations. Un Solo blessé redevient opérationnel.",
        "Tu gères plusieurs patients, ou un seul cas désespéré.",
        "Qualité clinique corpo — sans la clinique. Les gens paient pour ton nom.",
        "Presque un hôpital à toi tout seul, si on te file l'électricité et le sang.",
        "Légende médicale de Night City. Tu ramènes des gens que la ville avait déjà enterrés.",
      ]
    ),
  },
  {
    slug: "media",
    nomDeLaClasse: "Media",
    nomDeLaCapacitSpCiale: "Crédibilité",
    portraitSrc: "/classes/media.webp",
    imageSrc: "/classes/media.webp",
    excerpt:
      "Journalistes, streamers et chasseurs de vérités. Crédibilité mesure l'audience que tu touches et les portes qu'elle ouvre.",
    background: `<p>Les Medias sont l'autre arme de Night City : caméras, réseaux, rumeurs. Un article bien placé fait plus de dégâts à une corpo qu'une grenade — et parfois les deux, dans le bon ordre.</p>
<p>Dans le Temps du Rouge, la presse n'est plus un quatrième pouvoir propre. C'est un champ de bataille entre Network 54, des chaînes de quartier, et des solo-journalistes qui filment les fosses communes avant que quelqu'un les comble. Un Media d'équipe sait faire parler un témoin, faire taire un scandale, ou mettre le feu à la Data Pool.</p>`,
    description: `<p><strong>Crédibilité</strong> détermine qui te croit et jusqu'où ta voix porte. Plus le rang est haut, plus l'audience est large (du bloc jusqu'aux satellites), et plus tu peux extraire des sources, des rumeurs et des faveurs « parce que t'es à l'antenne ».</p>
<p>Un test de Crédibilité peut ouvrir une porte, protéger un contact, ou transformer un run raté en scandale public — ce qui n'est pas toujours plus sûr.</p>`,
    dTailCapacitSpCiale: ranksHtml(
      `<p>Le rang de Crédibilité élargit l'audience et le poids de tes infos.</p>`,
      [
        "Le pâté de maisons. Tes voisins te croient. Le NCPD, pas encore.",
        "Le quartier. Un blog, une radio pirate, un feed local.",
        "Le district. Les Fixers commencent à prendre tes appels.",
        "Plusieurs districts. Tes sources ont des noms, pas seulement des pseudos.",
        "Night City te lit. Une une de journal local.",
        "La région. Les corpos te classent : utile, ou à acheter, ou à taire.",
        "Échelle nationale (NUSA / Pacifica). Tes enquêtes ont des conséquences.",
        "Audience continentale. On te cite. On te menace. Parfois les deux le même jour.",
        "Audience globale. Tes lives font bouger des cours en bourse.",
        "Voix de l'époque. Tu ne rapportes plus l'Histoire : tu la forces à se montrer.",
      ]
    ),
  },
  {
    slug: "corporatiste",
    nomDeLaClasse: "Corporatiste",
    nomDeLaCapacitSpCiale: "Teamwork",
    portraitSrc: "/classes/corporatiste.webp",
    imageSrc: "/classes/corporatiste.webp",
    excerpt:
      "Cadres, opérateurs et chefs d'équipe. Teamwork te donne des employés qui travaillent même quand tu n'es pas dans la pièce.",
    background: `<p>Les Corporatistes (Execs) sont ceux qui ont encore un badge, un budget, et une équipe. Pas forcément Arasaka Tower : une PME de salvage, une clinique, un label, une milice privée. Dans Night City, « avoir des gens » est une forme de chrome.</p>
<p>Après la Guerre, les organigrammes sont troués. Un Exec d'edgerunners sait faire faire le sale boulot par d'autres : un chauffeur, un hacker junior, un avocat trop payé, un solo de seconde zone. Toi, tu signes, tu négocies, tu restes propre — en apparence.</p>`,
    description: `<p><strong>Teamwork</strong> te donne des membres d'équipe dont le nombre et la compétence montent avec le rang. Tu peux leur confier des tâches hors-scène (surveillance, paperasse, extractions moches) et les faire intervenir en soutien.</p>
<p>Ils ne sont pas des PJ. Ils sont du personnel. S'ils meurent, tu en recrutes. S'ils réussissent, c'est toi qui brilles. C'est tout l'intérêt du poste.</p>`,
    dTailCapacitSpCiale: ranksHtml(
      `<p>Le rang de Teamwork détermine la taille et la qualité de ton équipe.</p>`,
      [
        "1 employé compétent. Un assistant, un chauffeur, un garde.",
        "Toujours 1, mais plus fiable. Il survit à une mauvaise soirée.",
        "2 membres. Tu couvres deux spécialités (muscle + paperasse, par exemple).",
        "2 membres rodés. Ils peuvent résoudre un problème mineur sans toi.",
        "3 membres. Une vraie cellule. Les Fixers te prennent au sérieux.",
        "3 membres aguerris. Tu lances des ops en parallèle d'un run.",
        "4 membres. Mini-corporation. Logistique, sécurité, com, terrain.",
        "4 élites. Tes gens valent une équipe d'edgerunners — presque.",
        "5 membres. On frappe à ta porte pour un job, plus l'inverse.",
        "5+ et une machine bien huilée. Tu n'es plus un cadre : tu es une faction.",
      ]
    ),
  },
  {
    slug: "justicier",
    nomDeLaClasse: "Justicier",
    nomDeLaCapacitSpCiale: "Renforts",
    portraitSrc: "/classes/justicier.jpg",
    imageSrc: "/classes/justicier.jpg",
    excerpt:
      "Flics, miliciens et chasseurs de primes. Renforts mesure qui débarque quand tu appelles, et dans combien de temps.",
    background: `<p>Les Justiciers (Lawmen) portent encore un badge, ou du moins l'idée d'un badge : NCPD, milice de quartier, sécu corpo, bounty office. Dans Night City, la loi est une ressource, pas une morale. Celui qui peut appeler du backup a un super-pouvoir que le Solo envie — jusqu'au moment où le backup tire aussi sur lui.</p>
<p>Le Temps du Rouge a laissé la police en lambeaux. Un Justicier d'équipe est souvent le seul à pouvoir barrer une rue, obtenir une pièce à conviction, ou faire irruption avec des gyrophos au bon (ou au mauvais) moment.</p>`,
    description: `<p><strong>Renforts</strong> te permet d'appeler du soutien. Le rang détermine le délai, le nombre d'unités, et le niveau d'équipement (un partenaire nerveux, un raid tactique, parfois un AV).</p>
<p>Appeler la cavalerie a un prix : témoins, rapports, questions. Un bon Justicier sait quand ne pas appeler.</p>`,
    dTailCapacitSpCiale: ranksHtml(
      `<p>Plus le rang est haut, plus la réponse est rapide, nombreuse et armée.</p>`,
      [
        "Un partenaire, lentement. Mieux que rien, pire qu'un Solo.",
        "1-2 officiers. Délai encore long. Ils posent des questions.",
        "Une patrouille. Tu peux verrouiller une ruelle.",
        "Réponse plus nette. Tes collègues commencent à te faire confiance.",
        "Équipe tactique légère. Portes, boucliers, flashbangs.",
        "Délai court. Night City sait que tu as encore un bouton rouge.",
        "Un raid. Plusieurs unités, peut-être un véhicule lourd.",
        "Réponse d'urgence. Les gangs détestent entendre ton indicatif.",
        "Déploiement majeur. AV, périmètre, médias dans les cinq minutes.",
        "Tu es le bouton rouge. Ce qui arrive ressemble à une déclaration de guerre municipale.",
      ]
    ),
  },
  {
    slug: "fixer",
    nomDeLaClasse: "Fixer",
    nomDeLaCapacitSpCiale: "Operator",
    portraitSrc: "/classes/fixer.webp",
    imageSrc: "/classes/fixer.webp",
    excerpt:
      "Intermédiaires, receleurs et faiseurs de deals. Operator mesure tes contacts, tes rabais, et ce que tu peux dénicher.",
    background: `<p>Les Fixers sont le système nerveux de la rue : jobs, armes, planques, faux papiers, rumeurs. Rien ne circule à Night City sans qu'un Fixer n'en prenne une commission, même microscopique.</p>
<p>Dans le Temps du Rouge, les catalogues officiels sont des blagues. Un Fixer d'équipe sait qui vend encore des balles 10mm, qui rachète du chrome encore chaud, et quel corpo veut un problème résolu sans laisser de badge. Le groupe survit souvent grâce à son carnet d'adresses autant qu'à ses canons.</p>`,
    description: `<p><strong>Operator</strong> couvre trois choses : trouver un objet / un service (disponibilité), le négocier (rabais), et activer un contact. Le rang d'Operator s'ajoute aux tests pertinents et détermine la rareté de ce que tu peux encore « faire apparaître » en 24 heures.</p>
<p>Un Fixer sans rang, c'est un type qui connaît un type. Un Fixer rang 10, c'est le type que tout le monde connaît.</p>`,
    dTailCapacitSpCiale: ranksHtml(
      `<p>Le rang d'Operator ouvre des marchés plus rares et des rabais plus durs.</p>`,
      [
        "Le coin de la rue. Matériel courant, petit rabais, un contact local.",
        "Le quartier. Tu évites les arnaques les plus gonks.",
        "Le district. Armes correctes, planques, faux IDs simples.",
        "Night City commence à répondre à tes messages.",
        "Matériel peu courant. -rang × 5 % sur beaucoup de deals, à la table.",
        "Tu déniches du militaire léger et des services discrets.",
        "Rareté sérieuse : exo, cyberware spécial, véhicules propres.",
        "Les corpos passent par toi pour rester anonymes. Ironique.",
        "Presque n'importe quoi, pourvu qu'on paie. Tes contacts ont des contacts.",
        "Si ça existe à Night City, tu as un prix. Si ça n'existe pas, tu as un délai.",
      ]
    ),
  },
  {
    slug: "nomade",
    nomDeLaClasse: "Nomade",
    nomDeLaCapacitSpCiale: "Moto",
    portraitSrc: "/classes/nomade.webp",
    imageSrc: "/classes/nomade.webp",
    excerpt:
      "Clans de la route, convoyeurs et familles armées. Moto mesure les véhicules et les cousins que tu peux appeler.",
    background: `<p>Les Nomades n'ont pas de quartier : ils ont une famille, des véhicules, et la route. Après les expropriations, les guerres et l'effondrement des interstates, les packs sont devenus le seul réseau logistique encore debout entre Night City et le reste du continent.</p>
<p>Un Nomade en ville n'est jamais vraiment seul. Même quand il entre dans un bar de Watson avec une duster pleine de poussière, quelqu'un, quelque part sur le périph, attend son appel avec un camion, un fusil, ou les deux.</p>`,
    description: `<p><strong>Moto</strong> représente ta place dans le pack. Ton rang égale à peu près le nombre de véhicules familiaux auxquels tu as accès, et la qualité de leurs upgrades. Tu peux aussi faire débarquer des membres du clan (conducteurs, mécaniciens, tireurs) quand la situation le justifie.</p>
<p>Sans Nomade, le groupe marche. Avec un Nomade, le groupe arrive, frappe, et disparaît avant que le NCPD ait fini de remplir le formulaire.</p>`,
    dTailCapacitSpCiale: ranksHtml(
      `<p>Véhicules de clan accessibles ≈ rang de Moto. Les upgrades et le nombre de cousins suivent.</p>`,
      [
        "1 véhicule familial. Une moto, un caisse pourrie, mais elle démarre.",
        "1 véhicule déjà amélioré. Tu n'es plus un auto-stoppeur.",
        "2 véhicules. Un pour frapper, un pour fuir.",
        "2 véhicules corrects + un cousin qui sait tenir un volant sous le feu.",
        "3 véhicules. Petite colonne. Le pack commence à te devoir des faveurs — et l'inverse.",
        "3 véhicules upgradés. Armure, armes de bord, radio clan.",
        "4 véhicules. Tu déplaces une équipe, du matos, et un blessé.",
        "4 à 5, qualité pack. On te voit arriver de loin, ce qui est parfois le but.",
        "Presque un convoi. La famille débarque quand tu tires sur le klaxon.",
        "Tu es un nœud du pack. Ce qui roule pour toi ressemble à une armée de la route.",
      ]
    ),
  },
]

function getClasse(slug) {
  return classes.find(classe => classe.slug === slug)
}

module.exports = { classes, getClasse }
