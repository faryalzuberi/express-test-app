const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// get config vars
dotenv.config();

function generateJWT(user) {
    return jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

module.exports = { generateJWT }