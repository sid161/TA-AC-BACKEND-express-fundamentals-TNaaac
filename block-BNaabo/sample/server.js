var express = require('express');
var app = express();

app.use((req,res,next) => {
    console.log(req.method,req.url);
    next();
})

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static())

app.get('/json', (req,res) => {
    res.send('welcome')
})

app.post('/json', (req,res) => {
    console.log(req.body);
})

app.listen(2000, () => {
    console.log("server listening on port 2k")
})