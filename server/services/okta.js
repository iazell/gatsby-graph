const axios = require("axios")
const randomstring = require("randomstring")

const OKTA_API_URL = "https://dev-231821.okta.com"
const OKTA_CLIENT_ID = "0oa2smb3fzJxER8sN357"
const config = {
  scope: "openid profile email",
  redirectUri: "http://localhost:8000/app/callback",
  responseType: "token",
  codeChallengeMethod: "S256",
}

function parseError(error) {
  const { data } = error.response
  if (data) {
    if (data.errorCauses && data.errorCauses.length > 0) {
      return (data.errorCauses[0] || {}).errorSummary
    }
    return data.errorSummary
  }
  return "API Error"
}

async function login(username, password) {
  try {
    const axiosRequest = axios.create({
      baseURL: OKTA_API_URL,
      headers: {
        "Content-Type": "application/json",
      },
    })
    const { data } = await axiosRequest.post("/api/v1/authn", {
      username,
      password,
    })
    return data
  } catch (e) {
    throw parseError(e)
  }
}

function generateOktaAuthLink(sessionToken) {
  const state = randomstring.generate(45)
  const nonce = randomstring.generate(45)
  const { scope, redirectUri, responseType } = config
  return `${OKTA_API_URL}/oauth2/v1/authorize?client_id=${OKTA_CLIENT_ID}&response_type=${responseType}&scope=${scope}&redirect_uri=${redirectUri}&state=${state}&sessionToken=${sessionToken}&nonce=${nonce}`
}

async function getUser(accessToken) {
  try {
    const bearerAxios = axios.create({
      baseURL: OKTA_API_URL,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const { data } = await bearerAxios.get("/oauth2/v1/userinfo")
    return data
  } catch (e) {
    throw parseError(e)
  }
}

module.exports = { login, generateOktaAuthLink, getUser }
