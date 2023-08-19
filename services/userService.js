const { getDatabase } = require('../connectors/mongoConnector');
const { ObjectId } = require('mongodb');

async function createUser(user) {
  const db = getDatabase();
  const users = db.collection('users');
  const result = await users.insertOne(user);
  return result.insertedId;
}

async function getUserById(userId) {
  const intime = Date.now();  
  const db = getDatabase();
  const users = db.collection('users');
  const userIdObj = new ObjectId(userId);
  let user = await users.findOne({ _id: userIdObj });
  const outtime = Date.now();
  console.log(outtime-intime)
  return user;
}

// Implement other CRUD functions as needed

module.exports = {
  createUser,
  getUserById,
};
