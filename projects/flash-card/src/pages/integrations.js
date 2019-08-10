import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const IntegrationsPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the integration page</h1>
    <p>Welcome to integration page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default IntegrationsPage
