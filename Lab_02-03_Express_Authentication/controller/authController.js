const userSchema = require('../models/userModel')

const getRegister = (req, res) => {
    res.sendFile("register.html", { root: "./views/users" })
}

const postRegister = async(req, res) => {
    const { fullname, email, password, confirmpass } = req.body

    const newUser = { fullname: fullname, email: email, password: password }
    console.log(newUser)

    try {
        await new userSchema(newUser).save()
        console.log("User Created")
        res.status(201).json({ newUser })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const getLogin = (req, res) => {
    res.sendFile("login.html", { root: "./views/users" })
}

const postLogin = (req, res) => {
    res.send(req.body)
}

const getDashboard = (req, res) => {
    res.sendFile("index.html", { root: "./views"})
}

const getHomePage = (req, res) => {
    res.sendFile("home.html", { root: "./views"})
}

module.exports = {getDashboard, getHomePage, getLogin, getRegister, postLogin, postRegister}