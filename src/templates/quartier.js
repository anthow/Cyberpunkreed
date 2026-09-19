import * as React from "react"
import { Link } from "gatsby"
import NccsLayout from "../components/nccs-layout"
import * as styles from "../css/nccs.module.css"
import { htmlToExcerpt } from "../utils/seo-text"
const { getQuartier } = require("../data/quartiers")

const QuartierPage = ({ pageContext }) => {
  const quartier = getQuartier(pageContext.slug)
  if (!quartier) return null

  const parent = quartier.quartierParent ? getQuartier(quartier.quartierParent) : null
  const sousQuartiers = (quartier.sousQuartiers || []).map(getQuartier).filter(Boolean)
  const description =
    htmlToExcerpt(quartier.description) || `Fiche du quartier ${quartier.nom} dans Night City.`

  return (
    <NccsLayout title={quartier.nom} description={description}>
      <article className={styles.panel}>
        <div className={styles.fiche}>
          {quartier.imageSrc && (
            <img src={quartier.imageSrc} alt={quartier.nom} className={styles.portrait} />
          )}
          <section>
            {parent && (
              <p className={styles.parent}>
                Secteur rattaché à{" "}
                <Link to={`/net/nccs/${parent.slug}`}>{parent.nom}</Link>
              </p>
            )}
            <p className={styles.kicker}>Fiche de district</p>
            <h1 className={styles.title}>{quartier.nom}</h1>
            <p className={styles.zone}>{quartier.typeDeZone}</p>
            <div className={styles.body} dangerouslySetInnerHTML={{ __html: quartier.description }} />
            {quartier.figureLocale && (
              <aside className={styles.figure}>
                <h2 className={styles.figureTitle}>Figure locale</h2>
                <p className={styles.figureNom}>{quartier.figureLocale.nom}</p>
                <p className={styles.figureRole}>{quartier.figureLocale.role}</p>
                <p className={styles.figureAccroche}>{quartier.figureLocale.accroche}</p>
              </aside>
            )}
            {sousQuartiers.length > 0 && (
              <section className={styles.subs}>
                <h2>Sous-secteurs recensés</h2>
                <ul>
                  {sousQuartiers.map(enfant => (
                    <li key={enfant.slug}>
                      <Link to={`/net/nccs/${enfant.slug}`}>{enfant.nom}</Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </section>
        </div>
      </article>
    </NccsLayout>
  )
}

export default QuartierPage
