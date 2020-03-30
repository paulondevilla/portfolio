import React, { useContext, useRef } from "react"

import styled, { css } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

import { AsideContext } from "./providers"
import { useClickOutsideElement } from "./hooks"

import Footer from "../components/footer"
import Nav from "./nav"

const AsideContainer = styled.aside`
  grid-area: aside;
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

  @media screen and (max-width: 1150px) {
    ${({ isOpen }) =>
      isOpen
        ? css`
            grid-column: 1 / aside-end;
            grid-row: 1/-1;
            background-color: hsl(0, 0%, 100%);
            display: flex;
          `
        : css`
            display: none;
          `}
  }

  @media screen and (max-width: 500px) {
    ${({ isOpen }) =>
      isOpen
        ? css`
            grid-column: 1 / -1;
            grid-row: 1/-1;
            padding: 4em;
            background-color: hsl(0, 0%, 100%);
            display: flex;

            h1 {
              margin-bottom: 2em;
              text-align: center;
              font-size: 2.5rem;
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

const CloseButton = styled(FontAwesomeIcon).attrs(props => ({
  icon: faTimes,
}))`
  font-size: 2rem;
  color: hsla(0, 0%, 67%);
  cursor: pointer;
  display: none;
  position: absolute;
  top: 1em;
  right: 1em;

  @media screen and (max-width: 500px) {
    display: block;
  }
`

const Aside = ({ navRef }) => {
  const { isAsideOpen, toggleAside } = useContext(AsideContext)

  const asideRef = useRef(null)

  useClickOutsideElement([asideRef, navRef], () => {
    isAsideOpen && toggleAside()
  })

  return (
    <AsideContainer ref={asideRef} isOpen={isAsideOpen}>
      <h1>Paul Ondevilla</h1>
      <p>Building well-designed and accessible things for the world wide web</p>
      <Nav toggleAside={toggleAside} />
      <Footer />
      <CloseButton onClick={toggleAside} />
    </AsideContainer>
  )
}

export default Aside
