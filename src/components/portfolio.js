import React from "react"

import styled from "styled-components"

import PortfolioItem from "./portfolio-item"

const PortfolioContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1150px) {
    padding: 0 2em;
  }
`

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <h1>PROJECTS</h1>
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
    </PortfolioContainer>
  )
}

export default Portfolio
