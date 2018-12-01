const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
require( './db' );

const User = mongoose.model('User');
const Place = mongoose.model('Place');

var LocalStrategy = require('passport-local').Strategy;


const publicPath = path.resolve(__dirname, 'public');
var port = process.env.PORT || 8080;
//basic express middleware setup
app.set('view engine', 'hbs');
app.use(express.static(publicPath));
app.use(express.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(bodyParser());
app.use(session({  secret: 'supercoolsecret'  }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


//passport-local initialization code from https://scotch.io/tutorials/easy-node-authentication-setup-and-local
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user){
        done(err,user);
    });
});

passport.use('local-signup', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
}, function(req, email, password, done){
    process.nextTick(function() {
        User.findOne({ 'email' : email }, function(err, user) {
            if(err){
                return done(err);
            }
            if(user) {
                return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
            } else {

                let newUser = new User();
                newUser.email = email;
                newUser.password = newUser.generateHash(password);
                newUser.placesToGo = [];
                newUser.save(function(err) { 
                    if(err){
                        throw err;
                    }
                    return done(null, newUser);
                });
            }
        });
    });
}));

passport.use('local-login', new LocalStrategy({
    // by default, local strategy uses username and password, we will override with email
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true // allows us to pass back the entire request to the callback
}, function(req, email, password, done) { // callback with email and password from our form

    // find a user whose email is the same as the forms email
    // we are checking to see if the user trying to login already exists
        User.findOne({ 'email' :  email }, function(err, user) {
            // if there are any errors, return the error before anything else
            if (err){
                return done(err);
            }

            // if no user is found, return the message
            if (!user){
                return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
            }

            // if the user is found but the password is wrong
            if (!user.validPassword(password)){
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
            }
            
            // all is well, return successful user
            return done(null, user);
        });
}));

function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/login');
}


//main view
app.get('/', isLoggedIn, (req, res) => {
    Place.find(function(err, result){
        result.forEach(function(place){

        });
        console.log(err);
        console.log(result);
        res.render('homepage',{ places: result , username: req.user.email });
    });
});

app.get('/add', isLoggedIn, (req,res) => {
    res.render('add');
});

app.post('/add', (req, res) => {
    let body = req.body;
    new Place({
        name: body.name,
        description: body.description,
        timePosted: "11-10-2018",
        address: body.address,
        hasBeen: false
    }).save(function(err, article, count){
        if(err){
            console.log(err);
            res.redirect('/');
        }else{
            res.redirect('/');
        }
    });
});

app.get('/login', (req, res) => {
    res.render('login', { message: req.flash('loginMessage') });
});

app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/', // redirect to the secure profile section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));

//signUp view
app.get('/signup', (req, res) => {
    res.render('signup', { message: req.flash('loginMessage') });
});

app.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/', // redirect to the secure profile section
    failureRedirect : '/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));

app.get('/logout', isLoggedIn, (req, res) => {
    req.logOut();
    res.redirect('/login');
});

//place view
app.get('/place', isLoggedIn, (req, res) => {
    /* Research topic pseudoCode
    Place.find({query param}) to 
    find the specific place that is needed
    get place.location
    make http request to url of googlemaps api
    with slug of place.address
    render the place hbs to show a google maps view
    of the location of the place in which the 
    user can also click to navigate on
    */
    res.render('place');
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});