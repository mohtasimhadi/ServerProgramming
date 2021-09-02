require('dotenv').config()
const express = require("express")
const app = express()
const session = require("express-session")
const flash = require("connect-flash")
const userRoutes = require("./routes/userRoutes.routes")
const indexRoutes = require("./routes/index.routes")
const moongose = require("mongoose")
const passport = require('passport')

require('./config/passport')(passport)

moongose.connect(process.env.MongoURI, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("Connected to DB")
}).catch((error) => {
    console.log(error)
})

app.use(express.static('public'))
app.use(session({
    secret: 'secret',
    resave: true,
    saveUnitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())
app.use(express.urlencoded({extended: false}))

app.set("view engine", "ejs")

app.use(indexRoutes)
app.use('/users', userRoutes)

module.exports = app