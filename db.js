let mongoose = require('mongoose');
let db = mongoose.connect('mongodb://localhost/ActivityDB',
    function(){
        console.log('MongoDb connected');
    }
);
module.exports = db;