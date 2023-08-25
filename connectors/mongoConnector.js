const MongoClient = require('mongodb').MongoClient;
serverUrl ="109.123.235.27";
const url = 'mongodb://livesignal:livesignal@localhost:27017/livesignal'; // MongoDB server URL
const dbName = 'livesignal'; 



const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

async function connect() {
  try {
    await client.connect();
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

function getDatabase() {
  return client.db(dbName);
}

module.exports = {
  connect,
  getDatabase,
};
