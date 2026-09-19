import * as React from "react"
import { Link } from "gatsby"
import FreelanceLayout from "../../../components/freelance-layout"
import * as styles from "../../../css/freelance.module.css"
const { classes } = require("../../../data/classes")

const FreelanceIndexPage = () => (
  <FreelanceLayout
    title="Annonces ouvertes"
    description="EdgeWork — bourse aux contrats. Profils d'edgerunners freelance à Night City."
  >
    <div className={styles.panel}>
      <p className={styles.kicker}>Listings 2045 — non modérés</p>
      <h1 className={styles.title}>Contrats ouverts</h1>
      <p className={styles.lede}>
        Vous n'êtes pas salarié. Vous n'êtes pas assuré. Vous êtes sur la liste. Choisissez un profil, lisez le
        dossier, négociez ensuite — EdgeWork ne prend aucune commission officielle, et ne pose aucune question.
      </p>
      <div className={styles.listing}>
        {classes.map(classe => (
          <Link key={classe.slug} to={`/net/freelance/${classe.slug}`} className={styles.ad}>
            <span className={styles.adTag}>Dossier ouvert</span>
            <img src={classe.portraitSrc} alt="" className={styles.adImg} />
            <h2 className={styles.adTitle}>{classe.nomDeLaClasse}</h2>
            <p className={styles.adBlurb}>{classe.excerpt}</p>
            <span className={styles.adCta}>Ouvrir le dossier →</span>
          </Link>
        ))}
      </div>
    </div>
  </FreelanceLayout>
)

export default FreelanceIndexPage
