import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import styled from 'styled-components';

const PostTitleHeading = styled.h1`
  margin-top: ${rhythm(1)};
  margin-bottom: 0;
`
const FooterNavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0,
`

const BlogContent = styled.section`
  ul {
    li {
      margin-left: 2rem;
    }
  }

  h4 {
    margin-top: 2rem;
  }
    
  div.footnotes {
    ol {
      padding: 1em;
      margin-bottom: 0;

      p {
        margin-bottom: 0;
      }
    }
  }

  blockquote {
    p {
      padding: 0.5rem 0.25rem;
    }
  }
`

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const twitter = data.site.siteMetadata.social.twitter
  const { previous, next } = pageContext
  // const tags = post.frontmatter.tags

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <PostTitleHeading>
            {post.frontmatter.title}
          </PostTitleHeading>
          <p>
            {post.frontmatter.date}
          </p>
        </header>
        <BlogContent dangerouslySetInnerHTML={{ __html: post.html }} ></BlogContent>
        Comment or Correction? <a href={`https://twitter.com/${twitter}`}> Let me know on Twitter.</a>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav>
        <FooterNavList>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
      </FooterNavList>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        social {
          twitter
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`
