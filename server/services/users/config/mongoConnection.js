const { MongoClient, ObjectId } = require("mongodb");

const uri = ""; //MongoDB Url

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
