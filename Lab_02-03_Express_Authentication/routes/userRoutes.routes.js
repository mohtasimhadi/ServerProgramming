const express = require("express")
const router = express.Router()
const {
    getDashboard,
    getHomePage,
    getLogin,
    getRegister,
    postLogin,
    postRegister,
    logout
} = require("../controller/authController")
const bodyParser = require("body-parser")
const pageNotFound = require("../controller/userController")
const isLoggedIn = require("../middlewares/auth.middlewares")

router.use(bodyParser.urlencoded({ extended: false }))

router.get("/", getHomePage)
router.get("/dashboard", getDashboard)
router.use('/dashboard', isLoggedIn)
router.get("/logout", logout)
router.route("/login").get(getLogin).post(postLogin)
router.route("/register").get(getRegister).post(postRegister)

router.use(pageNotFound)

module.exports = router