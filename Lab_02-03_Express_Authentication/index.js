const express = require("express")
const app = express()
const PORT = 1999

app.listen(PORT, ()=>{
    console.log(`Server is running at PORT ${PORT}`)
})