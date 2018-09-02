let express = require('express');
let app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
const promise = require('bluebird');

'use strict';
// var request = require('request');

// var url = '';

// request.get({
//     url: url,
//     json: true,
//     headers: {'User-Agent': 'request'}
//   }, (err, res, data) => {
//     if (err) {
//       console.log('Error:', err);
//     } else if (res.statusCode !== 200) {
//       console.log('Status:', res.statusCode);
//     } else {
//       // data is already parsed as JSON:
//       console.log(data.html_url);
//     }
// });

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

// var pgp = require('pg-promise')(initOptions);
// var db = pgp(config);
let axios = require('axios');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(require('./routes/form'));
// app.use(require('./routes/userReview'));

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

var movieData = null;
app.get("/login", (req, res, next) => {
    res.render("pages/login", {
    });
});

app.get("/signup", (req, res, next) => {
    res.render("pages/signup", {
    });
});

app.post('/searchResult', function(req, res){
    searchResult = req.body.searchResult
    var movieinfo = []
    var result1 = res.results;
    var movie = req.body.searchResult;
    newMovie = movie.replace(/\s+/g, '+');
    let url = 'https://api.themoviedb.org/3/search/movie?api_key=3868e49837f9f140ac33ea1d02e23897&query=' + newMovie
    // let url2 = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + newMovie
    
    function render(movie){
        var name = movie.title
        var description = movie.overview
        var poster = 'https://image.tmdb.org/t/p/w500/' + movie.poster_path
        var language = movie.original_language
        var voteavg = movie.vote_average
        var backdrop = 'https://image.tmdb.org/t/p/w1280/' + movie.backdrop_path
        var genre = movie.genre_ids[0];
        // ^ data is the response from the server
        // populate this with parsed data var renderData = { }
        var renderData = { name: name, description: description, poster: poster, language: language, voteavg: voteavg, backdrop: backdrop, genre: genre}
        res.render('pages/movieinfo', renderData)
    }
    
    axios.get(url)
    .then(function(response) {
        console.log(response.data)
        if(response && response.data && response.data.results){
            if (response.data.results[0]){
                var theMovie = response.data.results[0]
                movieData = theMovie
                // function logic 
                
                render(response.data.results[0])
            }
            // response.data.results[0].title
        }
    })
    .catch(function(error) {
        console.log(error);
    });
    // res.redirect('/movieinfo')
})

http.listen(7000, function () {
    console.log('Listening on port 7000');
});

// module.exports = db;
