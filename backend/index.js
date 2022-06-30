require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5200;
const uri = process.env.MONGO_URI;

app.listen(port, (err) => {
    if(err) { console.log(err.message); }
    console.log(`Connected to port ${port}`);
});

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
