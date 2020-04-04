import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMe from "../components/about-me"

const SecondPage = () => (
  <Layout>
    <SEO title="About Me" />
    <h1>Who I Am</h1>
    <p>
      A little history and information about myself.{" "}
      <span role="img" aria-label="open book">
        📖
      </span>
    </p>
    <AboutMe />
  </Layout>
)

export default SecondPage
