import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const cards = [
  {
    to: "/classes",
    title: "Classes",
    text: "Les dix rôles de Night City, leurs backgrounds et la progression de chaque capacité spéciale.",
    image: "/classes/rockeur.webp",
    alt: "Portrait du Rockeur",
  },
  {
    to: "/cartes",
    title: "Cartes",
    text: "Les plans de la ville pour poser le décor d'une scène, d'un run ou d'une fusillade.",
    image: "/classes/nightcity.svg",
    alt: "Skyline de Night City",
  },
  {
    to: "/lore",
    title: "Lore",
    text: "Quartiers, gangs et rumours : tout ce qu'un edgerunner doit savoir avant de descendre dans la rue.",
    image: "/quartiers/placeholder.svg",
    alt: "Les quartiers de Night City",
  },
]

const IndexPage = () => (
  <Layout>
    <Seo
      title="Daily NightCity"
      description="Compagnon de campagne Cyberpunk Red : classes, cartes et lore de Night City pour Daily NightCity."
    />
    <article className="w-10/12 m-auto text-white pb-16">
      <section className="max-w-4xl mb-16">
        <p className="text-yellow-400 font-black tracking-widest uppercase mb-3">Campagne Cyberpunk Red</p>
        <h1 className="text-5xl md:text-6xl font-black text-red-600 mb-6">Daily NightCity</h1>
        <p className="text-xl text-gray-200 mb-4">
          Bienvenue dans le Temps du Rouge. Night City ne pardonne rien, mais elle n'oublie jamais un edgerunner assez
          fou pour y faire sa légende.
        </p>
        <p className="text-lg text-gray-400">
          Ce site est le compagnon de notre campagne : fiches de classes, cartes de la ville et lore des rues, pour
          jouer plus vite autour de la table.
        </p>
      </section>

      <section className="grid gap-10 md:grid-cols-3">
        {cards.map(card => (
          <Link
            key={card.to}
            to={card.to}
            className="border border-white/20 hover:border-red-600 transition-colors p-6 flex flex-col items-center text-center"
          >
            <img src={card.image} alt={card.alt} className="w-36 h-36 object-cover rounded-full mb-4 bg-black" />
            <h2 className="text-2xl font-black text-yellow-400 mb-3">{card.title}</h2>
            <p className="text-gray-300">{card.text}</p>
          </Link>
        ))}
      </section>

      <section className="mt-12 border border-yellow-400/40 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-yellow-400 mb-2">Les Quartiers</h2>
          <p className="text-gray-300">
            Watson, Pacifica, le Glen… les fiches de districts, sans passer par le sommaire Lore.
          </p>
        </div>
        <Link
          to="/lore/quartiers"
          className="inline-block bg-red-600 hover:bg-red-500 text-white font-black px-6 py-3 text-center"
        >
          Entrer dans les rues
        </Link>
      </section>
    </article>
  </Layout>
)

export default IndexPage
