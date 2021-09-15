const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const companiesRoutes = require('./routes/companiesRoutes')

dotenv.config()

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("DB Connection Successfull"))
    .catch((err) => console.log(err))

app.use(express.json())

app.use("/api/companies", companiesRoutes)

app.listen(8800, () => {
    console.log("Backend Server is running!");
})
