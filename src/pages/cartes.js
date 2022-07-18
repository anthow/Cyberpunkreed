import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const CLassePage = ({ data }) => (
    
  <Layout>
    <Seo title="Classes" />

   <article className="  w-9/12 m-auto  text-white">
       <h1 className="text-5xl font-black text-red-600 mb-20">Les Cartes</h1>

       <div className="flex flex-col space-y-20">
   {

data.allDatoCmsCarte.edges.map(({ node }) => {
    return (
        <section className="flex mb-10 flex-col space-y-2 items-center">
                        <h2 className="text-2xl font-black text-yellow-400">{node.nomDeLaCarte}</h2>

            <GatsbyImage image={node.imageDeLaCarte.gatsbyImageData} className="" />        
            </section>

    )})}
    </div>
   </article>
  </Layout>
)
export const query = graphql`
   {
    allDatoCmsCarte {
      edges {
        node {
          nomDeLaCarte
          imageDeLaCarte {
            gatsbyImageData
          }
        }
      }
    }
  }

`

export default CLassePage
