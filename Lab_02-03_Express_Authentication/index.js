require("dotenv").config()
const app = require("./app")
const PORT = process.env.PORT
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`DB connected. Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));