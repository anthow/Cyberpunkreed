const path = require('path');

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions;
  const ClasseTemplate = path.resolve(`src/templates/classes.js`);
  const quartierTemplate = path.resolve ('src/templates/quartier.js');

	// Individual classe
	const classe = graphql(`
  {
    allDatoCmsClasse  {
      edges {
        node {
          slug
        }
      }
    }
  }
  
  `).then(result => {
		if (result.errors) {
			Promise.reject(result.errors);
		}

		// Create product pages
		result.data.allDatoCmsClasse.edges.forEach(({ node }) => {
			createPage({
        path: `classes/${node.slug}`,				
        component: ClasseTemplate,         
        context: {
          slug: node.slug,
        },
			});
		});
	});

	// Formations
	const quartier = graphql(`
		{
			allDatoCmsQuartier  {
        edges {
          node  {
					slug
          }
        }
      }
    }
    
	`).then(result => {
		if (result.errors) {
			Promise.reject(result.errors);
		}

		// Create atelier pages
		result.data.allDatoCmsQuartier.edges.forEach(({ node }) => {
			createPage({
        path: `lore/quartiers/${node.slug}`,
        component: quartierTemplate,
        context: {slug: node.slug},
			});
		});
	});



	// Return a Promise which would wait for both the queries to resolve
	return Promise.all([classe, quartier]);
};