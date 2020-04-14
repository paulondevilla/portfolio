import React from "react"

import styled from "styled-components"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { fluidType } from "./mixins"

config.autoAddCss = false

const FooterContainer = styled.footer`
  margin-top: auto;
  color: hsla(0, 0%, 67%);
  text-align: center;
`

const PersonalLinks = styled.div`
  width: 100%;
  padding-left: 0.1em;
  margin-bottom: 0.5em;
  display: flex;
  justify-content: center;

  ${fluidType(20, 100, 1.25, 1.675, "rem")}

  & > a {
    color: inherit;
  }

  & > a:not(:last-of-type) {
    margin-right: 1.75em;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <PersonalLinks>
        <a href="mailto:plondevilla@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://linkedin.com/in/paulondevilla">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="https://github.com/paulondevilla">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://twitter.com/paulondevilla">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </PersonalLinks>
      <p>Copyright &#64; 2020</p>
    </FooterContainer>
  )
}

export default Footer
