const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

// User Modal 
const User = require('../models/User');

module.exports = function (passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
            //User Matching for the authentication 
            User.findOne({
                email: email
            }).then(user => {
                if (!user) {
                    return done(null, false, { message: 'This email ID is not registered' });
                }

                //Password Matching for the user
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) throw err;
                    if (isMatch) {
                        return done(null, user);
                    } else {
                        return done(null, false, { message: 'Password incorrect! Please try again.' });
                    }
                });
            });
        })
    );
        //changing the password into cryptic 
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

        //deserialize the user password 
    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });
};