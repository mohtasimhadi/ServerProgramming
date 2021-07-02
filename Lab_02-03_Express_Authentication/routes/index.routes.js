const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.render("index.ejs")
})

router.get("/dashboard", (req, res) => {
    res.render("dashboard.ejs")
})

module.exports = router