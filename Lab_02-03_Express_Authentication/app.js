const express = require("express")
const app = express()
const userRoutes = require("./routes/userRoutes.routes")
const indexRoutes = require("./routes/index.routes")

app.use(express.static('public'))

app.set("view engine", "ejs")

app.use(indexRoutes)
app.use('/users', userRoutes)

module.exports = app