const express = require("express")
const router = express.Router()
const isLoggedIn = require("../middlewares/auth.middlewares")



router.get("/login", (req, res) => {
    res.sendFile("login.html", { root: "./views/users/" })
})


router.get("/register", (req, res) => {
    res.sendFile("register.html", { root: "./views/users/" })
})

router.post("/register", isLoggedIn, (req, res) => {
    res.redirect("/dashboard")
})

module.exports = router