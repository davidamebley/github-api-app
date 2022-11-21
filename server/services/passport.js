const passport = require('passport');
const GithubStrategy = require('passport-github2').Strategy;


// GUTHUB STRATEGY
passport.use(new GithubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRETS,
    callbackURL: "/auth/github/callback",
    
    // passReqToCallback: true
    // passReqToCallback: true
  },function (accessToken, refreshToken, profile, done) {
      // asynchronous verification, for effect...
        process.nextTick(function () {
        // The user's GitHub profile is returned
        // console.log('Our new req..: ', accessToken);
        let authUser = {user: profile, accessToken: accessToken}
        done(null, {authUser});
        // return done(null, profile);
      });
    }
    )
);

// We Serialize and De-serialize our User in order to pass our session
passport.serializeUser((user, done) => {
    done(null, user)    // error: null, id: user
});

passport.deserializeUser((user, done) => {
    done(null, user)    // error: null, id: user
});