import React from "react"

import styled from "styled-components"

import PortfolioItem from "./portfolio-item"

const PortfolioContainer = styled.div`
  width: 100%;
  padding: calc(50vh - (350px / 2)) 2em;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 780px) {
    padding: calc(50vh - (600px / 2)) 2em;
  }
`

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
    </PortfolioContainer>
  )
}

export default Portfolio
