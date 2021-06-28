const express = require("express")
const app = express()
const userRoutes = require("./routes/userRoutes.routes")
const logger = require("./middlewares/app.middlewares")

app.use(express.static('public'))
app.use(logger)
app.use(userRoutes)

module.exports = app