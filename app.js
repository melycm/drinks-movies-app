let express = require('express');
let app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
const promise = require('bluebird');

'use strict';
var request = require('request');

var url = '';

request.get({
    url: url,
    json: true,
    headers: {'User-Agent': 'request'}
  }, (err, res, data) => {
    if (err) {
      console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
    } else {
      // data is already parsed as JSON:
      console.log(data.html_url);
    }
});

// Connect database
const initOptions = {
    promiseLib: promise
};

const config = {
    host: 'localhost',
    port: 5432,
    database: 'drinks-movies-app',
    user: 'postgres'
};

var pgp = require('pg-promise')(initOptions);
var db = pgp(config);

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

module.exports = db;