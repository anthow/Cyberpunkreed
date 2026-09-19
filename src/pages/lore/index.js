import * as React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const lorePage = () => (
  <Layout>
    <Seo
      title="Lore"
      description="Lore de Night City pour Daily NightCity : quartiers, gangs et rumours de la campagne."
    />
    <article className="w-9/12 m-auto text-white">
      <h1 className="text-5xl font-black text-red-600 mb-20">Le Lore</h1>
      <div className="md:grid grid-cols-4 gap-10">
        <Link to="/net/nccs">
          <section className="flex mb-10 flex-col space-y-2 items-center">
            <img
              src="/quartiers/placeholder.svg"
              alt="Les quartiers"
              className="w-[150px] h-[150px] rounded-full object-cover"
            />
            <h2 className="text-2xl font-black text-yellow-400">Les quartiers</h2>
          </section>
        </Link>
        <Link to="/lore/gang">
          <section className="flex mb-10 flex-col space-y-2 items-center">
            <img
              src="/classes/solo.svg"
              alt="Les gangs"
              className="w-[150px] h-[150px] rounded-full object-cover"
            />
            <h2 className="text-2xl font-black text-yellow-400">Les gangs</h2>
          </section>
        </Link>
      </div>
    </article>
  </Layout>
)

export default lorePage
