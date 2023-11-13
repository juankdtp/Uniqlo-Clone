const { MongoClient, ObjectId } = require("mongodb");

const uri =
  "mongodb+srv://juankhosydtps:FLK3arxAewI03D8a@cluster0.wv495lj.mongodb.net/";

const client = new MongoClient(uri);
let database;

async function mongoConnection() {
  try {
    await client.connect();
    database = client.db("db_bsd_07");
    return database;
  } catch (error) {
    await client.close();
    throw error;
  }
}

function getDatabase() {
  return database;
}

module.exports = {
  mongoConnection,
  getDatabase,
};
