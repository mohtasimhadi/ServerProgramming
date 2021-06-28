const express = require("express")
const router = express.Router()
const {
    getDashboard,
    getHomePage,
    getLogin,
    getRegister,
    postLogin,
    postRegister
} = require("../controller/authController")
const bodyParser = require("body-parser")
const pageNotFound = require("../controller/userController")


router.use(bodyParser.urlencoded({ extended: false }))

router.get("/", getHomePage)
router.get("/dashboard", getDashboard)
router.route("/login").get(getLogin).post(postLogin)
router.route("/register").get(getRegister).post(postRegister)

router.use(pageNotFound)

module.exports = router