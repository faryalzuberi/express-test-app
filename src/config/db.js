const mongoose = require('mongoose');
const dotenv = require('dotenv');

// get config vars
dotenv.config();

const dbConnect = async () => await mongoose.connect(
    process.env.DB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbname: 'FashionWeb'
    }
);

mongoose.connection.on('open', console.info.bind(console, 'Database connection: open'))
    .on('close', console.info.bind(console, 'Database connection: close'))
    .on('error', console.error.bind(console, 'MongoDB connection: error:'));


module.exports = { dbConnect };