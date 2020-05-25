import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import kebabCase from "lodash/kebabCase"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  console.log(siteTitle);
  return (
    <Layout location={location} title={siteTitle}>
      <div style={{maxWidth: rhythm(30)}}>
      <h1 style={{textAlign: `center`, fontSize: rhythm(3 / 4 * 2)}}>Blog</h1>
      <SEO title="All blog posts" />
      {posts.map(({ node }) => {
        const tags = node.frontmatter.tags
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p style={{marginBottom: `${rhythm(1 / 3)}`}}
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
              {tags.map((tag, index) => {
                return <Link
                          className="tag"
                          key={tag} 
                          to={`/tags/${kebabCase(tag)}/`}
                          >{tag}</Link>
              })}
            </section>
          </article>
        )
      })}
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: {collection: {eq: "blog" }} }
      sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
            collection
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`
