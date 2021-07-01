const express = require("express")
const app = express()
const userRoutes = require("./routes/userRoutes.routes")
const indexRoutes = require("./routes/index.routes")

app.use(express.static('public'))
app.use(userRoutes)
app.use(indexRoutes)

module.exports = app