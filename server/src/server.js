const http = require('http');

require('dotenv').config();

const app = require('./app.js');
const { mongoConnect } = require('./services/mongo');
const { loadPlanetsData } = require('./models/planets.model.js');
const { loadLaunchData } = require('./models/launches.model.js');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
    await mongoConnect();
    await loadPlanetsData();
    await loadLaunchData();

    server.listen(PORT, () => {
        console.log(`Listening port on ${PORT}...`);
    });
}

startServer();
