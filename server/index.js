const express = require("express")
const cors = require("cors")
const path = require("path")
const bodyParser = require("body-parser")

const auth = require("./routes/auth")
const user = require("./routes/user")
const graph = require("./routes/graph")

const app = express()

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(bodyParser.json())

// Allow cross-origin
app.use(cors())

app.use("/auth", auth)

app.use("/user", user)

app.use("/graph", graph)

app.use(express.static("public"))

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"))
})

const PORT = process.env.PORT || 8001

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
