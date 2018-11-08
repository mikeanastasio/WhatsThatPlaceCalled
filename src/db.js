const mongoose = require('mongoose');

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
    hasBeen: boolean
});

//add schema to the model
mongoose.model("User", userSchema);
mongoose.model("Place", placeSchema);

//connect
mongoose.connect('mongodb://localhost/final', { useNewUrlParser: true });