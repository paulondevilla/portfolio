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

import { AsideContext } from "./providers"

import Aside from "./aside"

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
  grid-template-columns: minmax(350px, 1fr) [aside-end] 3fr;
  grid-template-areas: "aside main";

  @media screen and (max-width: 1150px) {
    grid-template-rows: minmax(100px, 1fr) auto;
    grid-template-areas:
      "nav nav"
      "main main";
  }

  & > nav {
    grid-area: nav;
    z-index: 2;
    position: sticky;
    top: 0;
    display: none;

    @media screen and (max-width: 1150px) {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
    }

    span {
      margin-right: 2em;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      cursor: pointer;

      ${fluidType(20, 80, 1.25, 1.675, "rem")}
    }
  }
`

const Main = styled.main`
  grid-area: main;

  @media screen and (max-width: 1150px) {
    ${({ isAsideOpen }) =>
      isAsideOpen &&
      css`
        height: calc(100vh - 100px);
        overflow: hidden;
        filter: blur(2px);
      `}
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

  const { isAsideOpen, toggleAside } = useContext(AsideContext)

  const navRef = useRef(null)

  return (
    <LayoutContainer>
      <GlobalStyle />

      <Aside navRef={navRef} />

      <Main isAsideOpen={isAsideOpen}>{children}</Main>

      <nav>
        <span ref={navRef} onClick={toggleAside}>
          {isAsideOpen ? "close" : "menu"}
        </span>
      </nav>
    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
