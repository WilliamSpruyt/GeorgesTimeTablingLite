var mongoose = require('mongoose');

var StatSchema = new mongoose.Schema({
    id: Number,
    time: Number,
    numQs: Number,
    date:String,
    avTime: String,
    name:String,
});

module.exports = mongoose.model('Stat', StatSchema);
