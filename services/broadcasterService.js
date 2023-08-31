const LiveRoomInstance = require("../models/LiveRoomModel");

const BroadcasterInstance = require("../models/broadcasterModel");

const { getRoombyIDtoken } = require("./roomService");

let broadcasteradd = async function(userId, roomId, diamond, token){
    return new Promise(async (resolve,reject)=>{
        try{
            let room = await getRoombyIDtoken(roomId);
    if (room!=null){
    let newbroadcaster = new BroadcasterInstance({"userId":userId, "diamond":diamond, "token":token, "roomId":roomId});
    
    newbroadcaster.save().then(async objId=>{
        //console.log(objId["_id"])
        const updatedRoom = await LiveRoomInstance.findByIdAndUpdate(
            roomId,
            { $push: { broadcaster: objId["_id"] } },
            { new: true }
          );
          resolve(updatedRoom);  
    }).catch(e=>{
        reject(e);
    });
     
      

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
            const deletedbroadcastdoc = await BroadcasterInstance.findOneAndDelete(
               { userId: userId } 
                
              );
              console.log(deletedbroadcastdoc);
              if (deletedbroadcastdoc!=null){
                let updatedRoom = await LiveRoomInstance.findByIdAndUpdate(
                    roomId,
                    { $pull: { broadcaster: deletedbroadcastdoc["_id"] } },{ new: true }); 
                    resolve(updatedRoom);
              }
              else{
                console.log("entering else")
                reject({"message":"broadcaster not found", "status":400})

              }
                
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
                let broadcasterlist = await BroadcasterInstance.find({roomId:roomId});
                console.log(broadcasterlist);
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