var express = require('express');
var app = express()

app.use('/', (req,res,next) => {
    console.log(req.url,req.method);
    next()
})

app.get('/', (req,res) => {
    res.send("Welcome to server with middlewares");
})

app.listen(4000,() => {
    console.log("server listening on port 4k")
})