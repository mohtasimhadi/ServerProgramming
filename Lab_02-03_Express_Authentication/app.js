const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send(
        "<H1>Home Page</H1>"
    )
})

app.get("/login", (req, res) => {
    res.send(
        "<H1>Log In</H1>"
    )
})

app.get("/register", (req, res) => {
    res.send(
        "<H1>Register</H1>"
    )
})

app.get("/dashboard", (req, res) => {
    res.send(
        "<H1>Dashboard</H1>"
    )
})

app.use((req, res) => {
    res.send(
        "<H1>Error 404!</H1><br><H2>Page Doesn't Exist</H2>"
    )
})

module.exports = app