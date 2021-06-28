const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())

var LocalStorage = require('node-localstorage').LocalStorage
const localstorage = new LocalStorage('./scratch')

const isLoggedIn = (req, res, next) => {
    const username = localstorage.getItem('username')

    if (username){
        res.clearCookie('username')
        res.cookie("username", username)
        next()
    } else {
        alert('Please Log In First')
        res.redirect("/login")
    }
}

module.exports = isLoggedIn