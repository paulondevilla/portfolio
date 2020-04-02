import React from "react"

import styled, { css } from "styled-components"
import { fluidType } from "./mixins"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons"

import Image from "./image"

const PortfolioItemWrapper = styled.article`
  max-width: 400px;
  height: fit-content;
  border-radius: 8px;
  box-shadow: 0 4px 12px hsla(0, 0%, 0%, 0.05), 0 8px 18px hsla(0, 0%, 0%, 0.05),
    0 12px 24px hsla(0, 0%, 0%, 0.05);
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 780px) {
    max-width: 800px;

    & > div {
      width: 50%;
    }
  }
`

const PortfolioItemImage = styled.div`
  width: 100%;
  overflow: hidden;
`

const PortfolioItemDescription = styled.div`
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  gap: 1em;

  h1 {
    font-weight: 400;
    letter-spacing: 0.2rem;
    line-height: 1;
  }
`

const TechStack = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 0.2em;
  flex-wrap: wrap;
  justify-content: center;

  li {
    padding: 0.2em 1em;
    border-radius: 1em;
    background-color: hsl(0, 0%, 13%);
    color: hsl(0, 0%, 100%);
    text-transform: uppercase;

    &:not(:last-of-type) {
      margin-right: 0.2em;
    }

    ${fluidType(20, 80, 0.875, 1, "rem")}
  }
`

const DemoButton = styled.div`
  align-self: flex-end;
  width: fit-content;
  margin-top: auto;
  border-radius: 4px;
  background-color: hsl(0, 0%, 13%);
  display: flex;

  button {
    padding: 0.5em 1em;
    border: none;
    background-color: transparent;
    box-shadow: 0 4px 12px hsla(0, 0%, 0%, 0.05),
      0 8px 18px hsla(0, 0%, 0%, 0.05), 0 12px 24px hsla(0, 0%, 0%, 0.05);
    font-family: inherit;
    font-size: inherit;
    color: hsl(0, 0%, 100%);

    &:first-child {
      border-right: 2px solid hsl(0, 0%, 100%);
      font-size: 1.5rem;
    }
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

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates,
          eligendi?
        </p>

        <DemoButton>
          <button onClick={() => console.log("🐱")}>
            <FontAwesomeIcon icon={faGithubAlt} />
          </button>
          <button onClick={() => console.log("🌐")}>View Demo</button>
        </DemoButton>
      </PortfolioItemDescription>
    </PortfolioItemWrapper>
  )
}

export default PortfolioItem
