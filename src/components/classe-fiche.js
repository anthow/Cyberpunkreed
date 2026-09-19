import * as React from "react"
import Layout from "./layout"
import Seo from "./seo"
import ClassImage from "./class-image"
import { htmlToExcerpt } from "../utils/seo-text"

const SECTIONS = [
  { id: "background", label: "Background" },
  { id: "capacite", label: "Capacité spéciale" },
  { id: "progression", label: "Progression (rang 1-10)" },
]

const RANK_PATTERN =
  /<p>\s*<strong>\s*Rang\s+(\d+)\s*<\/strong>\s*[—–-]\s*([\s\S]*?)<\/p>/gi

const focusRing = "cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"

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
    if (ranks.length && !ranks.some((rang) => rang.rang === rangActif)) {
      setRangActif(ranks[0].rang)
    }
  }, [ranks, rangActif])

  const ouvrirSection = (id) => {
    setSectionOuverte((actuelle) => (actuelle === id ? null : id))
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

  const activerRang = (rang) => {
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

  const rangSelectionne = ranks.find((rang) => rang.rang === rangActif) || ranks[0]

  return (
    <Layout>
      <Seo title={nom} description={descriptionSeo} />
      <article className="fiche-classe w-10/12 m-auto grid grid-cols-1 lg:grid-cols-2 justify-center text-white gap-10">
        <ClassImage slug={slug} name={nom} imageSrc={imageSrc} className="w-full" />
        <section>
          <h1 className="text-3xl font-black text-red-600">{nom}</h1>
          <div className="mt-4 border-t border-white/20">
            {SECTIONS.map((section, index) => {
              const ouverte = sectionOuverte === section.id
              const panelId = `${uid}-panel-${section.id}`
              const boutonId = `${uid}-bouton-${section.id}`
              return (
                <div key={section.id} className="border-b border-white/20">
                  <h2 className="text-2xl font-black text-yellow-600">
                    <button
                      type="button"
                      id={boutonId}
                      ref={(node) => {
                        boutonSectionRefs.current[section.id] = node
                      }}
                      className={`flex w-full min-h-[44px] items-center justify-between gap-3 py-3 text-left touch-manipulation ${focusRing}`}
                      aria-expanded={ouverte}
                      aria-controls={panelId}
                      aria-label={section.label}
                      onClick={() => ouvrirSection(section.id)}
                      onKeyDown={(event) => onSectionKeyDown(event, index)}
                    >
                      <span>{section.label}</span>
                      <span aria-hidden="true" className="text-red-600 text-3xl leading-none">
                        {ouverte ? "−" : "+"}
                      </span>
                    </button>
                  </h2>
                  {ouverte && (
                    <div
                      id={panelId}
                      role="region"
                      aria-label={section.label}
                      className="pb-6 pt-1 leading-relaxed"
                    >
                      {section.id === "background" && (
                        <div dangerouslySetInnerHTML={{ __html: background }} />
                      )}
                      {section.id === "capacite" && (
                        <>
                          <h3 className="text-xl font-black text-white mb-5">{nomCapacite}</h3>
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
                          focusRing={focusRing}
                        />
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>
      </article>
    </Layout>
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
  focusRing,
}) => {
  if (!ranks.length) {
    return <div dangerouslySetInnerHTML={{ __html: fallbackHtml }} />
  }

  return (
    <>
      {intro ? <div className="mb-5" dangerouslySetInnerHTML={{ __html: intro }} /> : null}
      <div
        role="radiogroup"
        aria-label="Rang de progression"
        className="grid grid-cols-2 sm:grid-cols-5 gap-2"
      >
        {ranks.map((rang, index) => {
          const actif = rang.rang === rangActif
          return (
            <button
              key={rang.rang}
              type="button"
              role="radio"
              aria-checked={actif}
              ref={(node) => {
                boutonRangRefs.current[rang.rang] = node
              }}
              tabIndex={actif ? 0 : -1}
              className={`min-h-[44px] px-2 py-2 text-sm font-black touch-manipulation border ${focusRing} ${
                actif
                  ? "bg-red-600 border-red-600 text-white"
                  : "bg-transparent border-yellow-600 text-yellow-600"
              }`}
              onClick={() => onSelect(rang.rang)}
              onKeyDown={(event) => onRangKeyDown(event, index)}
            >
              Rang {rang.rang}
            </button>
          )
        })}
      </div>
      {rangSelectionne && (
        <div
          id={`${uid}-rang-detail`}
          className="mt-5 p-4 border border-red-600/80"
        >
          <p className="text-xl font-black text-yellow-600 mb-2">
            Rang {rangSelectionne.rang}
          </p>
          <div dangerouslySetInnerHTML={{ __html: rangSelectionne.html }} />
        </div>
      )}
    </>
  )
}

export default ClasseFiche
