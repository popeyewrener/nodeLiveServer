const LiveRoomInstance = require("../models/LiveRoomModel");

const { getRoombyIDtoken } = require("./roomService");

let broadcasteradd = async function(userId,roomId){
    return new Promise(async (resolve,reject)=>{
        try{
            let room = await getRoombyIDtoken(roomId);
    if (room!=null){
     
      const updatedRoom = await LiveRoomInstance.findByIdAndUpdate(
        roomId,
        { $push: { broadcaster: userId } },
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
let broadcasterremove = async function (userId, roomId){
    return new Promise (async (resolve, reject)=>{
        try{
            const updatedRoom = await LiveRoomInstance.findByIdAndUpdate(
                roomId,
                { $pop: { broadcaster: userId } }
                
              );
              resolve(updatedRoom);
        }
        catch(e){
            reject(e);
        }
    })
}

let broadcasterget = async function (roomId){
    return new Promise(async (resolve,reject)=>{
        try{
            let room = await getRoombyIDtoken(roomId);
            if (room!=null){
                let broadcasterlist = room.broadcaster;
                resolve(broadcasterlist);
            
            
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

module.exports = {broadcasteradd,broadcasterget, broadcasterremove}