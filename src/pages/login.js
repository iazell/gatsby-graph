import React from "react"
import Form from "../components/form"

import Layout from "../components/layout"
import { Helmet } from "react-helmet"

const LoginPage = () => (
  <Layout>
    <Helmet title="Login Page" />
    <Form />
  </Layout>
)

export default LoginPage
