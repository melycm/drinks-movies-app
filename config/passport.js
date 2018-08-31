const LocalStrategy = require('passport-local').Strategy
let passport = require('passport');
const bcrypt = require('bcryptjs');

module.exports = (passport, db) => {
passport.use(new LocalStrategy((username, password, done) => {
    console.log('Im in passp;ort');
    db.users.findAll({where: {username: username}}).then ((results) => {
        
        if(results != null) {
            const data = results[0];
            bcrypt.compare(password, data.password, function(err, res) {
                if(res) {
                    console.log("Hello world")
                    console.log(data)
                    done(null, { id: data.id, username: data.username})
                } else {
                    console.log("Returned nothing")
                    done(null, false)
                }
            })
        } else {
            console.log("just out there")
            done(null, false)
        }

        done(null, false)

        console.log(username)
    } //end of callback
    
    
)//end of then promise  

    
}))

passport.serializeUser((user, done) => {
    done(null, user.id)
    
})

passport.deserializeUser((id, done) => {
    db.users.findById(parseInt(id, 10)).then( (data) => {
        
       
        done(null, data)
    }//end of callback
    )//end of promise
    
})
}