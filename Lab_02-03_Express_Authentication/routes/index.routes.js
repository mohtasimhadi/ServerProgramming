const express = require('express')
const router = express.Router()

const { getHomePage } = require("../controller/authController")

router.get("/", (req, res) => {
    res.render("index.ejs")
})

module.exports = router