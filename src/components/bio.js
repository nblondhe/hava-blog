import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/headshot.JPG/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginTop: rhythm(1),
        marginBottom: rhythm(0),
      }}
    >
      <p>
        Written by <strong>{author.name}</strong>. {author.summary}
        {` `}
        <a href={`https://twitter.com/${social.twitter}`}>
          Follow on twitter.
        </a>
      </p>
    </div>
  )
}

export default Bio
