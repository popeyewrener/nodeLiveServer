
const LiveRoomInstance = require("../../models/LiveRoomModel");
const { getRoombyIDtoken } = require("./roomService");
let viewerListadd = async function(userId,roomId){
    return new Promise(async (resolve,reject)=>{
        try{
            let room = await getRoombyIDtoken(roomId);
    if (room!=null){
     
      const updatedRoom = await LiveRoomInstance.findByIdAndUpdate(
        roomId,
        { $push: { viewers: userId } },
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
let viewersListremove = async function (userId, roomId){
    return new Promise (async (resolve, reject)=>{
        try{
            const updatedRoom = await LiveRoomInstance.findByIdAndUpdate(
                roomId,
                { $pop: { viewers: userId } }
                
              );
              resolve(updatedRoom);
        }
        catch(e){
            reject(e);
        }
    })
}

let viewersListget = async function (roomId){
    return new Promise(async (resolve,reject)=>{
        try{
            let room = await getRoombyIDtoken(roomId);
            if (room!=null){
                let viewersList = room.viewers;
                resolve(viewersList);
            
            
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

module.exports = {viewerListadd, viewersListget,viewersListremove}