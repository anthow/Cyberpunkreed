import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { htmlToExcerpt } from "../utils/seo-text"
const { getGang } = require("../data/gangs")

const GangPage = ({ pageContext }) => {
  const gang = getGang(pageContext.slug)
  if (!gang) return null

  return (
    <Layout>
      <Seo
        title={gang.nom}
        titleTemplate="%s | Les Gangs"
        description={htmlToExcerpt(gang.description) || `Fiche du gang ${gang.nom} pour Daily NightCity.`}
      />
      <article className="w-10/12 m-auto grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center text-white">
        {gang.imageSrc && <img src={gang.imageSrc} alt={gang.nom} className="w-full max-w-md mx-auto" />}
        <section>
          <h1 className="text-3xl font-black text-red-600">{gang.nom}</h1>
          {gang.typeDeZone && <h2 className="text-2xl font-black text-yellow-600">{gang.typeDeZone}</h2>}
          <div className="w-10/12 mb-10" dangerouslySetInnerHTML={{ __html: gang.description || "" }} />
        </section>
      </article>
    </Layout>
  )
}

export default GangPage
