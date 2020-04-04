/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext, useRef } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import styled, { createGlobalStyle, css } from "styled-components"
import { fluidType } from "./mixins"

import { SidebarContext } from "./providers"

import Sidebar from "./sidebar"

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: hsl(0, 0%, 100%);
    color: hsl(0, 0%, 13%);
    font-family: "Space Mono", monospace;
    line-height: 1.4;

    ${fluidType(20, 80, 1, 1.375, "rem")}
  }

  h1,
  h2,
  h3 {
      line-height: 1.2;
  }

  h1 { 
    ${fluidType(20, 80, 1.75, 2.5, "rem")}
  }

  h2 { 
    ${fluidType(20, 80, 1.375, 1.75, "rem")}
  }

  h3 { 

    ${fluidType(20, 80, 1.125, 1.5, "rem")}
  }
`

const LayoutContainer = styled.div`
  max-width: 1600px;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(350px, 1fr) [sidebar-end] 3fr;
  grid-template-areas: "main main";

  @media screen and (min-width: 1150px) {
    grid-template-areas: "sidebar main";
  }

  & > nav {
    z-index: 2;
    position: fixed;
    top: 2em;
    right: 2em;
    display: flex;

    @media screen and (min-width: 1150px) {
      display: none;
    }

    span {
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      cursor: pointer;

      ${fluidType(20, 80, 1.25, 1.675, "rem")}
    }
  }
`

const Main = styled.main`
  grid-area: main;
  padding: 5em 2em;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ isSidebarOpen }) =>
    isSidebarOpen &&
    css`
      filter: blur(2px);
    `}

  & > h1 {
    margin-bottom: 0.5em;
  }

  & > h1 + p {
    max-width: 500px;
    margin-bottom: 3em;
    text-align: center;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext)

  const navRef = useRef(null)

  return (
    <LayoutContainer>
      <GlobalStyle />

      <Sidebar navRef={navRef} />

      <Main isSidebarOpen={isSidebarOpen}>{children}</Main>

      <nav>
        <span ref={navRef} onClick={toggleSidebar}>
          {isSidebarOpen ? "close" : "menu"}
        </span>
      </nav>
    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
