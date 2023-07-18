const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
require('./db/connect')

const posts = require('./routes/posts')

const app = express()


// body-parser extracts the entire body portion of an incoming request stream and exposes it on req. body . The middleware was a part of Express. js earlier but now you have to install it separately. This body-parser module parses the JSON, buffer, string and URL encoded data submitted using HTTP POST request.

app.use(bodyParser.json( {limit: "30mb" , extended:true}))
app.use(bodyParser.urlencoded( {limit: "30mb" , extended:true}))
app.use(cors())

app.get('/', (req,res)=>{
    res.send("Hi")
})

app.use('/posts', posts)


app.listen(5000, () => {
    console.log("SERVER ON PORT 5000")
})