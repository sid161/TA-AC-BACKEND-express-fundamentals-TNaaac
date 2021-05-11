var express = require('express');
var app = express()

app.use('/', (req,res,next) => {
    console.log(req.method,req.url);
    next()
})

app.use(express.json())

app.use(express.static(__dirname + '/public'))

app.listen(2000, () => {
    console.log("server listening on port 2k")
})