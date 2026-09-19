import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo
      title="Daily NightCity"
      description="Compagnon de campagne Cyberpunk Red. Jackez dans Le NET pour consulter les architectures locales de Night City."
    />
    <article className="w-10/12 m-auto text-white pb-16">
      <section className="max-w-4xl mb-16">
        <p className="text-yellow-400 font-black tracking-widest uppercase mb-3">Campagne Cyberpunk Red</p>
        <h1 className="text-5xl md:text-6xl font-black text-red-600 mb-6">Daily NightCity</h1>
        <p className="text-xl text-gray-200 mb-4">
          Bienvenue dans le Temps du Rouge. Night City ne pardonne rien, mais elle n'oublie jamais un edgerunner assez
          fou pour y faire sa légende.
        </p>
        <p className="text-lg text-gray-400 mb-10">
          Ce site est le compagnon de notre table. Le lore, les rôles et les institutions se consultent désormais depuis
          Le NET — des architectures locales, telles que la ville les laisse encore joindre.
        </p>
        <Link
          to="/net"
          className="inline-block bg-red-600 hover:bg-red-500 text-white font-black px-8 py-4 text-lg"
        >
          Jacker dans Le NET
        </Link>
      </section>
    </article>
  </Layout>
)

export default IndexPage
