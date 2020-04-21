import React from "react"
import View from "./view"
import { Link, navigate } from "gatsby"
import { getCurrentUser, isLoggedIn, logout } from "../services/auth"

const Profile = () => {
  const { name, email } = getCurrentUser()

  return (
    <View title="Profile Page">
      {isLoggedIn() ? (
        <div>
          <p>Welcome back to your account, {name}!</p>
          <ul>
            <li>Name: {name}</li>
            <li>Email address: {email}</li>
          </ul>
          <br></br>
          To logout, click {` `}
          <a
            href="/"
            onClick={(event) => {
              event.preventDefault()
              logout(() => navigate(`/app/login`))
            }}
          >
            here.
          </a>
        </div>
      ) : (
        <div>
          <p>You need to login first</p>
          {` `}
          <Link to="/app/login">login</Link>.
          <p>
            To view the graph, kindly
            {` `}
            <Link to="/app/login">login</Link>.
          </p>
        </div>
      )}
    </View>
  )
}

export default Profile
