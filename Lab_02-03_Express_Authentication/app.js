const express = require("express")
const app = express()
const session = require("express-session")
const flash = require("connect-flash")
const userRoutes = require("./routes/userRoutes.routes")
const indexRoutes = require("./routes/index.routes")

app.use(express.static('public'))

app.use(express.urlencoded({extended: false}))

app.set("view engine", "ejs")

app.use(indexRoutes)
app.use('/users', userRoutes)

module.exports = app