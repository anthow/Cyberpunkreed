import * as React from "react"
import NcpdLayout from "../../components/ncpd-layout"
import * as styles from "../../css/ncpd.module.css"

const NcpdSignalementsPage = () => (
  <NcpdLayout title="Signalements" description="Déposer un signalement auprès du NCPD.">
    <div className={styles.panel}>
      <p className={styles.kicker}>Service au public</p>
      <h1 className={styles.title}>Signalements</h1>
      <p className={`${styles.body} ${styles.muted}`}>
        Le formulaire public est temporairement hors ligne pour maintenance. En cas d'urgence, composez le 911.
      </p>
    </div>
  </NcpdLayout>
)

export default NcpdSignalementsPage
