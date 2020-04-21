import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import Form from "./form"
import View from "./view"
import { handleLogin, isLoggedIn } from "../services/auth"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleUpdate = (event) => {
    if (event.target.name === "username") setUsername(event.target.value)
    if (event.target.name === "password") setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    console.log(isLoggedIn)
    event.preventDefault()
    handleLogin({ username, password })
    console.log(isLoggedIn)
  }

  useEffect(() => {
    if (isLoggedIn()) {
      navigate(`/app/profile`)
    }
  })

  return (
    <View title="Log In">
      <Form
        handleUpdate={(e) => handleUpdate(e)}
        handleSubmit={(e) => handleSubmit(e)}
      />
    </View>
  )
}

export default Login
