const pageNotFound = (req, res) => {
    res.send("<H1>Error 404! Page Not Found</H1>")
}

const getLogin = (req, res) => {
    res.render('users/login.ejs')
}

const postLogin = (req, res) => {
    const {email, password} = req.body
    console.log(email, password)
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

    const errors = []

    if (!name || !email || !password || !confpassword) {
        errors.push("All fields are required!")
    }
    if (password.length < 6) {
        errors.push("Passwords must be at least 6 characters!")
    }
    if (password != confpassword){
        errors.push("Passwords didn't match!")
    }
    if (errors.length > 0) {
        console.log(errors)
    } else {
        res.redirect("/users/login")
    }
}

module.exports = {pageNotFound, getLogin, postLogin, getRegister, postRegister}