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
    res.send(`Your review has been submitted!
    
    <br><br>
    Please wait a moment for your review to show on the movie's page. Thanks!
    
    `);

    db.review.create({username: req.body.name, rating: req.body.rating, comments: req.body.comments})
    .then(() => {
        console.log("Created an entry in my review table.")
    })
    .catch(error => {
        console.log("Movie entry did not enter table.")
    })

    db.movie.create({name: req.body.name})
    .then(() => {
        console.log("Created an entry in my movie table.")
    })
    .catch(error => {
        console.log("Movie entry did not enter table.")
    })
})

// router.post('/test', (req, res) => {
//     var userReview='';

//     userReview += 
//     userReview += req.body.comment;
//     userReview += 
// })
module.exports = router;