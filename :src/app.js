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

app.get('/', (req, res) => {
    res.render('homepage');
});

app.get('/', (req, res) => {
    res.render('homepage');
});

app.listen(3000);