const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
require( './db' );

const User = mongoose.model('User');
const Place = mongoose.model('Place');

const publicPath = path.resolve(__dirname, 'public');
var port = process.env.PORT || 8080;
//basic express middleware setup
app.set('view engine', 'hbs');
app.use(express.static(publicPath));
app.use(express.urlencoded({
    extended: true
}));

//main view
app.get('/', (req, res) => {
    new Place({
        name: "Awesome restaurant",
        description: "The food was good!",
        timePosted: "11-10-1996",
        address: "1 University Place",
        hasBeen: true
    }).save(function(err, article, count){
        console.log('saving');
        if(err){
            console.log(err);
        }else{
            console.log('it worked!!');
        }
    });
    Place.find(function(err, result){
        console.log(err);
        console.log(result);
        res.render('homepage',{ places: result });
    });
});

//login view
app.get('/login', (req, res) => {
    res.render('login');
});

//place view
app.get('/place', (req, res) => {
    res.render('place');
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});