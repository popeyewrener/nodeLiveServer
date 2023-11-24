const { getDatabase } = require('../connectors/mongoConnector');
const LiveRoomInstance = require('./../models/LiveRoomModel');
const { ObjectId } = require('mongodb');

async function createRoom(roomName, token, desc, imageUrl) {
  return new Promise((resolve, reject) => {
    if (!roomName || !token || !desc || !imageUrl) {
      return reject(new Error('One or more required variables are undefined.'));
    }
    
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
  var idobj = new ObjectId(id);
  console.log(idobj)

  let room = await rooms.findOne({ _id: idobj,
    });
  
  return room;
}

async function getRoomComments(id){
  return new Promise(async (resolve, reject) => {
    try{
    let room = await getRoombyIDtoken(id);
    if (room!=null){
      const db = await getDatabase();
      const collection =  db.collection("liveComment");
      console.log(room.comment)
      const commentIds = room.comment;
      const commentsList = await collection.find({ _id: { $in: commentIds } }).toArray();
      
        

      resolve(commentsList);  

    }
    else{
      reject({"status":401,
    message:"Room not found"})
    }
    
  }catch(e){
    console.log("entering catch error block")
    reject({"error":e});
  }

  
});
}

async function getallrooms(){
    const db = getDatabase();
    const collection = db.collection("liveRooms");

    const allRooms = await collection.find({}).toArray();
    return allRooms;
}

async function addComment(comment, room){
  
  
  comment.save()
    .then(commentID => {
      print(commentID)
      console.log('Room created:', commentID);
      room.comment.push(commentID);

      resolve(room.toJSON());
    })
    .catch(error => {
      console.error('Error creating room:', error);
      reject(error);
    });
}

module.exports = {
  createRoom,
  getRoombyIDtoken,
  getallrooms,
  addComment,
  getRoomComments
};
