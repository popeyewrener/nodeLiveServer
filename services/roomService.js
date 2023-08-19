const { getDatabase } = require('../connectors/mongoConnector');
const LiveRoomInstance = require('./../models/LiveRoomModel');

async function createRoom(roomName, token, desc, imageUrl) {
  return new Promise((resolve, reject) => {
    const newRoom = new LiveRoomInstance({
      name: roomName,
      desc:desc,
      imageUrl: imageUrl,
      agoraToken: token,
      banList: [],
      viewers: [],
      broadcaster: [],
      admin: [],
      coins: {},
      comment: [],
      chatBanList: [],
      totalViewers: [],
    });
    
    newRoom.save()
      .then(newRoom => {
        console.log('Room created:', newRoom);
        resolve(newRoom.toJSON());
      })
      .catch(error => {
        console.error('Error creating room:', error);
        reject(error);
      });
  });
}

async function getRoombyIDtoken(id) {
  const db = getDatabase();
  const rooms = db.collection('liveRooms');
  let room = await rooms.findOne({ agoraToken: id });
  return room;
}

async function getallrooms(){
    const db = getDatabase();
    const collection = db.collection("liveRooms");

    const allRooms = await collection.find({}).toArray();
    return allRooms;
}

module.exports = {
  createRoom,
  getRoombyIDtoken,
  getallrooms
};
