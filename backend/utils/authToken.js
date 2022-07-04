const jwt = require('jsonwebtoken');

const generateAuthToken = (user) => { 
    const secretKey = process.env.JWT_SECRET_KEY;

    const token = jwt.sign({
            _id: user._id,
            name: user.name,
            age: user.age,
            phone: user.phone,
            email: user.email
        }, secretKey
    );

    return token;
};