import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Portfolio from "../components/portfolio"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <h1>Portfolio</h1>
    <p>Please take a minute and browse through some of the projects i built</p>
    <Portfolio />
  </Layout>
)

export default IndexPage
