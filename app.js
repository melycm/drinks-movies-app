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
    res.render('pages/index', {
    });
});

app.get("/movieinfo", (req, res, next) => {
    res.render("pages/movieinfo", {
    });
});

app.post('/searchResult', function(req, res){
    searchResult = req.body.searchResult
    var movieinfo = []
    var result1 = res.results;
    var movie = req.body.searchResult;
    newMovie = movie.replace(/\s+/g, '+');
    let url = 'https://api.themoviedb.org/3/search/movie?api_key=3868e49837f9f140ac33ea1d02e23897&query=' + newMovie
    
    function render(movie){
        var name = movie.title
        var description = movie.overview
        var picture = 'https://image.tmdb.org/t/p/w500/' + movie.poster_path
        var language = movie.original_language
        // ^ data is the response from the server
        // populate this with parsed data var renderData = { }
        var renderData = { name: name, description: description, picture: picture, language: language}
        res.render('pages/movieinfo', renderData)
    }
    
    axios.get(url)
    .then(function(response) {
        if(response && response.data && response.data.results){
            if (response.data.results[0]){
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

