const path = require("path")
const { classes } = require("./src/data/classes")
const { quartiers } = require("./src/data/quartiers")
const { gangs } = require("./src/data/gangs")

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const classeTemplate = path.resolve("src/templates/classes.js")
  const quartierTemplate = path.resolve("src/templates/quartier.js")
  const gangTemplate = path.resolve("src/templates/gang.js")

  classes.forEach(classe => {
    createPage({
      path: `/classes/${classe.slug}`,
      component: classeTemplate,
      context: { slug: classe.slug },
    })
  })

  quartiers.forEach(quartier => {
    createPage({
      path: `/lore/quartiers/${quartier.slug}`,
      component: quartierTemplate,
      context: { slug: quartier.slug },
    })
  })

  gangs.forEach(gang => {
    createPage({
      path: `/lore/gang/${gang.slug}`,
      component: gangTemplate,
      context: { slug: gang.slug },
    })
  })
}
