import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Portfolio from "../components/portfolio"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <h1>Portfolio</h1>
    <p>
      Please take a minute and browse through some of the projects I built.
      <span role="img" aria-label="stack of books">
        📚
      </span>
      <span role="img" aria-label="magnifier">
        🔍
      </span>
      <span role="img" aria-label="hourglass">
        ⏳
      </span>
    </p>
    <Portfolio />
  </Layout>
)

export default IndexPage
