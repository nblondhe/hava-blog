import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import { AnchorLink } from "gatsby-plugin-anchor-links";

import styled from 'styled-components';

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
const FooterNavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin-right: 2rem;
  padding: 0,
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

const BlogContent = styled.section`
  max-width: 600px; 
  
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
const EngagementingLinkList = styled.ul`
    margin: 0;
    padding: 0;
    text-indent: 0;
    list-style-type: none;
    max-width: 500px;

    li {
      margin-left: 0;
      font-size: ${rhythm(3 / 5)};
      text-decoration: none;
      margin-bottom: .25rem;
      padding-bottom: .25rem;
      display: inline-block;
      small {
        margin-left: 1rem;
      }
      a:hover,
      a:active {
        border-bottom: none;
      }
    }
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  // grid-gap: 2rem;
  justify-items: space-between;
  align-content: space-between;
  font-size: ${rhythm(1 / 2)};
  margin-bottom: ${rhythm(1)};
`



const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const headings = post.headings;
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  // const tags = post.frontmatter.tags
  const currentPath = location.pathname.slice(-1) === '/' ? location.pathname.slice(0, -1) : location.pathname;
  const links = post.frontmatter.links

  return (
    <Layout
      location={location}
      title={siteTitle}
      postFrontMatter={data.markdownRemark.frontmatter}
    >
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article style={{ margin: `0 ${rhythm(4)} 0 ${rhythm(1 / 2)}` }}>
        <PostTitleHeader>
          <h1>{post.frontmatter.title}</h1>
          <hr></hr>
        </PostTitleHeader>
        <ContentWrapper>
          {headings.length > 0 &&
              <aside className="article-contents">
              <h5>Contents</h5>
              <ol>
                {headings.map(heading => {
                  if (heading.depth === 1) {
                    return (
                      <li key={heading.value}>
                      <AnchorLink
                        to={`${currentPath}#${heading.value
                          .replace(/\s+/g, "-")
                          .toLowerCase()}`}
                          title={heading.value}>
                        <span>{heading.value}</span>
                      </AnchorLink>
                    </li>
                  )
                } 
                return undefined
                })}
              </ol>
              <hr></hr>
            </aside>
          }
          <BlogContent
            dangerouslySetInnerHTML={{ __html: post.html }}
          ></BlogContent>

          <GridContainer className="engagementing-box">
          <div style={{ gridColumn: `span 3`, fontWeight: `bold`, fontSize: rhythm(3/4)}}>
              Resources
            </div>
              <EngagementingLinkList style={{ gridColumn: `span 8`, justifyContent: `end`}}>
                {links.map((link, index) => {
                  return (
                    <li className="engagementing-item" key={link.author}>
                      <a href={link.link}>{link.linkTitle}</a>
                      <small style={{ fontWeight: `bold` }}>
                        {link.author}
                      </small>
                    </li>
                  )
                })}
              </EngagementingLinkList>
        </GridContainer>
        
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

        </ContentWrapper>
        <footer style={{
              maxWidth: `800px`
            }}>
          <hr
            style={{
              marginBottom: rhythm(1),
              height: rhythm(1 / 6),
              background: `#2B5282`
            }}
          />
          <Bio />
        </footer>
      </article>
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
      headings {
        value
        depth
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        links {
          link
          linkTitle
          author
        }
        tags
      }
    }
  }
`
