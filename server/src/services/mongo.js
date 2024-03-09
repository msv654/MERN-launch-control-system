const mongoose = require('mongoose');

const MONGO_URL =
    'mongodb+srv://nasa-api:PASSWORD@nasa-project.z0hrr9a.mongodb.net/nasa?retryWrites=true&w=majority&appName=NASA-PROJECT';

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});

async function mongoConnect() {
    await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect,
};
