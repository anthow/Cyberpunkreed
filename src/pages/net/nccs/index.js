import * as React from "react"
import { Link } from "gatsby"
import NccsLayout from "../../../components/nccs-layout"
import * as styles from "../../../css/nccs.module.css"
const { quartiers } = require("../../../data/quartiers")

const NccsIndexPage = () => (
  <NccsLayout
    title="Répertoire des districts"
    description="Fiches officielles des districts de Night City — portail municipal NCCS."
  >
    <div className={styles.panel}>
      <p className={styles.kicker}>City of Night City — Urbanisme</p>
      <h1 className={styles.title}>Répertoire des districts</h1>
      <p className={styles.lede}>
        Documents publics d'information municipale. Ces fiches décrivent l'occupation, le climat social et les
        contacts de proximité de chaque secteur. Elles n'ont pas valeur d'ordre de mission.
      </p>
      <div className={styles.directory}>
        {quartiers.map(quartier => (
          <Link key={quartier.slug} to={`/net/nccs/${quartier.slug}`} className={styles.card}>
            {quartier.imageSrc && (
              <img src={quartier.imageSrc} alt="" className={styles.cardImg} />
            )}
            <h2 className={styles.cardTitle}>{quartier.nom}</h2>
            <p className={styles.cardHint}>{quartier.typeDeZone}</p>
          </Link>
        ))}
      </div>
    </div>
  </NccsLayout>
)

export default NccsIndexPage
