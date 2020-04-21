const { Router } = require("express")
const { login, generateOktaAuthLink } = require("../services/okta")

const router = Router()

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body
    const { sessionToken, status } = await login(username, password)
    if (status === "SUCCESS") {
      const link = generateOktaAuthLink(sessionToken)
      console.log("link", link)
      res.send(link)
    } else {
      res.status(400).json({ message: `Cannot handle status ${status}` })
    }
  } catch (err) {
    res.status(400).json({ message: err })
  }
})

module.exports = router
