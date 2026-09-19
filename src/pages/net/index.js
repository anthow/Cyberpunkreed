import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
const { netSites } = require("../data/net-sites")

const NetPage = () => (
  <Layout>
    <Seo
      title="Le NET"
      description="Portail in-fiction du NET de Night City : sites publics, corpos et réseaux de la rue."
    />
    <article className="w-10/12 m-auto text-white pb-16">
      <p className="text-yellow-400 font-black tracking-widest uppercase mb-3">Connexion établie</p>
      <h1 className="text-5xl font-black text-red-600 mb-4">Le NET</h1>
      <p className="text-lg text-gray-300 mb-12 max-w-3xl">
        Les architectures locales encore joignables depuis Night City. La plupart des nœuds corpo refusent votre
        identifiant. Un seul portail public répond pour l'instant.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {netSites.map(site =>
          site.disponible ? (
            <Link
              key={site.slug}
              to={site.url}
              className="border border-white/20 hover:border-red-600 transition-colors p-6 flex flex-col"
            >
              <h2 className="text-2xl font-black text-yellow-400 mb-3">{site.nom}</h2>
              <p className="text-gray-300">{site.resume}</p>
            </Link>
          ) : (
            <div
              key={site.slug}
              className="border border-white/10 p-6 flex flex-col opacity-60 cursor-not-allowed"
              aria-disabled="true"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h2 className="text-2xl font-black text-gray-400">{site.nom}</h2>
                <span className="shrink-0 text-xs font-black uppercase tracking-wide text-gray-500 border border-gray-500 px-2 py-1">
                  Accès indisponible
                </span>
              </div>
              <p className="text-gray-500">{site.resume}</p>
            </div>
          )
        )}
      </div>
    </article>
  </Layout>
)

export default NetPage
