var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

let db = require('../models');

router.use(bodyParser.urlencoded({ extended: false}))

router.use(bodyParser.json())

router.get('/form', (req, res) => {

   
    res.render('pages/form', {
        pageTitle: "Ratings and Reviews",
        pageId: "form"
    });

})

router.post('/submit', (req, res) => {

    //input where I'd store it into a database
    // res.redirect('/form');
    res.render('pages/submit');

    

    db.review.create({username: req.body.username, comments: req.body.comments})
    .then(() => {
        console.log("Created an entry in my review table.")
    })
    .catch(error => {
        console.log("Movie entry did not enter table.")
    })

    db.movie.create({name: req.body.movie_title, rating: req.body.movie_rating})
    .then(() => {
        console.log("Created an entry in my movie table.")
    })
    .catch(error => {
        console.log("Movie entry did not enter table.")
    })
})


module.exports = router;