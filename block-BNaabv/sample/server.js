var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var app = express()

app.use(logger('dev'));
app.use(cookieParser);

app.use(express.json());
app.use(url.encoded({extended:false}));

function cookieCreate(req,res,next){
    res.cookie('Cookie', 'cookietrack');
    next()
}

app.use(cookieCreate);

app.get('/',(req,res) => {
    res.sendFile(__dirname + './index.html');
})

app.get('/about', (req,res) => {
    res.send('My name is querty');
})

app.get('/users/:username', (req,res) => {
    var username = req.params.username;
    res.send(`<h1>Username form page is ${username}</h1>`);
})

app.post('/form',(req,res) => {
    res.json(req.body);
})

app.post('/json', (req,res) => {
    res.send(JSON.stringify(req.body));
})

app.use((req,res,next) => {
    res.send('Error 404');
    next();
})

app.use((err,req,res,next) => {
    res.statusCode = '400';
    res.send(err);
})



app.listen(3000, () => {
    console.log("server listening on port 3k")
})