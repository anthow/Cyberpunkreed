import * as React from "react"
import NcpdLayout from "../../../components/ncpd-layout"
import * as styles from "../../../css/ncpd.module.css"
const { NCPD_ACCESS_CODE, intranetConfidentiel } = require("../../../data/ncpd")

const STORAGE_KEY = "ncpd-intranet"

const NcpdIntranetPage = () => {
  const [code, setCode] = React.useState("")
  const [unlocked, setUnlocked] = React.useState(false)
  const [denied, setDenied] = React.useState(false)

  React.useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") setUnlocked(true)
    } catch (err) {
      /* ignore */
    }
  }, [])

  const onSubmit = event => {
    event.preventDefault()
    if (code.trim() === NCPD_ACCESS_CODE) {
      setUnlocked(true)
      setDenied(false)
      try {
        sessionStorage.setItem(STORAGE_KEY, "1")
      } catch (err) {
        /* ignore */
      }
      return
    }
    setDenied(true)
    setUnlocked(false)
  }

  return (
    <NcpdLayout
      title="Intranet"
      description="Portail interne du NCPD. Accès réservé."
      intranet
    >
      <div className={styles.panel}>
        <p className={styles.kicker}>NCPD Internal</p>
        <h1 className={styles.title}>Authentification employé</h1>
        {!unlocked && (
          <>
            <p className={styles.lede}>Saisissez votre code d'accès départemental.</p>
            <form className={styles.form} onSubmit={onSubmit}>
              <label className={styles.label} htmlFor="ncpd-code">
                Code d'accès
              </label>
              <input
                id="ncpd-code"
                className={styles.input}
                type="password"
                autoComplete="off"
                value={code}
                onChange={event => {
                  setCode(event.target.value)
                  setDenied(false)
                }}
              />
              <button className={styles.submit} type="submit">
                Se connecter
              </button>
              {denied && <p className={styles.denied}>ACCÈS REFUSÉ</p>}
            </form>
          </>
        )}
        {unlocked && (
          <section className={styles.classified}>
            <p className={styles.lede}>Dossier confidentiel — diffusion interne uniquement.</p>
            <div className={styles.body} dangerouslySetInnerHTML={{ __html: intranetConfidentiel.intro }} />
            {intranetConfidentiel.gangs.map(gang => (
              <article key={gang.slug} className={styles.gangCard}>
                <h2>{gang.nom}</h2>
                <div className={styles.body} dangerouslySetInnerHTML={{ __html: gang.fiche }} />
              </article>
            ))}
            {intranetConfidentiel.annexes.map(annexe => (
              <article key={annexe.slug} className={styles.gangCard}>
                <h2>{annexe.titre}</h2>
                <div className={styles.body} dangerouslySetInnerHTML={{ __html: annexe.contenu }} />
              </article>
            ))}
          </section>
        )}
      </div>
    </NcpdLayout>
  )
}

export default NcpdIntranetPage
