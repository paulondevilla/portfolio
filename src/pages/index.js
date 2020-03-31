import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Portfolio from "../components/portfolio"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio Page" />
    <Portfolio />
  </Layout>
)

export default IndexPage
