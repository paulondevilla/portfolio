import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>How to Reach Me</h1>
    <p>
      Let's talk about your new website idea or you can just say hi.{" "}
      <span role="img" aria-label="smiling emoji">
        😁
      </span>
    </p>
    <Contact />
  </Layout>
)

export default SecondPage
