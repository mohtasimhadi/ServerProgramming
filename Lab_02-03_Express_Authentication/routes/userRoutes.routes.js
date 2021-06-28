const express = require("express")
const { route } = require("../app")
const router = express.Router()
const isLoggedIn = require("../middlewares/auth.middlewares")

router.get("/", (req, res) => {
    res.sendFile("home.html", { root: "./views"})
})

router.get("/dashboard", (req, res) => {
    res.sendFile("index.html", { root: "./views" })
})

router.get("/login", (req, res) => {
    res.sendFile("login.html", { root: "./views/users/" })
})


router.get("/register", (req, res) => {
    res.sendFile("register.html", { root: "./views/users/" })
})

router.post("/", (req, res) => {
    res.send("<H1>Home Page - POST</H1>")
})

router.use((req, res) => {
    res.send(
        "<H1>Error 404!</H1><br><H2>Page Doesn't Exist</H2>"
    )
})

module.exports = router