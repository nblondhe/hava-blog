import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"

import kebabCase from "lodash/kebabCase"

import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import styled from 'styled-components';
import { rhythm } from "../utils/typography"


const PostTitleHeader = styled.header`
  margin: ${rhythm(2)} 0;
  max-width: 800px;
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

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}, location) => (
  <Layout location={location} title={title}>
    <Helmet title={title} />
    <PostTitleHeader>
          <h1>Tags</h1>
          <hr></hr>
        </PostTitleHeader>
        <ContentWrapper>
          <ul>
            {group.map(tag => (
              <li key={tag.fieldValue}>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </ContentWrapper>
  </Layout>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`