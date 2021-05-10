var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var logger = require('morgan');

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(__dirname + "/public"));

app.use(cookieParser());

app.use((req,res,next) => {
    console.log(req.cookies);
})



app.use('/about', (req,res,next) => {
    res.cookie('username','sid');
    res.end("about Page");
    next();
})


app.use(logger('dev'))

app.get('/about', (req,res) => {
 res.sendFile(__dirname + '/index.html' )
})

app.listen(3000, () => {
    console.log("Server listening on port 3k");
})