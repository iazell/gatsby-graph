import auth0 from "auth0-js"

const isBrowser = typeof window !== "undefined"

const auth = isBrowser
  ? new auth0.WebAuth({
      domain: "process.env.AUTH0_DOMAIN",
      clientID: "LpGybMOWxIzHfwGdIRpCajsed4FURoaw",
      redirectUri: "http://localhost:8000/callback",
      responseType: "token id_token",
      scope: "openid profile email",
    })
  : {}
