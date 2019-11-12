const path = require(`path`)
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve(`src/templates/projectTemplate.js`)
  const blogTemplate = path.resolve(`src/templates/blogTemplate.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const path = node.frontmatter.path
    const type = path.split("/")[1]
    if (type === "projects") {
      createPage({
        path: path,
        component: projectTemplate,
        context: {layout: "projects"}, // additional data can be passed via context
      })
    } else if (type === "blog") {
      createPage({
        path: path,
        component: blogTemplate,
        context: {layout: "blog"}, // additional data can be passed via context
      })
    }

  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/projects/)) {
    page.context.layout = "projects"
    createPage(page)
  } else if (page.path.match(/blog/)) {
    page.context.layout = "blog"
    createPage(page)
  }
}
