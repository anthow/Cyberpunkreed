import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
   <article className=" < w-10/12 m-auto space-x-20 flex text-white">
<StaticImage className="w-1/3" src="https://static.wikia.nocookie.net/cyberpunk/images/d/db/Rockeryboy_Profile_pic_RED.png/revision/latest?cb=20210501234917" ></StaticImage>
  <section>
coucou
  </section>
   </article>
  </Layout>
)

export default IndexPage
