var router = require('express').Router();
var passport = require('passport')

//auth logout
router.get('/login', (req, res) => {
    //handle with passport
    res.send('logging out')
});

// auth with google 
router.get('/google',passport.authenticate('google', {
    scope: ['profile']
}));

//callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.send('Sending you back to Balue..')
});

module.exports = router;