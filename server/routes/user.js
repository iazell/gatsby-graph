const { Router } = require("express")
const { getUser } = require("../services/okta")

const router = Router()

router.get("/", async (req, res) => {
  try {
    const accessToken = req.headers.authorization.replace("Bearer ", "")
    const user = await getUser(accessToken)
    res.send({ data: user })
  } catch (err) {
    res.status(400).json({ message: err })
  }
})

module.exports = router
