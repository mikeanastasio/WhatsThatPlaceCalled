const mongoose = require('mongoose');

/*Schema
const soundSchema = new mongoose.Schema({
	what: String,
    where: String,
    date: String,
    hour: Number,
    desc: String
});
mongoose.model("Sound", soundSchema);
*/

//connect
mongoose.connect('mongodb://localhost/final', { useNewUrlParser: true });