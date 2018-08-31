let express = require('express');
let router = express.Router();


router.get('/logout', function(req, res, next){
    req.session.destroy((err) => {
        if(err) return next(err)

        req.logout()

        res.sendStatus(200)
    })
  })

module.exports = router;