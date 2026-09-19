import * as React from "react"
import Layout from "./layout"
import Seo from "./seo"
import ClassImage from "./class-image"
import { htmlToExcerpt } from "../utils/seo-text"

const ClasseFiche = ({
  nom,
  slug,
  background,
  nomCapacite,
  description,
  detail,
  imageSrc,
  excerpt,
}) => {
  const descriptionSeo =
    excerpt || htmlToExcerpt(background) || `Fiche de la classe ${nom} pour la campagne Daily NightCity.`

  return (
    <Layout>
      <Seo title={nom} description={descriptionSeo} />
      <article className="w-10/12 m-auto grid grid-cols-1 lg:grid-cols-2 justify-center text-white gap-10">
        <ClassImage slug={slug} name={nom} imageSrc={imageSrc} className="w-full" />
        <section>
          <h1 className="text-3xl font-black text-red-600">{nom}</h1>
          <h2 className="text-2xl font-black text-yellow-600"> Background</h2>
          <div className="mb-10" dangerouslySetInnerHTML={{ __html: background }} />
          <h2 className="text-2xl font-black text-yellow-600"> capacité spéciale</h2>
          <h3 className="text-xl font-black text-white my-5"> {nomCapacite}</h3>
          <div dangerouslySetInnerHTML={{ __html: description }} />
          <div className="mt-5" dangerouslySetInnerHTML={{ __html: detail }} />
        </section>
      </article>
    </Layout>
  )
}

export default ClasseFiche
