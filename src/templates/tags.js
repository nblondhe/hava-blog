import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"

import { Link, graphql } from "gatsby"
import styled from 'styled-components';
import { rhythm } from "../utils/typography"


const PostTitleHeader = styled.header`
  margin: ${rhythm(2)} 0;
  max-width: 800px;
  text-align: left;
  h1 {
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
// TODO lower margin percent for small screens
const ContentWrapper = styled.div`
 max-width: 800px;
 margin-bottom: ${rhythm(1)};

.article-contents {
  float: right;
  margin-left: ${rhythm(2)};
  width: 200px;

  h5 {
    margin: 0 0 .5rem 0;
    font-size: ${rhythm(3 / 5)};
  }

  ol {
    list-style-type: decimal;
    font-size: ${rhythm(4 / 7)};
    
    li {
      margin-bottom: .25rem;
    }

    ol {
      margin-top: .25rem;
      list-style-type: lower-alpha;
      font-size: ${rhythm(1 / 2)};
    }
  }

  hr {
    margin-right: 2rem;
  }
}

@media (max-width: 499px) {
  .article-contents {
    float: none;
  }

  section {
    clear: both;
  }
}
`
const Tags = ({ pageContext, data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  
  const { tag } = pageContext
  // const { edges, totalCount } = data.allMarkdownRemark
  const { edges } = data.allMarkdownRemark
  // const tagHeader = `${totalCount} Article${
  //   totalCount === 1 ? "" : "s"
  // } tagged with "${tag}"`

  return (
    <Layout location={location} title={siteTitle}>
      <PostTitleHeader>
        <h1>'{tag}' Articles...</h1>
        <hr></hr>
      </PostTitleHeader>
      <ContentWrapper>
        <ul>
          {edges.map(({ node }) => {
            const { slug } = node.fields
            const { title } = node.frontmatter
            return (
              <li key={slug}>
                <Link to={slug}>{title}</Link>
              </li>
            )
          })}
        </ul>
        <Link to="/tags">All tags</Link>
      </ContentWrapper>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`