const isLoggedIn = (req, res, next) => {
    const username = req.body.username
    const email = req.body.email

    if (email == "admin@admin.net"){
        next()
    } else {
        res.redirect("/register")
    }
}

module.exports = isLoggedIn