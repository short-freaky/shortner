const mongoose = require('mongoose');

// Hardcoded MongoDB URI
const MONGO_URI = 'mongodb://freakyshortner:73ocJcK55717514JkA5fAD4fKDmpL3VJFxLvf7t0wQnP4WkaT9j0hDNemu2g1Io3hVzG1wixqDXVACDbs6r4OA==@freakyshortner.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@freakyshortner@';

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error(`Error connecting to MongoDB: ${err.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
