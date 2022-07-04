const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const roomSchema = new Schema({
    roomNo: {
        type: Number,
        required: true,
    },
    action: {
        type: String,
        enum: ['CLEANING, REPAIR']
    },
    hostel: {
        type: String,
        enum: ['K', 'L', 'M', 'N', 'O'],
        required: true,
        trim: true
    },
    incharge: {
        type: String, 
        trim: true
    },
    gender: {
        type: String,
        enum: ['BOY', 'GIRL'],
        required: true
    }
});

module.exports = Room = mongoose.model('Room', roomSchema);