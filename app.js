let express = require('express');
let app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
let axios = require('axios');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(require('./form'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.locals.siteTitle = "Movies and Drinks";

app.get("/", (req, res, next) => {
    res.render('pages/index', {
    });
});

app.get("/movieinfo", (req, res, next) => {
    res.render("pages/movieinfo", {
    });
});

http.listen(7000, function () {
    console.log('Listening on port 7000');
});