import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
const { cartes } = require("../data/cartes")

const CartesPage = () => (
  <Layout>
    <Seo title="Les Cartes" description="Plans et cartes de Night City pour la campagne Daily NightCity." />
    <article className="w-9/12 m-auto text-white">
      <h1 className="text-5xl font-black text-red-600 mb-20">Les Cartes</h1>
      {cartes.length === 0 ? (
        <p className="text-gray-400">
          Aucune carte pour l'instant. Dépose une image dans <code>static/cartes/</code> puis ajoute une
          entrée dans <code>src/data/cartes.js</code>.
        </p>
      ) : (
        <div className="flex flex-col space-y-20">
          {cartes.map(carte => (
            <section key={carte.nom} className="flex mb-10 flex-col space-y-2 items-center">
              <h2 className="text-2xl font-black text-yellow-400">{carte.nom}</h2>
              <img src={carte.imageSrc} alt={carte.nom} className="w-full" />
            </section>
          ))}
        </div>
      )}
    </article>
  </Layout>
)

export default CartesPage
