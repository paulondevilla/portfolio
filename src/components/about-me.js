import React from "react"

import styled from "styled-components"

const AboutMeWrapper = styled.article`
  max-width: 1000px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2em;
`

const AboutMe = () => {
  return (
    <AboutMeWrapper>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, placeat
        eaque voluptas voluptatem similique tempore aliquam qui ipsum, deserunt
        perspiciatis blanditiis quas minus provident dolorum soluta libero
        magnam molestias! Velit?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
        repudiandae, quae magni, officiis, autem error aspernatur fugiat
        blanditiis culpa omnis deleniti. Possimus ex nesciunt reiciendis
        delectus, alias cum est a impedit consectetur fuga magni cumque,
        deserunt cupiditate minima, rem assumenda?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
        corporis quod possimus officia explicabo maiores fugiat repudiandae
        iusto, itaque accusamus!
      </p>
    </AboutMeWrapper>
  )
}

export default AboutMe
