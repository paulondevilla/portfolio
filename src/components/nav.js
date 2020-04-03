import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"
import { fluidType } from "./mixins"

const NavWrapper = styled.nav`
  margin-bottom: 2em;
  font-size: 1.8rem;

  ul {
    width: 100%;
    padding: 0;
    list-style: none;
    text-align: center;

    li:not(:last-of-type) {
      margin-bottom: 0.5em;
    }
  }

  @media screen and (min-width: 500px) {
    ${fluidType(20, 100, 1.25, 1.675, "rem")}
  }
`

const StyledLink = styled(Link)`
  border-bottom: 2px solid;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
`

const Nav = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <StyledLink to="/" onClick={() => isSidebarOpen && toggleSidebar()}>
            Projects
          </StyledLink>
          💻
        </li>
        <li>
          <StyledLink
            to="/about-me-page/"
            onClick={() => isSidebarOpen && toggleSidebar()}
          >
            About Me
          </StyledLink>
          👨🏻‍💻
        </li>
        <li>
          <StyledLink
            to="/contact-page/"
            onClick={() => isSidebarOpen && toggleSidebar()}
          >
            Contact
          </StyledLink>
          📧
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav
