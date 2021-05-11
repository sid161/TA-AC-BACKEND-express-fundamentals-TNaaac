var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var app = express()

app.use(logger('dev'));
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(__dirname + '/public'));
app.use('/', (req,res,next) => {
    console.log(req.method,req.url);
    next()
})

app.get('/',(req,res) => {
    res.sendFile(__dirname + "/index.html");
   //console.log("siddharth");
})

app.get('/about',(req,res) => {
    res.sendFile(__dirname + '/about.html');
})
app.get('/blog',(req,res) => {
    res.sendFile(__dirname + '/blog.html');
})
app.get('/cases',(req,res) => {
    res.sendFile(__dirname + '/cases.html');
})
app.get('/contact',(req,res) => {
    res.sendFile(__dirname + '/contact.html');
})

app.use((req,res,next) => {
    res.end("Page not found");
})



app.listen(4000, () => {
    console.log("server listening on port 4000");
})