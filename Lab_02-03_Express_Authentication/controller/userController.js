const User = require('../models/User.model')
const bcrypt = require('bcrypt')
const passport = require('passport')

const pageNotFound = (req, res) => {
    res.send("<H1>Error 404! Page Not Found</H1>")
}

const getLogin = (req, res) => {
    res.render('users/login.ejs')
}

const postLogin = (req, res) => {
    passport.authenticate('local', {
      successRedirect: "/dashboard",
      failureRedirect: "/users/login",
      failureFlash: true
    })
}

const getRegister = (req, res) => {
    res.render('users/register.ejs', {errors: req.flash('errors')})
}

const postRegister = (req, res) => {
    const {name, email, password, confpassword} = req.body

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
        req.flash("errors", errors);
        res.redirect("/users/register");
      } else {
        //Create New User
        User.findOne({ email: email }).then((user) => {
          if (user) {
            errors.push("User already exists with this email!")
            req.flash("errors", errors)
            res.redirect("/users/register")
          } else {
            bcrypt.genSalt(10, (err, salt) => {
              if (err) {
                errors.push(err)
                req.flash("errors", errors)
                res.redirect("/users/register")
              } else {
                bcrypt.hash(password, salt, (err, hash) => {
                  if (err) {
                    errors.push(err)
                    req.flash("errors", errors)
                    res.redirect("/users/register")
                  } else {
                    const newUser = new User({
                      name,
                      email,
                      password: hash,
                    });
                    newUser
                      .save()
                      .then(() => {
                        res.redirect("/users/login")
                      })
                      .catch(() => {
                        errors.push("Saving User to the daatabase failed!")
                        req.flash("errors", errors)
                        res.redirect("/users/register")
                      })
                  }
                })
              }
            })
          }
        })
      }
    }

module.exports = {pageNotFound, getLogin, postLogin, getRegister, postRegister}