const Admin = require('../models/admin');
const bcrypt = require('bcryptjs');
const Joi = require('joi');
const generateAuthToken = require('../utils/authToken');

const registerAdmin = async () => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(35).required(),
        age: Joi.number().required(),
        phone: Joi.number().min(10).max(10).required(),
        email: Joi.string().max(200).required(),
        password: Joi.string().min(5).max(1024).required()
    });

    const { error } = schema.validate(req.body);
    if(error) {
        return res.status(400).send(error.details[0].message);
    };

    let user = await Admin.findOne({ email: req.body.email });
    if(user) {
        return res.status(400).send("User already exist");
    };

    const { name, email, password } = req.body;
    user = new Admin({ name, email, password });

    user.password = bcrypt.hash(admin.password, 12);
    user = await Admin.save();
};

const loginAdmin = async () => {
    const schema = Joi.object({
        email: Joi.string().max(200).required(),
        password: Joi.string().min(5).max(1024).required()
    });

    const { error } = schema.validate(req.body);
    if(error) {
        return res.status(400).send(error.details[0].message);
    };

    let user = await Admin.findOne({ email: req.body.email });
    if(!user) {
        return res.status(400).send('Invalid email or password');
    };

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if(isMatch) {
        const token = generateAuthToken(user);
        res.send(token);
    } else {
        return res.status(400).send('Invalid email or password');
    };
};

module.exports = {
    registerAdmin,
    loginAdmin
};