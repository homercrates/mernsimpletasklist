const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create SCHEMA
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

// export
module.exports = Item = mongoose.model('item', ItemSchema);