import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const ReportsPage = () => (
  <Layout>
    <SEO title="Reports Page" />
    <h1>Hi from the reports page</h1>
    <p>Welcome to reports page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ReportsPage
