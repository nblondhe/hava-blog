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
          <h2>Research Interests</h2>
          <ul>
            <li>
              Dynamic soil properties for soil health assessment
              </li>
              <li>
                Landscape- and regional-scale variability in dynamic soil properties
              </li>
              <li>
              <a href="https://www.nature.com/articles/s41558-018-0200-3">Evidence synthesis</a> and research synthesis methods
              </li>
              <li>
                Application of informatics tools and techniques in soil science
              </li>
          </ul>
          <h2>Publications</h2>
          <ul>
            <li>
              Jelinski, N. A., Perrone, S. V., Blair, H. K., & Fabian, M. L. (2020). Growing hearts and minds: Linking landscapes and lifescapes in a soils field course. Natural Sciences Education, 49(1), e20018-e20018. doi:10.1002/nse2.20018 
            </li>
            <li>
              Blair, H., Kocher, M., Lafferty, M., & Gutknecht, J. L. (2020). Soil health umbrella review: Systematic evaluation of meta-analyses addressing the response of soil health indicators to agricultural management. Retrieved from osf.io/me6fd  (Pre-registration of systematic review protocol). 
            </li>
          </ul>
          <h2>Press</h2>
          <ul>
            <li>
              "Healthier soil, layer by layer".  University of Minnesota Extension - Source Magazine.  27 March 2020.  https://extension.umn.edu/source-magazine/healthier-soil-layer-layer
            </li>
          </ul>
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

