const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
require( './db' );

const publicPath = path.resolve(__dirname, 'public');


app.set('view engine', 'hbs');
app.use(express.static(publicPath));
app.use(express.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.render('homepage');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/place', (req, res) => {
    res.render('place');
});

app.listen(3000);