const express = require('express')

const app = express()

app.get('/', function(req,res){
    res.send("Hi")
})

app.listen(5000, ()=> {
    console.log("App is running")
} )