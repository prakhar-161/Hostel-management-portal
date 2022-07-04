const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    studentId: {
        type: String,
        unique: true
    },
    batch: {
        type: Number,
        required: true,
        min: 2020,
        max: 2024
    }, 
    hostel: {
        type: String,
        enum: ['K', 'L', 'M', 'N', 'O'],
        trim: true,
        required: true,
    },
    room: {
        type: Number,
    },
    gender: {
        type: String,
        enum: ['MALE', 'FEMALE'],
        required: true,
    },
    isAvailable: {
        type: Boolean,
        required: true
    }
});

module.exports = Student = mongoose.model('Student', studentSchema);