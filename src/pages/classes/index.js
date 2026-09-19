import * as React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
const { classes } = require("../../data/classes")

const ClassePage = () => (
  <Layout>
    <Seo
      title="Classes"
      description="Les dix rôles de Cyberpunk Red pour Daily NightCity : Rockeur, Solo, Netrunner, Techie, Medtech, Media, Corporatiste, Justicier, Fixer et Nomade."
    />
    <article className="w-9/12 m-auto text-white">
      <h1 className="text-5xl font-black text-red-600 mb-20">Les classes</h1>
      <div className="md:grid grid-cols-4">
        {classes.map(classe => (
          <Link key={classe.slug} to={`/classes/${classe.slug}`}>
            <section className="flex mb-10 flex-col space-y-2 items-center">
              <img
                src={classe.portraitSrc}
                alt={classe.nomDeLaClasse}
                className="w-[150px] h-[150px] object-contain"
              />
              <h2 className="text-2xl font-black text-yellow-400">{classe.nomDeLaClasse}</h2>
            </section>
          </Link>
        ))}
      </div>
    </article>
  </Layout>
)

export default ClassePage
