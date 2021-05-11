var express = require('express');
var app = express();

app.use('/',(req,res,next) => {
    console.log(req.method,req.url)
    next()
})

app.use('/admin', (req,res,next) => {
    next("Unauthorised");
})

app.get('/',(req,res) => {
    res.sendFile(__dirname + './index.html');
})

app.get('/about', (req,res) => {
    res.sendFile(__dirname + './about.html');
})

app.get('/contact', (req,res) => {
    res.send("Page not found");
})

app.use((err,req,res,next) => {
    res.send(err);
})

app.listen(3000, () => {
    console.log("server listening on port 3k");
})