const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    favoriteColor: String,
    posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]
});

const postSchema = new mongoose.Schema({
    photoUrl: String,
    description: String,
    timePosted: String,
    longitude: String,
    latitude: String
});
mongoose.model("User", userSchema);
mongoose.model("Post", postSchema);

//connect
mongoose.connect('mongodb://localhost/final', { useNewUrlParser: true });