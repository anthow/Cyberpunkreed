import * as React from "react"
import { Link } from "gatsby"
import NcpdLayout from "../../components/ncpd-layout"
import * as styles from "../../css/ncpd.module.css"
const { ncpdAccueil } = require("../../data/ncpd")

const NcpdHomePage = () => (
  <NcpdLayout title="Accueil" description="Portail public du Night City Police Department.">
    <div className={styles.panel}>
      <p className={styles.kicker}>Portail citoyen</p>
      <h1 className={styles.title}>{ncpdAccueil.titre}</h1>
      <p className={styles.lede}>{ncpdAccueil.accroche}</p>
      <div className={styles.body} dangerouslySetInnerHTML={{ __html: ncpdAccueil.message }} />
      <div className={styles.cards}>
        <Link to="/net/ncpd/signalements" className={styles.card}>
          Signalements
          <span className={styles.cardHint}>Déposer un rapport non urgent.</span>
        </Link>
        <Link to="/net/ncpd/avis-de-recherche" className={styles.card}>
          Avis de recherche
          <span className={styles.cardHint}>Personnes recherchées par le Département.</span>
        </Link>
        <Link to="/net/ncpd/prevention" className={styles.card}>
          Prévention
          <span className={styles.cardHint}>Menaces identifiées dans votre district.</span>
        </Link>
      </div>
    </div>
  </NcpdLayout>
)

export default NcpdHomePage
