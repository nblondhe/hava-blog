import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { rhythm } from "../utils/typography"
import kebabCase from "lodash/kebabCase"
import styled from 'styled-components';

const ArticleIndexDiv = styled.div`
  max-width: 800px;
  margin: 0 ${rhythm(4)} 0 ${rhythm(1 / 2)}; 
`

const IndexHeader = styled.header`
  margin: ${rhythm(2)} 0;

  h1 {
    text-align: left;
    font-size: ${rhythm(3)};
  }

  hr {
    height: ${rhythm(1/4)};
    background: #000;
  }
  
  @media (max-width: 499px) {
    h1 {
      font-size: 2rem;
    }
  }
`

const ArticleSummaryHeader = styled.header`
  margin-top: 0;
  
  h3 {
    margin: 0;
    color: #2B5282;
  }

`

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <ArticleIndexDiv>
      <IndexHeader>
        <h1>
          Articles
        </h1>
        <hr></hr>
      </IndexHeader>
      <SEO title="Recent Articles" />
      {posts.map(({ node }) => {
        const tags = node.frontmatter.tags
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article style={{margin: `${rhythm(2)} 0`}} key={node.fields.slug}>
            <ArticleSummaryHeader>
              <h3>
                <Link to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <span><i>{node.frontmatter.date}</i></span>
            </ArticleSummaryHeader>
            <section>
              <p style={{marginBottom: `${rhythm(1 / 2)}`}}
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
      </ArticleIndexDiv>
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
