import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Profile from "../components/profile"
import Login from "../components/login"
import PrivateRoute from "../components/privateRoute"
import Callback from "../components/callback"

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      <Callback path="/app/callback" />
      <Login path="/app/login" />
    </Router>
  </Layout>
)

export default App
