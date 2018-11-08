const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username: String,
    hash: String,
    email: String,
    favoriteColor: String,
    placesToGo: [{type: mongoose.Schema.Types.ObjectId, ref: 'Place'}],
    placesBeen: [{type: mongoose.Schema.Types.ObjectId, ref: 'Place'}]
});

const placeSchema = new mongoose.Schema({
    name: String,
    description: String,
    timePosted: String,
    address: String,
    hasBeen: boolean
});
mongoose.model("User", userSchema);
mongoose.model("Place", placeSchema);

//connect
mongoose.connect('mongodb://localhost/final', { useNewUrlParser: true });