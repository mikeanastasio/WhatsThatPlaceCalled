const mongoose = require('mongoose');
const http = require ('http'); 


// Here we find an appropriate database to connect to, defaulting to
    // localhost if we don't find one.
const uristring = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://mikeanastasio:mymommy1@ds027348.mlab.com:27348/heroku_khll6xrx';


//user schema
const userSchema = new mongoose.Schema({
    username: String,
    hash: String,
    email: String,
    favoriteColor: String,
    placesToGo: [{type: mongoose.Schema.Types.ObjectId, ref: 'Place'}],
    placesBeen: [{type: mongoose.Schema.Types.ObjectId, ref: 'Place'}]
});

//place schema
const placeSchema = new mongoose.Schema({
    name: String,
    description: String,
    timePosted: String,
    address: String,
    hasBeen: Boolean
});

//add schema to the model
mongoose.model("User", userSchema);
mongoose.model("Place", placeSchema);

//connect
//mongoose.connect('mongodb://localhost/final', { useNewUrlParser: true });
mongoose.connect(uristring, function (err, res) {
    if (err) {
        console.log ('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
        console.log ('Succeeded connected to: ' + uristring);
    }
});