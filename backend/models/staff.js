const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const staffSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    occupation: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true, 
        unique: true
    },
    isAvailable: {
        type: Boolean,
        default: true
    }
});

module.exports = Staff = mongoose.model('Staff', staffSchema);