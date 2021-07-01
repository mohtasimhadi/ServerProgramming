const express = require('express')
const router = express.Router()

const { getHomePage } = require("../controller/authController")

router.get("/", (req, res) => {
    res.render("dashboard.ejs")
})

module.exports = router