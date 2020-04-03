import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMe from "../components/about-me"

const SecondPage = () => (
  <Layout>
    <SEO title="About Me" />
    <h1>About Myself</h1>
    <AboutMe />
  </Layout>
)

export default SecondPage
