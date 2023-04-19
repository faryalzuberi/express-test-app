const mongoose = require('mongoose');

async function getAllCategories() {
    let catColl = await mongoose.connection.collection('categories');
    return await catColl.find().toArray();
}

module.exports = { getAllCategories }
