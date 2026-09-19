import * as React from "react"
import { Link } from "gatsby"
import Seo from "./seo"
import * as styles from "../css/nccs.module.css"

const NAV = [{ to: "/net/nccs", label: "Répertoire des districts" }]

const NccsLayout = ({ title, description, children }) => (
  <div className={styles.shell}>
    <Seo
      title={title}
      titleTemplate="%s | NCCS"
      description={description || "Portail municipal de Night City — répertoire officiel des districts."}
    />
    <header className={styles.bar}>
      <div className={styles.barInner}>
        <p className={styles.brand}>
          <span className={styles.brandMark}>NCCS</span>
          <span className={styles.brandSub}>Night City Civic Services</span>
        </p>
        <nav>
          <ul className={styles.nav}>
            {NAV.map(item => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link to="/net" className={styles.netExit}>
          ← Retour au NET
        </Link>
      </div>
    </header>
    <main className={styles.main}>{children}</main>
    <footer className={styles.footer}>
      © 2045 City of Night City — Night City Civic Services. Document public. Reproduction interdite hors usage municipal.
    </footer>
  </div>
)

export default NccsLayout
