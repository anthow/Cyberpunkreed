import * as React from "react"
import { Link } from "gatsby"
import FreelanceLayout from "./freelance-layout"
import ClassImage from "./class-image"
import { htmlToExcerpt } from "../utils/seo-text"
import * as styles from "../css/freelance.module.css"

const SECTIONS = [
  { id: "background", label: "Background" },
  { id: "capacite", label: "Capacité spéciale" },
  { id: "progression", label: "Progression (rang 1-10)" },
]

const RANK_PATTERN =
  /<p>\s*<strong>\s*Rang\s+(\d+)\s*<\/strong>\s*[—–-]\s*([\s\S]*?)<\/p>/gi

function splitProgression(html = "") {
  const ranks = []
  let firstIndex = -1
  let match
  const pattern = new RegExp(RANK_PATTERN.source, RANK_PATTERN.flags)

  while ((match = pattern.exec(html))) {
    if (firstIndex === -1) firstIndex = match.index
    ranks.push({
      rang: Number(match[1]),
      html: `<p>${match[2].trim()}</p>`,
    })
  }

  ranks.sort((a, b) => a.rang - b.rang)
  const intro = firstIndex >= 0 ? html.slice(0, firstIndex).trim() : html
  return { intro, ranks }
}

const ClasseFiche = ({
  nom,
  slug,
  background,
  nomCapacite,
  description,
  detail,
  imageSrc,
  excerpt,
}) => {
  const descriptionSeo =
    excerpt || htmlToExcerpt(background) || `Fiche de la classe ${nom} pour la campagne Daily NightCity.`
  const uid = React.useId()
  const { intro, ranks } = React.useMemo(() => splitProgression(detail || ""), [detail])
  const [sectionOuverte, setSectionOuverte] = React.useState("background")
  const [rangActif, setRangActif] = React.useState(() => ranks[0]?.rang ?? 1)
  const boutonSectionRefs = React.useRef({})
  const boutonRangRefs = React.useRef({})

  React.useEffect(() => {
    if (ranks.length && !ranks.some(rang => rang.rang === rangActif)) {
      setRangActif(ranks[0].rang)
    }
  }, [ranks, rangActif])

  const ouvrirSection = id => {
    setSectionOuverte(actuelle => (actuelle === id ? null : id))
  }

  const onSectionKeyDown = (event, index) => {
    const last = SECTIONS.length - 1
    let next = null
    if (event.key === "ArrowDown") next = index === last ? 0 : index + 1
    if (event.key === "ArrowUp") next = index === 0 ? last : index - 1
    if (event.key === "Home") next = 0
    if (event.key === "End") next = last
    if (next === null) return
    event.preventDefault()
    const id = SECTIONS[next].id
    boutonSectionRefs.current[id]?.focus()
  }

  const activerRang = rang => {
    setRangActif(rang)
    requestAnimationFrame(() => boutonRangRefs.current[rang]?.focus())
  }

  const onRangKeyDown = (event, index) => {
    if (!ranks.length) return
    const last = ranks.length - 1
    let next = null
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      next = index === last ? 0 : index + 1
    }
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      next = index === 0 ? last : index - 1
    }
    if (event.key === "Home") next = 0
    if (event.key === "End") next = last
    if (next === null) return
    event.preventDefault()
    activerRang(ranks[next].rang)
  }

  const rangSelectionne = ranks.find(rang => rang.rang === rangActif) || ranks[0]

  return (
    <FreelanceLayout title={nom} description={descriptionSeo}>
      <article className={styles.panel}>
        <Link to="/net/freelance" className={styles.back}>
          ← Retour aux annonces
        </Link>
        <div className={styles.fiche}>
          <ClassImage slug={slug} name={nom} imageSrc={imageSrc} className={styles.portrait} />
          <section>
            <h1 className={styles.ficheTitle}>{nom}</h1>
            <div className={styles.accordion}>
              {SECTIONS.map((section, index) => {
                const ouverte = sectionOuverte === section.id
                const panelId = `${uid}-panel-${section.id}`
                const boutonId = `${uid}-bouton-${section.id}`
                return (
                  <div key={section.id} className={styles.accItem}>
                    <h2>
                      <button
                        type="button"
                        id={boutonId}
                        ref={node => {
                          boutonSectionRefs.current[section.id] = node
                        }}
                        className={styles.accButton}
                        aria-expanded={ouverte}
                        aria-controls={panelId}
                        aria-label={section.label}
                        onClick={() => ouvrirSection(section.id)}
                        onKeyDown={event => onSectionKeyDown(event, index)}
                      >
                        <span>{section.label}</span>
                        <span aria-hidden="true" className={styles.accIcon}>
                          {ouverte ? "−" : "+"}
                        </span>
                      </button>
                    </h2>
                    {ouverte && (
                      <div
                        id={panelId}
                        role="region"
                        aria-label={section.label}
                        className={styles.accPanel}
                      >
                        {section.id === "background" && (
                          <div dangerouslySetInnerHTML={{ __html: background }} />
                        )}
                        {section.id === "capacite" && (
                          <>
                            <h3 className={styles.capName}>{nomCapacite}</h3>
                            <div dangerouslySetInnerHTML={{ __html: description }} />
                          </>
                        )}
                        {section.id === "progression" && (
                          <ProgressionRang
                            uid={uid}
                            intro={intro}
                            ranks={ranks}
                            fallbackHtml={detail}
                            rangActif={rangSelectionne?.rang}
                            rangSelectionne={rangSelectionne}
                            boutonRangRefs={boutonRangRefs}
                            onSelect={activerRang}
                            onRangKeyDown={onRangKeyDown}
                            styles={styles}
                          />
                        )}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </section>
        </div>
      </article>
    </FreelanceLayout>
  )
}

const ProgressionRang = ({
  uid,
  intro,
  ranks,
  fallbackHtml,
  rangActif,
  rangSelectionne,
  boutonRangRefs,
  onSelect,
  onRangKeyDown,
  styles,
}) => {
  if (!ranks.length) {
    return <div dangerouslySetInnerHTML={{ __html: fallbackHtml }} />
  }

  return (
    <>
      {intro ? <div dangerouslySetInnerHTML={{ __html: intro }} /> : null}
      <div role="radiogroup" aria-label="Rang de progression" className={styles.rankGrid}>
        {ranks.map((rang, index) => {
          const actif = rang.rang === rangActif
          return (
            <button
              key={rang.rang}
              type="button"
              role="radio"
              aria-checked={actif}
              ref={node => {
                boutonRangRefs.current[rang.rang] = node
              }}
              tabIndex={actif ? 0 : -1}
              className={`${styles.rankBtn} ${actif ? styles.rankBtnActive : ""}`}
              onClick={() => onSelect(rang.rang)}
              onKeyDown={event => onRangKeyDown(event, index)}
            >
              Rang {rang.rang}
            </button>
          )
        })}
      </div>
      {rangSelectionne && (
        <div id={`${uid}-rang-detail`} className={styles.rankDetail}>
          <p className={styles.rankDetailTitle}>Rang {rangSelectionne.rang}</p>
          <div dangerouslySetInnerHTML={{ __html: rangSelectionne.html }} />
        </div>
      )}
    </>
  )
}

export default ClasseFiche
