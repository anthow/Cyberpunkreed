const netSites = [
  {
    slug: "nccs",
    nom: "Portail municipal NCCS",
    url: "/net/nccs",
    disponible: true,
    resume: "Night City Civic Services — répertoire officiel des districts, fiches urbaines et contacts de proximité.",
  },
  {
    slug: "ncpd",
    nom: "NCPD",
    url: "/net/ncpd",
    disponible: true,
    resume: "Night City Police Department — portail public : signalements, avis de recherche, prévention.",
  },
  {
    slug: "freelance",
    nom: "EdgeWork — Bourse aux contrats",
    url: "/net/freelance",
    disponible: true,
    resume: "Annonces freelance pour edgerunners. Profils, capacités, dossiers ouverts. Aucune assurance.",
  },
  {
    slug: "arasaka",
    nom: "Arasaka",
    url: null,
    disponible: false,
    resume: "Portail corporate Arasaka. Authentification biométrique requise.",
  },
  {
    slug: "militech",
    nom: "Militech",
    url: null,
    disponible: false,
    resume: "Réseau défense Militech. Accès réservé aux titulaires d'un contrat actif.",
  },
  {
    slug: "screamsheet",
    nom: "Night City Screamsheet",
    url: null,
    disponible: false,
    resume: "Fil d'infos de la rue. Serveurs saturés — réessayez plus tard.",
  },
  {
    slug: "forums-gangs",
    nom: "Forums de gangs",
    url: null,
    disponible: false,
    resume: "Accès filtré. Votre identifiant n'est pas sur la liste.",
  },
]

module.exports = { netSites }
