const express = require("express")
const router = express.Router()

router.get("/login", (req, res) => {
    res.sendFile("login.html", { root: "./views/users/" })
})


router.get("/register", (req, res) => {
    res.sendFile("register.html", { root: "./views/users/" })
})

module.exports = router