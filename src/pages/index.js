import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import { rhythm } from "../utils/typography"
import styled from 'styled-components';

// import cvPDF from '../components/cv.pdf'

const LandingContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
  grid-gap: ${rhythm(1/2)};

  & > * {
    // border: 1px solid #000;
  }
`
const SocialLinksList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 225px; 
  text-indent: 0;
  list-style-type: none;
  padding: ${rhythm(1)} 0;

  li {
    font-size: ${rhythm(2 / 3)};
  }
`

const NameHeader = styled.div`
  margin-bottom: ${rhythm(1)};
  text-align: center;
  h2 {
    font-size: ${rhythm(2)};
    margin-bottom: ${rhythm(1 / 2)};
    margin-top: 0;
  }
`

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const profileImage = data.profileImage.childImageSharp.fluid
  const twitter = data.site.siteMetadata.social.twitter

  return (
    <Layout location={location} title={siteTitle}>
      <section style={{ maxWidth: rhythm(38), margin: `0 auto` }}>
        <LandingContent>
        <div
            style={{
              padding: `${rhythm(.5)}`,
            }}
          >
            <div
              style={{
                marginTop: rhythm(2),
              }}
            >
              <div>
              <NameHeader>
                <h2>Hava Blair</h2>
                <h3 style={{marginTop: `0`}}>PhD Student</h3>
                <a href="mailto:blair304@umn.edu">blair304@umn.edu</a>
              </NameHeader>
              This website provides links to webinar materials and additional
              resources for learning how to use RMarkdown and the R programming
              language to help you share data with many different stakeholders.
              Specifically, we share our approach to creating individualized
              soil health reports for farmers participating in our research
              project. You can download the template and scripts that generate
              our soil health reports and adapt them to your own needs. Even if
              you don't need to create many reports at once like we did,
              thinking about how you can use R Markdown templates and scripts to
              automate any data analysis and reporting workflow can vastly
              increase your efficiency.
              </div>
              <div>
                <a
                href="https://www.swac.umn.edu/directory/grad-students/hava-blair"
                style={{
                  display: `block`,
                  fontSize: rhythm(.75),
                  textAlign: `center`,
                  marginTop: rhythm(1.5),
                }}
              >
                <span
                  style={{
                    paddingBottom: rhythm(1 / 3),
                    border: `2px solid #5688C7`,
                    padding: `.5rem 1.5rem`
                  }}
                >
                  Curriculum Vitae
                </span>
              </a>
              </div>
            </div>
          </div>
          <div
            style={{
              padding: `${rhythm(.5)}`,
              // paddingTop: `${rhythm(4)}`,
            }}
          >
            <div
            style={{
              maxWidth: `325px`,
              // minWidth: `300px`,
              margin: `0 auto`,
              marginTop: `${rhythm(2.5)}`
            }}
            >

            <Image
              fluid={profileImage}
              style={{
                marginTop: rhythm(1),
                marginBottom: rhythm(.75),
                boxShadow: `0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)`,
              }}
              />
            <SocialLinksList>
                  <li>
                    <a href="https://www.linkedin.com/in/hava-blair/">LinkedIn</a>
                  </li>
                  <li className="social-divider"></li>
                  <li style={{ marginLeft: `0` }}>
                    <a href="https://github.com/havablair">Github</a>
                  </li>
                  <li className="social-divider"></li>
                  <li>
                    <a href={`https://twitter.com/${twitter}`}>Twitter</a>
                  </li>
                </SocialLinksList>
            </div>
          </div>
        </LandingContent>
      </section>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
          twitter
        }
      }
    }
    profileImage: file(absolutePath: { regex: "/headshot.JPG/" }) {
      childImageSharp {
        fluid(maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
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
