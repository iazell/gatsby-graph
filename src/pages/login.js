import React, { useState, useEffect } from "react"
import Form from "../components/form"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"

const LoginPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleUpdate = event => {
    if (event.target.name === "username") setUsername(event.target.value)
    if (event.target.name === "password") setPassword(event.target.value)
  }

  const handleSubmit = event => {
    console.log(isLoggedIn())
    event.preventDefault()
    handleLogin({ username, password })
    console.log(isLoggedIn())
  }

  // useEffect(() => {
  //   if (isLoggedIn()) {

  //      navigate(`/profile`)
  //   }
  // })

  return (
    <Layout>
      <Helmet title="Login Page" />
      <Form
        handleUpdate={e => handleUpdate(e)}
        handleSubmit={e => handleSubmit(e)}
      />
    </Layout>
  )
}

export default LoginPage
