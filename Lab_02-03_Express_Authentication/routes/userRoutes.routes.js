const express = require("express")
const router = express.Router()
const {
    getLogin,
    getRegister,
    postLogin,
    postRegister
} = require("../controller/userController")

router.get('/login', getLogin)
router.post('/login', postLogin)
router.get('/register', getRegister)
router.post('/register', postRegister)

module.exports = router