const mongoose = require('mongoose');
const http = require ('http'); 
const bcrypt = require('bcrypt-nodejs');

// Here we find an appropriate database to connect to, defaulting to
    // localhost if we don't find one.
const uristring = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://mikeanastasio:mymommy1@ds027348.mlab.com:27348/heroku_khll6xrx';


//user schema
const userSchema = new mongoose.Schema({
    email: String,
    password: String,
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

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

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