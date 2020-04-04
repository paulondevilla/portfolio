import React from "react"

import styled from "styled-components"

const AboutMeWrapper = styled.article`
  max-width: 1000px;
  text-align: center;

  p:not(:last-of-type) {
    margin-bottom: 2em;
  }
`

const AboutMe = () => {
  return (
    <AboutMeWrapper>
      {/* Who likes building user-friendly and responsive web
        apps and cms-powered websites using modern web technologies */}

      <p>
        Paul, who was born and raised in the Philippines, moved to the United
        States back in 2013. Living in the US made him realize that the modern
        world is shaped and is powered by modern technology. With this
        realization, he discovered his passion in web development. He learned
        how good web apps help make people's daily lives less stressing and more
        convenient.
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
