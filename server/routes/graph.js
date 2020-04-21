const { Router } = require("express")
const GRAPH_DATA = require("../data")
const router = Router()

router.get("/data", (req, res) => {
  try {
    res.send({ data: GRAPH_DATA })
  } catch (err) {
    res.status(400).json({ message: err })
  }
})

module.exports = router
