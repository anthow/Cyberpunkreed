import * as React from "react"
import { Link } from "gatsby"
import Seo from "./seo"
import * as styles from "../css/ncpd.module.css"

const NAV = [
  { to: "/net/ncpd", label: "Accueil" },
  { to: "/net/ncpd/signalements", label: "Signalements" },
  { to: "/net/ncpd/avis-de-recherche", label: "Avis de recherche" },
  { to: "/net/ncpd/prevention", label: "Prévention" },
]

const NcpdLayout = ({ title, description, children, intranet = false }) => (
  <div className={styles.shell}>
    <Seo
      title={title}
      titleTemplate="%s | NCPD"
      description={description || "Portail public du Night City Police Department."}
    />
    {intranet && <div className={styles.banner}>Intranet — accès restreint</div>}
    <header className={styles.bar}>
      <div className={styles.barInner}>
        <p className={styles.brand}>
          <span className={styles.brandMark}>NCPD</span>
          <span className={styles.brandSub}>Night City Police Department</span>
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
      <span>© 2045 City of Night City — NCPD Public Affairs. Tous droits réservés.</span>
      <Link to="/net/ncpd/intranet" className={styles.employee}>
        Accès employé
      </Link>
    </footer>
  </div>
)

export default NcpdLayout
