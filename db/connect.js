const mongoose = require('mongoose')
require('dotenv').config()

const connectionString = process.env.MONGO_URI


mongoose.connect(connectionString, {
    useNewUrlParser:true
})
.then(() =>console.log("Connected to the DB"))
.catch((err)=> console.log(err))