const router = require('express').Router();
const passport = require('passport');

//login success route
router.get('/login/success', (req,res) => {
    if (req.user) {
        res.status(200).json({
            success: true,
            message: "login successful",
            user: req.user,
        });
    }
});

// Login failuer route
router.get('/login/failed', (req,res) => {
    res.status(401).json({
        success: false,
        message: "login failure",
    });
});

// Logout
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect(process.env.CLIENT_URL)
});

// GITHUB AUTH
router.get('/github', (request, response, next) => {
    passport.authenticate('github', {scope: ['repo', 'user', 'profile', 'email']})(request, response, next);
}); 
// passport.authenticate('github', {scope: ['profile', 'email']})
// passport.authenticate('github', {scope: ['repo', 'user', 'profile', 'email']})

router.get('/github/callback', passport.authenticate('github', {
    successRedirect: process.env.CLIENT_URL,    //Redirect here when success
    failureRedirect: '/login/failed',       //Redirect here when login failed
}));


module.exports = router;