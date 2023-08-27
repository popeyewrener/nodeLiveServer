
const LiveRoomInstance = require("../models/LiveRoomModel");

const { getRoombyIDtoken } = require("./roomService");
let banListadd = async function(userId,roomId){
    return new Promise(async (resolve,reject)=>{
        try{
            let room = await getRoombyIDtoken(roomId);
    if (room!=null){
     
      const updatedRoom = await LiveRoomInstance.findByIdAndUpdate(
        roomId,
        { $push: { banList: userId } },
        { new: true }
      );
      resolve(updatedRoom);  

    }
    else{
        reject({"message":"Room not found", "status":401})
    }

        }
        catch(error){
            reject(error)
        }
    })
}
let banListremove = async function (userId, roomId){
    return new Promise (async (resolve, reject)=>{
        try{
            const updatedRoom = await LiveRoomInstance.findByIdAndUpdate(
                roomId,
                { $pull: { banList: userId } }
                
              );
              resolve(updatedRoom);
        }
        catch(e){
            reject(e);
        }
    })
}

let banListget = async function (roomId){
    return new Promise(async (resolve,reject)=>{
        try{
            let room = await getRoombyIDtoken(roomId);
            if (room!=null){
                let banlist = room.banList;
                resolve(banlist);
            
            
            }
            else{
                reject({"message":"room not found"})
            }

        }
        catch(e){
reject(e)
        }
    })
}

module.exports = {banListadd, banListremove,banListget}