import * as React from "react"
import ClasseFiche from "../components/classe-fiche"
const { getClasse } = require("../data/classes")

const ClassePage = ({ pageContext }) => {
  const classe = getClasse(pageContext.slug)
  if (!classe) return null

  return (
    <ClasseFiche
      nom={classe.nomDeLaClasse}
      slug={classe.slug}
      background={classe.background}
      nomCapacite={classe.nomDeLaCapacitSpCiale}
      description={classe.description}
      detail={classe.dTailCapacitSpCiale}
      imageSrc={classe.imageSrc}
      excerpt={classe.excerpt}
    />
  )
}

export default ClassePage
