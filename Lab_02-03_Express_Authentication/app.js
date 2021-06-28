const express = require("express")
const app = express()
const userRoutes = require("./routes/userRoutes.routes")
const logger = require("./middlewares/app.middlewares")
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.error('Connected to Database'))

app.use(express.static('public'))
app.use(logger)
app.use(userRoutes)

app.get("/", (req, res) => {
    res.sendFile("home.html", { root: "./views"})
})

app.get("/dashboard", (req, res) => {
    res.send(
        "<H1>Dashboard </H1>"
    )
})

app.use((req, res) => {
    res.send(
        "<H1>Error 404!</H1><br><H2>Page Doesn't Exist</H2>"
    )
})

module.exports = app