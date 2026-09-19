import * as React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
const { gangs } = require("../../data/gangs")

const GangsPage = () => (
  <Layout>
    <Seo title="Les Gangs" description="Les gangs de Night City pour la campagne Daily NightCity." />
    <article className="w-9/12 m-auto text-white">
      <h1 className="text-5xl font-black text-red-600 mb-20">Les gangs</h1>
      {gangs.length === 0 ? (
        <p className="text-gray-400">
          Aucun gang pour l'instant. Ajoute-les dans <code>src/data/gangs.js</code>.
        </p>
      ) : (
        <div className="md:grid grid-cols-4">
          {gangs.map(gang => (
            <Link key={gang.slug} to={`/lore/gang/${gang.slug}`}>
              <section className="flex mb-10 flex-col space-y-2 items-center">
                <img
                  src={gang.imageSrc}
                  alt={gang.nom}
                  className="w-[150px] h-[150px] rounded-full object-cover"
                />
                <h2 className="text-xl text-center font-black text-yellow-400">{gang.nom}</h2>
              </section>
            </Link>
          ))}
        </div>
      )}
    </article>
  </Layout>
)

export default GangsPage
