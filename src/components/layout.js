import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"
import "./sass/layout.scss"
import styled from 'styled-components';
// import cvPDF from "./cv.pdf" 

const MainSiteContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: ${rhythm(42)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  padding-top: 0;
`

const MainNavigation = styled.nav`
  margin: ${rhythm(1/2)};
  
  ul {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0; 
    text-indent: 0;
    list-style-type: none;

    @media (max-width: 648px) {
      flex-direction: column;
      text-align: center;
    }

    li {
      margin: .5rem 1rem;
      text-decoration: none;
      font-size: 1rem;
    }
  }
`
// TODO can be one styled component just set variable for flex-direction?
const SidebarNavigation = styled.nav`
  grid-area: sidebar; 
  margin: ${rhythm(1/2)};
  margin-left: ${rhythm(2)};
  padding: ${rhythm(1/2)};
  
  div {
    position: sticky;
    top: 25px;

    ul {
      display: flex;
      justify-content: start;
      flex-direction: column;
      margin: 0 .5rem;
      padding: 0; 
      text-indent: 0;
      list-style-type: none;
      max-width: 150px;
      
      
      li {
        margin: 0 0 .75rem .5rem;
        text-decoration: none;
        font-size: ${rhythm(1/2)};
      }
      
    }
    
    ul.nav-list {
      margin-top: 4rem;

      li {
        margin: 0 0 0 .5rem;
        text-decoration: none;
        font-size: 1rem;
      }
    }

    ul.social-list {
      li {
        margin: 0 0 .25rem .5rem;
      }
    }
  }

  h5 {
    margin-top: ${rhythm(1/3)};
    margin-bottom: .25rem;
  }

  hr {
    margin: 1rem 1rem;
    max-width: 125px;
  }
`
const Layout = ({ location, children, postFrontMatter }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  function getCurrentArticleData() {
    if (postFrontMatter) {
      return (
        <>
          <ul className="article-meta-list">
            <li>
              <h5>Article</h5>
              <span>{postFrontMatter.title}</span>
            </li>
            <li>
              <h5>Published</h5>
              <span>{postFrontMatter.date}</span>
            </li>
          </ul>

          <hr></hr>
        </>
      )
    }
  }
  
  if (location.pathname === rootPath) {
    return (
      <MainSiteContainer>
        <MainNavigation>
          <ul>
            <li>
              <Link to={"/"}>
                About
              </Link>
            </li>
            <li>
                <Link to={"/cv/"}>Curriculum Vitae</Link>
              </li>
            <li>
              <Link to={"/posts/"}>
                Articles
              </Link>
            </li>
            <li>
              <Link to={"/research/"}>
                Research
              </Link>
            </li>
          </ul>
        </MainNavigation>
        <main style={{margin: `0 auto`}}>
        <div style={{maxWidth: rhythm(60)}}>
          {children}
          </div>
        </main>
      </MainSiteContainer>
    )
  } else {
    let currentArticle = getCurrentArticleData();
    return (
      <div className="wrapper">
        <SidebarNavigation>
          <div>
            <ul className="nav-list">
              <li>
                <Link to={"/"}>About</Link>
              </li>
              <li>
                <Link to={"/cv/"}>Curriculum Vitae</Link>
              </li>
              <li>
              <Link to={"/research/"}>
                Research
              </Link>
            </li>
              <li>
                <Link to={"/posts/"}>Articles</Link>
              </li>
              {/* <li>
                <a href="/data-analysis">Data Analysis</a>
              </li> */}
            </ul>

            <hr></hr>

            {currentArticle}

            <ul className="social-list">
              <li>
                <a href="https://www.linkedin.com/in/hava-blair/">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/havablair">Github</a>
              </li>
              <li>
                <a href={`https://twitter.com/havablair`}>Twitter</a>
              </li>
            </ul>
          </div>
        </SidebarNavigation>
        <main className="content" style={{ margin: `0 auto` }}>
          <div style={{ maxWidth: rhythm(60) }}>{children}</div>
        </main>
      </div>
    )
  }
}

export default Layout
