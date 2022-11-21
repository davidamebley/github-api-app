const passport = require('passport');
const GithubStrategy = require('passport-github2').Strategy;


// GUTHUB STRATEGY
passport.use(new GithubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRETS,
    callbackURL: "/auth/github/callback",
  },function (accessToken, refreshToken, profile, done) {
      done(null, profile);    // when everything is done, we return no error, but user profile
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