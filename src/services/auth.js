const { generateJWT } = require("../utils/jwt");
const user = require("../utils/user");
const bcrypt = require("bcrypt");

async function loginUser(username, loginPass) {
    const hash = await getUserHashFromDb(user.password).then((hash) => { return hash }).catch((err) => { console.log(err); return false });
    if (hash) {
        const isValidUser = await validateUser(hash, loginPass);
        return isValidUser ? generateJWT(user) : false;
    }
    else {
        throw new Error('Could not login. Server Error', hash)
    }
}

function generatePasswordHash(password, saltRounds = 10) {
    return bcrypt.hash(password, saltRounds);
}

async function validateUser(hash, password) {
    return bcrypt
        .compare(password, hash)
        .then((res) => {
            return res;
        })
        .catch((err) => { console.log(err); return false });
}

const getUserHashFromDb = (password) => {
    // In reality, we will fetch the hash
    // from the database. here we will generate the hash from the text first
    return new Promise((resolve, reject) => {
        generatePasswordHash(password)
            .then((hash) => resolve(hash))
            .catch((error) => { console.log(error); reject(new Error(error)) })
    });
}

module.exports = { loginUser }
