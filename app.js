let express = require('express');
let app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
let axios = require('axios');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.locals.siteTitle = "Movies and Drinks";

app.get("/", (req, res, next) => {
    res.render('pages/index');
});


http.listen(7000, function () {
    console.log('Listening on port 7000');
});