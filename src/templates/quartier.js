import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { htmlToExcerpt } from "../utils/seo-text"
const { getQuartier } = require("../data/quartiers")

const QuartierPage = ({ pageContext }) => {
  const quartier = getQuartier(pageContext.slug)
  if (!quartier) return null

  const parent = quartier.quartierParent ? getQuartier(quartier.quartierParent) : null
  const sousQuartiers = (quartier.sousQuartiers || []).map(getQuartier).filter(Boolean)
  const description =
    htmlToExcerpt(quartier.description) || `Fiche du quartier ${quartier.nom} dans Night City.`

  return (
    <Layout>
      <Seo title={quartier.nom} titleTemplate="%s | Les Quartiers" description={description} />
      <article className="w-10/12 m-auto grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center text-white">
        {quartier.imageSrc && (
          <img src={quartier.imageSrc} alt={quartier.nom} className="w-full rounded-full lg:rounded-none max-w-md mx-auto" />
        )}
        <section>
          {parent && (
            <p className="text-sm text-gray-400 mb-3">
              Fait partie de{" "}
              <Link to={`/lore/quartiers/${parent.slug}`} className="text-yellow-400 hover:text-yellow-300 underline">
                {parent.nom}
              </Link>
            </p>
          )}
          <h1 className="text-3xl font-black text-red-600">{quartier.nom}</h1>
          <h2 className="text-2xl font-black text-yellow-600">{quartier.typeDeZone}</h2>
          <div className="w-10/12 mb-10" dangerouslySetInnerHTML={{ __html: quartier.description }} />
          {sousQuartiers.length > 0 && (
            <section className="w-10/12 mb-10">
              <h2 className="text-2xl font-black text-yellow-600 mb-3">Sous-quartiers</h2>
              <ul className="space-y-2">
                {sousQuartiers.map(enfant => (
                  <li key={enfant.slug}>
                    <Link
                      to={`/lore/quartiers/${enfant.slug}`}
                      className="text-yellow-400 hover:text-yellow-300 underline"
                    >
                      {enfant.nom}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </section>
      </article>
    </Layout>
  )
}

export default QuartierPage
