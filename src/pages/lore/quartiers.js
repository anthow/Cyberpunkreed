import * as React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const QuartiersPage = ({ data }) => (
    
  <Layout>
    <Seo title="quartiers" />

   <article className="  w-9/12 m-auto  text-white">
       <h1 className="text-5xl font-black text-red-600 mb-20">Les Quartiers</h1>

       <div className="md:grid grid-cols-4">
   {

data.allDatoCmsQuartier.edges.map(({ node }) => {
    return (
        <Link to={node.slug} > 
        <section className="flex mb-10 flex-col space-y-2 items-center">
            <GatsbyImage image={node.image.gatsbyImageData} className="rounded-full" />        
            <h2 className="text-xl text-center font-black text-yellow-400">{node.nom}</h2>
            </section>
            </Link>

    )})}
    </div>
   </article>
  </Layout>
)
export const query = graphql`
  {
    allDatoCmsQuartier {
      edges {
        node {
            nom
          slug
          image {
            gatsbyImageData  (width: 150
            height:150)
          }
        }
      }
    }
  }
`

export default QuartiersPage
