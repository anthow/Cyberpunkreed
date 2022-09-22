import * as React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const lorePage = () => (
    
  <Layout>
   <article className="  w-9/12 m-auto  text-white">
       <h1 className="text-5xl font-black text-red-600 mb-20">Le Lore</h1>
       <div className="md:grid grid-cols-4 gap-10">
       <Link to="./quartiers">
        <section className="flex mb-10 flex-col space-y-2 items-center">
            <StaticImage src="https://res.cloudinary.com/liono/image/upload/v1663410289/1398278-1rihbgcawla51-amp_main_img-1_qzxed1.png" width={150} height={150}  className=" rounded-full" />        
            <h2 className="text-2xl font-black text-yellow-400">Les quartiers</h2>
            </section>
            </Link>

            <Link to="./gang">
        <section className="flex mb-10 flex-col space-y-2 items-center">
            <StaticImage src="https://res.cloudinary.com/liono/image/upload/v1663782581/gang_a6msbn.jpg" width={150} height={150}  className=" rounded-full" />        
            <h2 className="text-2xl font-black text-yellow-400">Les gangs</h2>
            </section>
            </Link>

</div>     
   </article>
  </Layout>
)


export default lorePage
