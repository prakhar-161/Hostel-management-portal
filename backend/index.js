require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// router imports
const adminRoutes = require('./routes/adminRoutes');
const staffRoutes = require('./routes/staffRoutes');
const roomRoutes = require('./routes/roomRoutes');
const studentRoutes = require('./routes/studentRoutes');

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use('/api/admin', adminRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/room', roomRoutes);
app.use('/api/student', studentRoutes);

const port = process.env.PORT || 5200;
const uri = process.env.MONGO_URI;

// Listening to server
app.listen(port, (err) => {
    if(err) { console.log(err.message); }
    console.log(`Connected to port ${port}`);
});

// Database connection
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Successfully connected to MongoDB');
})
.catch((err) => {
    console.log(err.message);
});
