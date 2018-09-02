let express = require('express');
let router = express.Router();
let db = require('./../models');
var bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/register', function(req, res) {
 
    res.render('pages/register', {
        title: 'Sign Up',
        pageID: 'register'
    });



    // res.send(
    //     ` 
    //     <h1>Registration</h1>
    //     <form action="/register" method="POST">
    //         First Name:<input type="text" name="fname" />
    //         Last Name:<input type="text" name="lname" />
    //         Email:<input type="text" name="email" />
    //       Username:<input type="text" name="username" />
    //       Password:<input type="text" name="password" />
    //       <input type="submit" />
    //     </form>
        
    //     `
    // ); //end of res.send
    
});//end of app.get

router.post('/register',function(req,res){

    // let username = req.body.username;
    console.log('username');
   
    // res.send(req.body.username);
    
    // hashing the password
    let password = bcrypt.hashSync(req.body.password,8);

    db.users.create({fname: req.body.fname, lname: req.body.lname, email: req.body.email, username: req.body.username, password: password})
    .then(() => {
        // success;
        res.redirect('/login');
    })
    .catch(error => {
        // error;
    });
  
    //save to database
    
    
});

module.exports = router;