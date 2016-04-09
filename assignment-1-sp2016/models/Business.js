var mongoose = require("mongoose");

var BusinessSchema = new mongoose.Schema ({
    _id: String,
    value: Number,
},
{
    collection: 'business_counts'
});

mongoose.model('Business', BusinessSchema);