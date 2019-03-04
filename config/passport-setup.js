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
    console.log(profile);
    var displayName = profile.displayName;
    var passportId = profile.id;

    console.log("This is the Display name "+displayName);
    console.log("This is the id "+passportId);

    db.sequelize.query("INSERT INTO contacts (Passport_id,Passport_displayName) VALUES('" + passportId + "','" + displayName + "')'");
    
    // Submits a new post and brings user to blog page upon completion
    //submitPost(displayName);

    //function submitPost(Post) {
    //$.post("/api/contacts", Post, function() {
      //window.location.href = "/index";
    //});
  //}

})
)


