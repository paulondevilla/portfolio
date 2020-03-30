import React from "react"

import styled from "styled-components"

import PortfolioItem from "./portfolio-item"

const PortfolioContainer = styled.div`
  width: 100%;
  padding: 4em 2em;
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
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
    </PortfolioContainer>
  )
}

export default Portfolio
