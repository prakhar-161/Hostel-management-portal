const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const adminSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 35
    },
    age: {
        type: Number,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
        minLength: 10,
        maxLength: 10,
        unique: true
    },
    email: {
        type: String,
        required: true,
        maxLength: 200,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 1024
    }
});

module.exports = Admin = mongoose.model('Admin', adminSchema);