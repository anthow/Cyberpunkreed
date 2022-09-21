import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby";
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const CLassePage  = ({ data })  => (

  <Layout>
    <Seo title="Home" />
   <article className=" w-10/12 m-auto space-x-20 flex justify-center text-white">
   <article className=" w-10/12 m-auto space-x-20 flex justify-center text-white">
   <GatsbyImage image={data.datoCmsQuartier.image.gatsbyImageData} className="w-1/2" />        

  <section>
  <h1 className=" text-3xl font-black text-red-600 ">{data.datoCmsQuartier.nom}</h1>
  <h1 className=" text-2xl font-black text-yellow-600">{data.datoCmsQuartier.typeDeZone.nom}</h1>
    <div className="w-10/12 mb-10" dangerouslySetInnerHTML={{ __html: data.datoCmsQuartier.description }} />

   
  </section>
   </article>
   </article>
  </Layout>
)

export const query = graphql`
query QuartierPageQuery($slug: String){
    datoCmsQuartier(slug: {eq: $slug}) {
    slug
    description
    nom
    typeDeZone {
      nom
    }
    image {
      gatsbyImageData
    }
   
  }
}
`;


export default CLassePage
