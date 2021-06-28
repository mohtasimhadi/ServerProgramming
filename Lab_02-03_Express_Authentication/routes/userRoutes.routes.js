const express = require("express")
const router = express.Router()

router.get("/login", (req, res) => {
    res.send("This is login page")
})


router.get("/register", (req, res) => {
    res.send("This is registration page")
})

module.exports = router