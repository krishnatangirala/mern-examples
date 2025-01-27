import { MongoClient, ServerApiVersion } from "mongodb";

const URI = "mongodb://localhost:27017";
const client = new MongoClient(URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
});

try {
    // Connect the client to MongoDB Server
    await client.connect();

    // Send a ping to confirm successful connection
    await client.db("admin").command({ping: 1});

    console.log("Pinged MongoDB Server. You are successfully connected to MongoDB");
} catch (err) {
    console.error(err);
}

let db = client.db("employees");

export default db;
