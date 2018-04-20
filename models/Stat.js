var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var StatSchema = new Schema({
    id:{type: Number},
    time: {type: Number},
    numQs:{type: Number},
    date:{type: String},
    avTime: {type: String},
    name:{type: String}}
    ,{
        collection: 'stats'
    })
;


module.exports = mongoose.model('Stat', StatSchema);
