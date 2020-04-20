import React from "react"

import Layout from "../components/layout"
import { Helmet } from "react-helmet"

const ProfilePage = () => (
  <Layout>
    <Helmet title="Login Page" />
    <section>
      <p>Welcome back to your profile!</p>
      <p>
        This is a client-only route. You could set up a form to save information
        about a user here.
      </p>
    </section>
  </Layout>
)

export default ProfilePage
