const path = require("path")
const { classes } = require("./src/data/classes")
const { quartiers } = require("./src/data/quartiers")
const { gangs } = require("./src/data/gangs")

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const classeTemplate = path.resolve("src/templates/classes.js")
  const quartierTemplate = path.resolve("src/templates/quartier.js")
  const gangTemplate = path.resolve("src/templates/gang.js")
  const redirectTemplate = path.resolve("src/templates/redirect.js")

  const alias = (fromPath, toPath) => {
    createPage({
      path: fromPath,
      component: redirectTemplate,
      context: { to: toPath },
    })
  }

  classes.forEach(classe => {
    const to = `/net/freelance/${classe.slug}`
    createPage({
      path: to,
      component: classeTemplate,
      context: { slug: classe.slug },
    })
    alias(`/classes/${classe.slug}`, to)
  })

  quartiers.forEach(quartier => {
    const to = `/net/nccs/${quartier.slug}`
    createPage({
      path: to,
      component: quartierTemplate,
      context: { slug: quartier.slug },
    })
    alias(`/lore/quartiers/${quartier.slug}`, to)
  })

  gangs.forEach(gang => {
    createPage({
      path: `/lore/gang/${gang.slug}`,
      component: gangTemplate,
      context: { slug: gang.slug },
    })
  })

  alias("/classes", "/net/freelance")
  alias("/lore/quartiers", "/net/nccs")
}
