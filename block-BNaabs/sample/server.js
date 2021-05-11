var express = require('express');
var app = express();

app.use('/',(req,res,next) => {
console.log(req.method,req.url)
next()
})

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
})
app.get('/new',(req,res) => {
    res.sendFile(__dirname + '/new.html');
})
app.post('/new', (req,res) => {
    res.sendFile(__dirname + '/new.html');
})

app.get('/users/1234',(req,res) => {
    res.json(req.query);
})

app.listen(4000, () => {
    console.log("Server listening on port 4k");
})