const mongoose = require('mongoose');

const ActivitySchema = mongoose.Schema({
    person : {type: String, required: true},
    activity: {type: String, required: true},
    duration: {type: String, required: true},
    date: {type: String, required: true},
    category: {type: String, required: true}
});

var Activity = mongoose.model('Activity', ActivitySchema);
module.exports = Activity;