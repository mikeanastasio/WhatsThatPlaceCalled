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
    Place.find(function(err, result){
        console.log(err);
        console.log(result);
        res.render('homepage',{ places: result });
    });
});

app.get('/add', (req,res) => {
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