import React from "react"

import styled from "styled-components"
import { fluidType } from "./mixins"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons"

import Image from "./image"

config.autoAddCss = false

const PortfolioItemWrapper = styled.article`
  max-width: 400px;
  height: fit-content;
  border-radius: 8px;
  box-shadow: 0 4px 12px hsla(0, 0%, 0%, 0.05), 0 8px 18px hsla(0, 0%, 0%, 0.05),
    0 12px 24px hsla(0, 0%, 0%, 0.05);
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 750px) {
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

  h1 {
    font-weight: 400;
    letter-spacing: 0.2rem;
    line-height: 1;
  }

  & > *:not(:last-child) {
    margin-bottom: 1em;
  }
`

const TechStack = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  ${fluidType(20, 80, 0.875, 1.125, "rem")}

  li:not(:last-of-type)::after {
    content: "/";
    margin: 0 0.2em;
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
    display: flex;
    align-items: center;

    &:first-child {
      border-right: 2px solid hsl(0, 0%, 100%);
      font-size: 1.5rem;
    }
  }
`

const PortfolioItem = () => {
  const techStack = ["react", "gatsbyjs", "css-in-js", "netlify"]

  return (
    <PortfolioItemWrapper>
      <PortfolioItemImage>
        <Image />
      </PortfolioItemImage>

      <PortfolioItemDescription>
        <header>
          <h1>Title Here</h1>
          <TechStack>
            {techStack &&
              techStack.map(tech => {
                return <li>{tech}</li>
              })}
          </TechStack>
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
