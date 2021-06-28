require("dotenv").config()
const app = require("./app")
const PORT = process.env.PORT
const mongoose = require('mongoose')

app.listen( PORT, ()=> {
    console.log(`Server is running at PORT ${PORT}`)
})

mongoose.connect(process.env.DATABASE_URL, () => {
    console.log("Database connected");
}).catch((error) => console.log(error.message));