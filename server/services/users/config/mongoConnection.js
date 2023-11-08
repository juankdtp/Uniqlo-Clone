const { MongoClient, ObjectId } = require("mongodb");

// Replace the uri string with your connection string.
// const uri = "mongodb://127.0.0.1:27017";
const uri =
  "mongodb+srv://juankhosydtps:FLK3arxAewI03D8a@cluster0.wv495lj.mongodb.net/";

const client = new MongoClient(uri);
let database;

async function mongoConnection() {
  try {
    await client.connect();
    database = client.db("db_bsd_07");
    // console.log(database, "<<< db di mongoconnect");
    return database;
  } catch (error) {
    // Ensures that the client will close when you finish/error
    await client.close();
    throw error;
  }
}

function getDatabase() {
  return database;
}

module.exports = {
  mongoConnection,
  // database,
  getDatabase,
};
