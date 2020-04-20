import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Helmet } from "react-helmet"

const IndexPage = () => (
  <Layout>
    <Helmet title="Simple Authentication With Gatsby" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Graph app</p>
    <Link to="/login/">Login</Link>
  </Layout>
)

export default IndexPage
