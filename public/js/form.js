var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false}))

router.use(bodyParser.json())

router.get('/form', (req, res) => {

   
    res.render('pages/form', {
        pageTitle: "Ratings and Reviews",
        pageId: "form"
    });

})

router.post('/submit', (req, res) => {

    res.send(`Here is your review! ${req.body.username} ${req.body.movie_title} ${req.body.comments}`);
})
module.exports = router;