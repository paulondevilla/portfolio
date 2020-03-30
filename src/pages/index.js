import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Portfolio from "../components/portfolio"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Portfolio />
  </Layout>
)

export default IndexPage
