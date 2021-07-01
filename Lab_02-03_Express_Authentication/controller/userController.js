const pageNotFound = (req, res) => {
    res.send("<H1>Error 404! Page Not Found</H1>")
}

const getLogin = (req, res) => {
    res.render('users/login.ejs')
}

const postLogin = (req, res) => {
}

const getRegister = (req, res) => {
    res.render('users/register.ejs')
}

const postRegister = (req, res) => {
    const {name, email, password, confpassword} = req.body
    console.log(name)
    console.log(email)
    console.log(password)
    console.log(confpassword)
}

module.exports = {pageNotFound, getLogin, postLogin, getRegister, postRegister}