const cors = require('cors')

const dbConnect = require("./config/database")
dbConnect()

const express = require('express')
const app = express();

require("dotenv").config()
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(cors())

app.listen(PORT , () => {
    console.log(`server started at ${PORT}`)
})

const routes = require("./routes/TaskRoute")
app.use("/faqs", routes)

app.get("/" , (req,res) => {
    res.send(`<h1>this is divyam homepage</h1>`);
})