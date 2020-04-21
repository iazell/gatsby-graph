import { navigate } from "gatsby"
import { login } from "./authApi"
import { getUserInfo } from "./userApi"

const isBrowser = typeof window !== `undefined`

const getValueFromLocalStorage = value =>
  window.localStorage[value] ? JSON.parse(window.localStorage[value]) : {}

const getUser = () => getValueFromLocalStorage("gatsbyUser")

export const getAccessToken = () => getValueFromLocalStorage("accessToken")

const setUser = user => (window.localStorage.gatsbyUser = JSON.stringify(user))

const setAccessToken = accessToken =>
  (window.localStorage.accessToken = accessToken)

export const handleLogin = ({ username, password }) =>
  login({ username, password }).then(link => window.location.replace(link)) // Link to redirect to Okta OpenID Connect

export const fetchUserInfo = accessToken => {
  getUserInfo(accessToken)
    .then(({ data }) =>
      setUser({
        name: data.given_name,
        legalName: `${data.given_name} ${data.family_name}`,
        email: data.email,
      })
    )
    .then(() => navigate(`/profile`))
  setAccessToken(accessToken) // Save for later use
}

export const isLoggedIn = () => {
  if (!isBrowser) return false

  const user = getUser()

  return !!user.email
}

export const getCurrentUser = () => isBrowser && getUser()

export const logout = callback => {
  if (!isBrowser) return

  console.log(`Ensuring the \`gatsbyUser\` property exists.`)
  setUser({})
  setAccessToken()
  callback()
}
