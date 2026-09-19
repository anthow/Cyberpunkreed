import * as React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
const { quartiers } = require("../../data/quartiers")

const QuartiersPage = () => (
  <Layout>
    <Seo
      title="Les Quartiers"
      description="Les districts de Night City : fiches de lore, portraits et types de zone pour Daily NightCity."
    />
    <article className="w-9/12 m-auto text-white">
      <h1 className="text-5xl font-black text-red-600 mb-20">Les Quartiers</h1>
      <div className="md:grid grid-cols-4">
        {quartiers.map(quartier => (
          <Link key={quartier.slug} to={`/lore/quartiers/${quartier.slug}`}>
            <section className="flex mb-10 flex-col space-y-2 items-center">
              <img
                src={quartier.imageSrc}
                alt={quartier.nom}
                className="w-[150px] h-[150px] rounded-full object-cover"
              />
              <h2 className="text-xl text-center font-black text-yellow-400">{quartier.nom}</h2>
            </section>
          </Link>
        ))}
      </div>
    </article>
  </Layout>
)

export default QuartiersPage
