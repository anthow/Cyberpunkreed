import * as React from "react"
import NcpdLayout from "../../components/ncpd-layout"
import * as styles from "../../css/ncpd.module.css"
const { preventionGangs } = require("../../data/ncpd")

const NcpdPreventionPage = () => (
  <NcpdLayout
    title="Prévention"
    description="Communication officielle du NCPD sur les organisations criminelles actives à Night City."
  >
    <div className={styles.panel}>
      <p className={styles.kicker}>Bureau de la prévention</p>
      <h1 className={styles.title}>Organisations d'intérêt</h1>
      <p className={styles.lede}>
        Informations destinées au public. Ne pas confondre avec les dossiers d'enquête.
      </p>
      <div className={styles.gangList}>
        {preventionGangs.map(gang => (
          <article key={gang.slug} className={styles.gangCard}>
            <h2>{gang.nom}</h2>
            <div className={styles.body} dangerouslySetInnerHTML={{ __html: gang.resume }} />
          </article>
        ))}
      </div>
    </div>
  </NcpdLayout>
)

export default NcpdPreventionPage
