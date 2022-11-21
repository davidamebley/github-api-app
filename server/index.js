const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const passportSetup = require("./services/passport");
const passport = require('passport');
const authRoute = require('./routes/auth');

const app = express()

app.use(session({
    secret: process.env.SESSION_SECRETS[0],
    resave: false,
    saveUninitialized: true,
    cookie: { 
        secure: false,
        maxAge: 24 * 60 * 60 * 100,
        sameSite: false,
    }
 }));

 // Initialize PassportJS library
app.use(passport.initialize());
app.use(passport.session());

// Allow sending Sessions through our client/server requests
app.use(
    cors({
        origin: "http://localhost:3000",    //Our requests will come from this client
        methods: "GET, POST, PUT, DELETE",
        credentials: true,
    })
);

// Call Our Auth Route to use its methods
app.use('/auth', authRoute);




app.listen("5000", () => {
    console.log("Server running on port 5000");
})