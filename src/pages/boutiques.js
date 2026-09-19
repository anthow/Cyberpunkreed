import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
const { boutiques, catalogues } = require("../data/boutiques")

const BoutiquesPage = () => (
  <Layout>
    <Seo title="Boutiques" description="Boutiques et catalogues pour la campagne Daily NightCity." />
    <article className="w-9/12 m-auto text-white">
      <h1 className="text-5xl font-black text-red-600 mb-20">Les Boutiques</h1>
      {boutiques.length === 0 ? (
        <p className="text-gray-400 mb-20">
          Aucune boutique pour l'instant. Ajoute-les dans <code>src/data/boutiques.js</code>.
        </p>
      ) : (
        <div className="md:grid grid-cols-4">
          {boutiques.map(boutique => (
            <Link key={boutique.slug} to={boutique.slug}>
              <section className="flex mb-10 flex-col space-y-2 items-center">
                <img
                  src={boutique.imageSrc}
                  alt={boutique.nom}
                  className="w-[150px] h-[150px] rounded-full object-cover"
                />
                <h2 className="text-2xl font-black text-yellow-400">{boutique.nom}</h2>
              </section>
            </Link>
          ))}
        </div>
      )}

      <h2 className="text-5xl font-black text-red-600 mb-20">Les Catalogues</h2>
      {catalogues.length === 0 ? (
        <p className="text-gray-400">Aucun catalogue pour l'instant.</p>
      ) : (
        <div className="md:grid grid-cols-4">
          {catalogues.map(catalogue => (
            <a key={catalogue.nom} href={catalogue.url} target="_blank" rel="noreferrer">
              <section className="flex mb-10 flex-col space-y-2 items-center">
                <img
                  src={catalogue.imageSrc}
                  alt={catalogue.nom}
                  className="w-[150px] h-[150px] rounded-full object-cover"
                />
                <h2 className="text-2xl font-black text-yellow-400">{catalogue.nom}</h2>
              </section>
            </a>
          ))}
        </div>
      )}
    </article>
  </Layout>
)

export default BoutiquesPage
