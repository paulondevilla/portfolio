import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"
import { fluidType } from "./mixins"

const NavContainer = styled.nav`
  margin-bottom: 2em;

  ${fluidType(20, 100, 1.25, 1.675, "rem")}

  ul {
    width: 100%;
    padding: 0;
    list-style: none;
    text-align: center;

    li:not(:last-of-type) {
      margin-bottom: 0.5em;
    }
  }

  @media screen and (max-width: 500px) {
    font-size: 1.8rem;
  }
`

const StyledLink = styled(Link)`
  border-bottom: 2px solid;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
`

const Nav = ({ toggleAside }) => {
  return (
    <NavContainer>
      <ul>
        <li>
          <StyledLink to="/" onClick={toggleAside}>
            Works
          </StyledLink>
          💻
        </li>
        <li>
          <StyledLink to="/page-2/" onClick={toggleAside}>
            About Me
          </StyledLink>
          👨🏻‍💻
        </li>
        <li>
          <StyledLink to="/page-2/" onClick={toggleAside}>
            Contact
          </StyledLink>
          📧
        </li>
      </ul>
    </NavContainer>
  )
}

export default Nav