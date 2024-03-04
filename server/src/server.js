const http = require('http');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = require('./app.js');
const { loadPlanetsData } = require('./models/planets.model.js');

const PORT = process.env.PORT || 8000;

const MONGO_URL =
    'mongodb+srv://nasa-api:PASSWORD@nasa-project.z0hrr9a.mongodb.net/?retryWrites=true&w=majority&appName=NASA-PROJECT';

const server = http.createServer(app);

const client = new MongoClient(MONGO_URL, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function startServer() {
    await client.connect();

    await loadPlanetsData();

    server.listen(PORT, () => {
        console.log(`Listening port on ${PORT}...`);
    });
}

startServer();
