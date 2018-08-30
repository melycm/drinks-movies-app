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

app.post('/searchResult', (req, res)=>{
   searchResult = req.body.searchResult
    var movieInfo = []
    var result1 = res.results;
    var movie = req.body.searchResult;
    newMovie = movie.replace(/\s+/g, '+');
    let url = 'https://api.themoviedb.org/3/search/movie?api_key=3868e49837f9f140ac33ea1d02e23897&query=' + newMovie
    
    function render(data){
        // ^ data is the response from the server
        // populate this with parsed data var renderData = { }
        var renderData = { test: 'test'}
        res.render('pages/movieinfo', renderData)
    }
    
    axios.get(url)
    .then(function(res) {
        console.log(res.data.results[0].title)

        // res.render('pages/movieinfo', {test: 'test'})
        render()
        // var name = res.results[0]
        // console.log(movieInfo)
        // console.log(res.data.url);
        // console.log(res.data.explanation);
    })
    .catch(function(error) {
        console.log(error);
    });
    //res.redirect('/movieinfo')
})


// app.get('/test', (req, res)=>{
//     searchResult = req.body.searchResult
//      var movieInfo = []
//      var result1 = res.results;
//     //  let movie = req.body.searchResult;
//     let movie = "The Devil Wears Prada";
//     let  newMovie = movie.replace(/\s+/g, '+');

//     //  newMovie = movie.replace(' ','+');
//      let url = 'https://api.themoviedb.org/3/search/movie?api_key=3868e49837f9f140ac33ea1d02e23897&query=' + newMovie
//      console.log(url);
//      axios.get(url)
//      .then(function(res){
//             //console.log(res)
        
        
//         // var name = res.results[0].title;
//         console.log('i am here');
//        //  console.log(movieInfo)
//        //  console.log(res.data.url);
//        //  console.log(res.data.explanation);
//        console.log(res.data.results[0].title)
    
//     var name = res.results;
//      })
//      .catch(function(err){
//          console.log(err);
//      })
    
//      res.send('hello');
  
//  })
    

http.listen(7000, function () {
    console.log('Listening on port 7000');
});

