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
      <p>
        Paul, who was born and raised in the Philippines, moved to the United
        States back in 2013. Living in the US made him realize that the modern
        world is shaped and is powered by modern technology. With this
        realization, he discovered his passion in web development. He learned
        how good web apps help make people's daily lives less stressing and more
        convenient.
      </p>
      <p>
        He taught himself how to build web apps with HTML, CSS and Javascript.
        Then, he moved on to building personal projects using modern JS
        frameworks like ReactJS and GatsbyJS. He also learned how to style these
        with Sass and Styled-Components. He uses Git for version control and
        Github for the remote repository. Netlify is his choice for deployment.
      </p>
    </AboutMeWrapper>
  )
}

export default AboutMe
