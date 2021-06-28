const express = require("express")
const app = express()
const userRoutes = require("./routes/userRoutes.routes")
const logger = require("./middlewares/app.middlewares")
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.error('Connected to Database'))

app.use(express.static('public'))
app.use(logger)
app.use(userRoutes)

module.exports = app