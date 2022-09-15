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
   <GatsbyImage image={data.datoCmsClasse.image.gatsbyImageData} className="w-1/3" />        

  <section>
    <h1 className="text-3xl font-black text-red-600">{data.datoCmsClasse.nomDeLaClasse}</h1>
    <h2 className="text-2xl font-black text-yellow-600"> Background</h2>
    <div className="w-1/2 mb-10" dangerouslySetInnerHTML={{ __html: data.datoCmsClasse.background }} />

    <h2 className="text-2xl font-black text-yellow-600"> capacité spéciale</h2>
    <h3 className="text-xl font-black text-white my-5"> {data.datoCmsClasse.nomDeLaCapacitSpCiale}</h3>

    <div className="w-1/2" dangerouslySetInnerHTML={{ __html: data.datoCmsClasse.description }} />
    <div className="mt-5" dangerouslySetInnerHTML={{ __html: data.datoCmsClasse.dTailCapacitSpCiale }} />

  </section>
   </article>
  </Layout>
)

export const query = graphql`
query classsePageQuery($url: String){
  datoCmsClasse(slug: {eq: $url}) {
    nomDeLaClasse
    nomDeLaCapacitSpCiale
    dTailCapacitSpCiale
    background
    description
    slug
    image {
      gatsbyImageData
    }
    portrait {
      gatsbyImageData(
      width: 150
      height:150)
    }
  }
}
`;


export default CLassePage
