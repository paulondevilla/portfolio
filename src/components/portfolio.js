import React from "react"

import styled from "styled-components"

import PortfolioItem from "./portfolio-item"

const PortfolioContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em 0;

  & > h1 {
    margin-bottom: 2em;
    letter-spacing: 0.4rem;
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
