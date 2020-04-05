import React, { useContext, useRef } from "react"

import styled, { css } from "styled-components"
import { fluidType } from "./mixins"

import { SidebarContext } from "./providers"
import { useClickOutsideElement } from "./hooks"

import Footer from "./footer"
import Nav from "./nav"

const SidebarContainer = styled.aside`
  grid-area: sidebar;
  height: 100vh;
  padding: 2em;
  box-shadow: 10px 0 10px hsla(0, 0%, 0%, 0.03),
    15px 0 15px hsla(0, 0%, 0%, 0.03), 20px 0 20px hsla(0, 0%, 0%, 0.03);
  letter-spacing: 0.1rem;
  overflow: hidden;
  z-index: 5;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 0.5em;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
  }

  h1 + p {
    margin-bottom: 3em;
  }

  & > button {
    padding: 0;
    border: none;
    background-color: transparent;
    font-family: inherit;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    cursor: pointer;
    position: fixed;
    top: 2rem;
    right: 2rem;
    display: flex;

    ${fluidType(20, 80, 1.25, 1.675, "rem")}

    @media screen and (min-width: 500px) {
      display: none;
    }
  }

  ${({ isOpen }) =>
    isOpen
      ? css`
          @media screen and (max-width: 1150px) {
            grid-column: 1 / sidebar-end;
            grid-row: 1/-1;
            background-color: hsl(0, 0%, 100%);
            display: flex;
          }
        `
      : css`
          @media screen and (max-width: 1150px) {
            display: none;
          }
        `}

  @media screen and (max-width: 500px) {
    ${({ isOpen }) =>
      isOpen
        ? css`
            grid-column: 1 / -1;
            grid-row: 1/-1;
            padding: 5em 2em;
            background-color: hsl(0, 0%, 100%);
            display: flex;

            h1 {
              margin-bottom: 2em;
              text-align: center;
              font-size: 2.8rem;
            }

            h1 + p {
              display: none;
            }
          `
        : css`
            display: none;
          `}
  }
`

const Sidebar = ({ navRef, siteTitle }) => {
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext)

  const SidebarRef = useRef(null)

  useClickOutsideElement([SidebarRef, navRef], () => {
    isSidebarOpen && toggleSidebar()
  })

  return (
    <SidebarContainer ref={SidebarRef} isOpen={isSidebarOpen}>
      <h1>{siteTitle}</h1>
      <p>
        A self-taught front-end React developer looking for his first junior
        role
      </p>
      <Nav isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <Footer />

      <button onClick={toggleSidebar}>close</button>
    </SidebarContainer>
  )
}

export default Sidebar
