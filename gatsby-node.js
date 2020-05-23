const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require("lodash")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const read = path.resolve(`./src/templates/read-post.js`)
  const tagTemplate = path.resolve("src/templates/tags.js")

  const result = await graphql(
    `
      {
        allContent: allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
                collection
              }
              frontmatter {
                title
              }
            }
          }
        }
        tagsGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const allSiteContent = result.data.allContent.edges

  allSiteContent.forEach((content, index) => {
    const previous = index === allSiteContent.length - 1 ? null : allSiteContent[index + 1].node
    const next = index === 0 ? null : allSiteContent[index - 1].node
    const renderComponent = content.node.fields.collection == `blog`? blogPost : read;
    createPage({
      path: content.node.fields.slug,
      component: renderComponent,
      context: {
        slug: content.node.fields.slug,
        previous,
        next,
      },
    })
  })

  const tags = result.data.tagsGroup.group
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    const collection = getNode(node.parent).sourceInstanceName;
    createNodeField({
      name: `slug`,
      node,
      value,
    })
    createNodeField({
      name: `collection`,
      node,
      value: collection,
    })
  }
}
