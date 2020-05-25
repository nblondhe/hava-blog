import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import styled from 'styled-components'

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


const EngagementContent = styled.section`
    grid-column: span 8;
`

const FooterNavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0,
`

const EngagementPostTemplate = ({ data, pageContext, location }) => {
  const engagement = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  const links = engagement.frontmatter.links
  
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={engagement.frontmatter.title}
        description={engagement.frontmatter.description || engagement.excerpt}
      />
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {engagement.frontmatter.title}
          </h1>
          <p>
            {engagement.frontmatter.date}
          </p>
        </header>
        <GridContainer className="engagementing-box">
          <div style={{ gridColumn: `span 4`, fontWeight: `bold`, fontSize: rhythm(3/4)}}>
              Materials
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
        <EngagementContent
            dangerouslySetInnerHTML={{ __html: engagement.html }}
          ></EngagementContent>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer></footer>
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

export default EngagementPostTemplate

export const pageQuery = graphql`
  query LongEngagementBySlug($slug: String!) {
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
        links {
          link
          linkTitle
          author
        }
      }
    }
  }
`
