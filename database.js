const mongoose = require('mongoose')

const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb+srv://angel:7711321385@dbcluster.pwwudks.mongodb.net/test';

mongoose.connect(URI, {
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected')
});