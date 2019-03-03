var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20');
var keys = require('./keys');

passport.use(
    new GoogleStrategy({
    // options for the google strategy.
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
}, (accessToken, refreshToken, profile, done) => {
    // passport callback function
    console.log('Passport callback function fired!')
    console.log(profile)
})
)


