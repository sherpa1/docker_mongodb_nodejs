const { MongoClient } = require("mongodb");

const user = process.env.MONGO_INITDB_USERNAME;
const pwd = process.env.MONGO_INITDB_PASSWORD;
const db = process.env.MONGO_INITDB_DATABASE;
const host = process.env.ME_CONFIG_MONGODB_SERVER;
const port = process.env.ME_CONFIG_MONGODB_PORT;

const uri = `mongodb://${user}:${pwd}@${host}:${port}/${db}`;

const client = new MongoClient(uri);

async function run() {
    try {
        const database = client.db(db);

        const movies = database.collection('movies');

        await movies.insertOne({ title: 'Back to the Future' });

        const findMovie = await movies.findOne({ title: 'Back to the Future' });

        console.log(findMovie.title);
    } catch (error) {
        console.error(error);
    }
    finally {
        await client.close();
    }
}
run();