import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const EngagementsIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const engagements = data.allMarkdownRemark.edges
  
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Speaking" />
      <div style={{maxWidth: rhythm(30)}}>
      <h1 style={{textAlign: `center`, fontSize: rhythm(3 / 4 * 2)}}>Speaking Engagements</h1>
      {engagements.map(({ node }) => {
        const mediums = node.frontmatter.mediums

        return (
          <article key={node.fields.slug}
            style={{ margin: `2rem auto`}}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                  marginTop: 0,
                  fontSize: rhythm(3 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {node.frontmatter.title}
                </Link>
              </h3>
            </header>
            <section>
              <p>{node.frontmatter.description}</p>
              <div style={{ fontWeight: `800`}}>
                <span> {node.frontmatter.date}</span>
                <span className="vertical-div"></span>
                <span style={{marginRight: `.25rem`}}></span>
                {mediums.map((medium, index) => {
                  return (
                    <span key={medium} style={{marginRight: `.5rem`}} 
                      className="engagement-type"> {medium} </span>
                  )
                })}
              </div>
            </section>
          </article>
        )
      })}
      </div>
    </Layout>
  )
}

export default EngagementsIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: { collection: {eq: "engagement" }} }
      sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "dddd, MMMM Do YYYY")
            title
            description
            mediums
          }
        }
      }
    }
  }
`
