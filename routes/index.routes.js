const express = require('express')
const router = express.Router()
const ensureAuthenticated = require('./../middlewares/auth.middlewares')

router.get("/", (req, res) => {
    res.render("index.ejs")
})

router.get("/dashboard", ensureAuthenticated, (req, res) => {
    res.render("dashboard.ejs")
})

module.exports = router