var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');

app.use(cookieParser);

app.use('/about', (req,res,next) => {
    res.cookie('username','sid');
    next();
})

app.use(logger('dev'))

app.get('/about', (req,res) => {

})

app.listen(3000, () => {
    console.log("Server listening on port 3k");
})