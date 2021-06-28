const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullname : requiredString,
    email : requiredString,
    password : requiredString
})

module.exports = mongose.model('users', userSchema)