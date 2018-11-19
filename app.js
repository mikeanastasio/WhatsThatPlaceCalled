const express = require('express');
const path = require('path');
const app = express();
//const mongoose = require('mongoose');
//require( './db' );

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
    res.send('homepage');
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