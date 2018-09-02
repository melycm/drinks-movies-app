let express = require('express');
let router = express.Router();


router.get('/logout', function(req, res, next){
    res.render('pages/logout', {
        title: 'Signed Out',
        pageID: 'logout'
    });
    
    req.session.destroy((err) => {
        if(err) return next(err)

        req.logout()

        res.sendStatus(200)

        res.redirect('/login');
    })
  })

module.exports = router;