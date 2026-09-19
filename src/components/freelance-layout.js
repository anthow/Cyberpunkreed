import * as React from "react"
import { Link } from "gatsby"
import Seo from "./seo"
import * as styles from "../css/freelance.module.css"

const NAV = [{ to: "/net/freelance", label: "Annonces ouvertes" }]

const FreelanceLayout = ({ title, description, children }) => (
  <div className={styles.shell}>
    <Seo
      title={title}
      titleTemplate="%s | EdgeWork"
      description={description || "EdgeWork — bourse aux contrats freelance de Night City."}
    />
    <header className={styles.bar}>
      <div className={styles.barInner}>
        <p className={styles.brand}>
          <span className={styles.brandMark}>EdgeWork</span>
          <span className={styles.brandSub}>Bourse aux contrats</span>
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
      EdgeWork n'est affilié à aucune corporation. Les contrats n'incluent ni assurance, ni extraction, ni plan funéraire.
    </footer>
  </div>
)

export default FreelanceLayout
