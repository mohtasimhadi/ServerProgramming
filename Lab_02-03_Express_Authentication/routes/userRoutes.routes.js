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

router.use(bodyParser.urlencoded({ extended: false }))

router.get("/", getHomePage)
router.get("/dashboard", getDashboard)
router.get("/login", getLogin)
router.get("/register", getRegister)
router.post("/register", postRegister)
router.post("/login", postLogin)

router.use((req, res) => {
    res.send(
        "<H1>Error 404!</H1><br><H2>Page Doesn't Exist</H2>"
    )
})

module.exports = router