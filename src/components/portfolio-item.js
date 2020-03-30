import React from "react"
import { Link } from "gatsby"

import styled, { css } from "styled-components"
import { fluidType } from "./mixins"

import Image from "./image"

const PortfolioItemWrapper = styled.article`
  max-width: 700px;
  height: 350px;
  border-radius: 8px;
  box-shadow: 0 4px 12px hsla(0, 0%, 0%, 0.05), 0 8px 18px hsla(0, 0%, 0%, 0.05),
    0 12px 24px hsla(0, 0%, 0%, 0.05);
  display: flex;

  @media screen and (max-width: 780px) {
    max-width: 400px;
    height: 600px;
    flex-direction: column;
  }

  &:not(:last-of-type) {
    margin-bottom: 4em;
  }
`

const PortfolioItemImage = styled.div`
  flex: 0 1 350px;
  width: 100%;
  overflow: hidden;

  img {
    max-width: 100%;
  }
`

const PortfolioItemDescription = styled.div`
  flex: 0 1 350px;
  width: 100%;
  padding: 1.5em;
  display: flex;
  flex-direction: column;

  header {
    h1 {
      font-weight: 400;
      line-height: 1;
    }
  }

  p {
    ${fluidType(20, 80, 1, 1.25, "rem")}
  }
`

const ExternalLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.2em;
  display: flex;

  li + li {
    margin-left: 1em;
  }
`

const StyledLink = styled(Link)`
  letter-spacing: 0.1rem;
`

const TechStack = styled.ul`
  padding: 0;
  margin-top: auto;
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  li {
    padding: 0.2em 0.8em;
    border-radius: 1em;
    margin-bottom: 0.2em;
    background-color: hsl(0, 0%, 13%);
    color: hsl(0, 0%, 100%);
    text-transform: uppercase;

    &:not(:last-of-type) {
      margin-right: 0.2em;
    }

    ${fluidType(20, 80, 0.875, 1, "rem")}
  }
`

const PortfolioItem = () => {
  return (
    <PortfolioItemWrapper>
      <PortfolioItemImage>
        <Image />
      </PortfolioItemImage>
      <PortfolioItemDescription>
        <header>
          <h1>Title Here</h1>
        </header>
        <ExternalLinks>
          <li>
            <StyledLink>Demo</StyledLink>
          </li>
          <li>
            <StyledLink>Github</StyledLink>
          </li>
        </ExternalLinks>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates,
          eligendi?
        </p>
        <TechStack>
          <li>tech</li>
          <li>stack</li>
          <li>goes</li>
          <li>here</li>
        </TechStack>
      </PortfolioItemDescription>
    </PortfolioItemWrapper>
  )
}

export default PortfolioItem
