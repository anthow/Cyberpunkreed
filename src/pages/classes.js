import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const CLassePage = ({ data }) => (
    
  <Layout>
    <Seo title="Classes" />

   <article className=" < w-10/12 m-auto  text-white">
       <h1 className="text-5xl font-black text-red-600 mb-20">Les classes</h1>

       <div className="md:space-x-20 m-auto flex-wrap flex">
   {

data.allDatoCmsClasse.edges.map(({ node }) => {
    return (
        <Link to={node.slug} > 
        <section className="flex mb-10 flex-col space-y-2 items-center">
            <GatsbyImage image={node.portrait.gatsbyImageData} className="rounded-full" />        
            <h2 className="text-2xl font-black text-yellow-400">{node.nomDeLaClasse}</h2>
            </section>
            </Link>

    )})}
    </div>
   </article>
  </Layout>
)
export const query = graphql`
  {
    allDatoCmsClasse {
      edges {
        node {
          nomDeLaClasse
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
    }
  }
`

export default CLassePage
