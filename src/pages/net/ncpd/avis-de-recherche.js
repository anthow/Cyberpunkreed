import * as React from "react"
import NcpdLayout from "../../../components/ncpd-layout"
import * as styles from "../../../css/ncpd.module.css"

const NcpdAvisPage = () => (
  <NcpdLayout title="Avis de recherche" description="Avis de recherche publics du NCPD.">
    <div className={styles.panel}>
      <p className={styles.kicker}>Police judiciaire</p>
      <h1 className={styles.title}>Avis de recherche</h1>
      <p className={`${styles.body} ${styles.muted}`}>
        Aucun avis n'est actuellement diffusé sur ce portail. Revenez consulter cette page.
      </p>
    </div>
  </NcpdLayout>
)

export default NcpdAvisPage
