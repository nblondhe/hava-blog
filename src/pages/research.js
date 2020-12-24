import React from "react"

import Bio from "../components/bio"
import Layout from "../components/layout"
// import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

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

const Research = ({ location }) => {
  return (
    <Layout location={location}>
      {/* <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      /> */}
      <article style={{ margin: `0 ${rhythm(4)} 0 ${rhythm(1 / 2)}` }}>
        <PostTitleHeader>
          <h1>Research</h1>
          <hr></hr>
        </PostTitleHeader>
        <ContentWrapper>
          <h2>Lorem Ipsum Incididunt ut Labore</h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
          magna eget est lorem ipsum dolor sit. Ultrices eros in cursus turpis
          massa tincidunt dui ut ornare. Vel quam elementum pulvinar etiam non
          quam lacus suspendisse. Proin fermentum leo vel orci porta non.
          <h2>Press</h2>
          <ul>
            <li>
              Pretium lectus quam id leo in vitae. Proin nibh nisl condimentum
              id. Nulla at volutpat diam ut venenatis tellus in. Eros donec ac
              odio tempor orci dapibus ultrices in. Pellentesque habitant morbi
              tristique senectus et.
            </li>
            <li>
              Pretium lectus quam id leo in vitae. Proin nibh nisl condimentum
              id. Nulla at volutpat diam ut venenatis tellus in. Eros donec ac
              odio tempor orci dapibus ultrices in. Pellentesque habitant morbi
              tristique senectus et.
            </li>
            <li>
              Pretium lectus quam id leo in vitae. Proin nibh nisl condimentum
              id. Nulla at volutpat diam ut venenatis tellus in. Eros donec ac
              odio tempor orci dapibus ultrices in. Pellentesque habitant morbi
              tristique senectus et.
            </li>
          </ul>
          <h2>Publications</h2>
          <ul>
            <li>
              Pretium lectus quam id leo in vitae. Proin nibh nisl condimentum
              id. Nulla at volutpat diam ut venenatis tellus in.
            </li>
            <li>
              Pretium lectus quam id leo in vitae. Proin nibh nisl condimentum
              id. Nulla at volutpat diam ut venenatis tellus in.
            </li>
          </ul>
          <h2>Collaborative Work</h2>
          <ul>
            <li>
              Pretium lectus quam id leo in vitae. Proin nibh nisl condimentum
              id. Nulla at volutpat diam ut venenatis tellus in.
            </li>
          </ul>
          <h2>Data Analysis</h2>
          <i>Blurb about data analysis / visualization passion</i>
          <p>
            Pretium lectus quam id leo in vitae. Proin nibh nisl condimentum id.
            Nulla at volutpat diam ut venenatis tellus in. Eros donec ac odio
            tempor orci dapibus ultrices in. Pellentesque habitant morbi
            tristique senectus et. Nulla porttitor massa id neque aliquam. Diam
            vulputate ut pharetra sit amet aliquam id diam maecenas. Gravida cum
            sociis natoque penatibus et magnis. Posuere ac ut consequat semper
            viverra nam libero. Orci sagittis eu volutpat odio. Porta lorem
            mollis aliquam ut. Vitae semper quis lectus nulla at volutpat. Diam
            ut venenatis tellus in metus vulputate. Erat imperdiet sed euismod
            nisi porta lorem mollis aliquam ut. Tellus molestie nunc non blandit
            massa enim nec dui nunc. At elementum eu facilisis sed odio. Lectus
            proin nibh nisl condimentum id venenatis. Lacinia at quis risus sed
            vulputate odio. Ut tristique et egestas quis ipsum. Dui ut ornare
            lectus sit amet est placerat. Mauris ultrices eros in cursus. Sit
            amet cursus sit amet dictum sit amet justo. Proin sed libero enim
            sed. Nec ultrices dui sapien eget mi proin.
          </p>
        </ContentWrapper>
        <footer
          style={{
            maxWidth: `800px`,
          }}
        >
          <hr
            style={{
              marginBottom: rhythm(1),
              height: rhythm(1 / 6),
              background: `#2B5282`,
            }}
          />
          <Bio />
        </footer>
      </article>
    </Layout>
  )
}

export default Research

