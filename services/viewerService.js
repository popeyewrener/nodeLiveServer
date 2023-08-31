
const LiveRoomInstance = require("../models/LiveRoomModel");

const ViewerInstance = require("../models/viewerModel");

const { getRoombyIDtoken } = require("./roomService");


let vieweradd = async function(userId, roomId, diamond, token, canChat){
    return new Promise(async (resolve,reject)=>{
        console.log(roomId)
        try{
            let room = await getRoombyIDtoken(roomId);
            //console.log(room)
    if (room!=null){
        console.log(`room ID:${roomId}`)
    console.log(`user ID:${userId}`)
    console.log(`Diamond:${diamond}`)
    console.log(`token:${token}`)
    console.log(`can Chat:${canChat}`)
    let newviewer = new ViewerInstance({ "diamond":diamond, "token":token, "roomId":roomId, "canChat":canChat,"userId":userId});
    
    await newviewer.save().then(async objId=>{
        console.log(objId["_id"])
        const updatedRoom = await LiveRoomInstance.findByIdAndUpdate(
            roomId,
            { $push: { viewers: objId["_id"] } },
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
let viewerremove = async function (userId, roomId){
    return new Promise (async (resolve, reject)=>{
        try{
            const deletedviewerdoc = await ViewerInstance.findOneAndDelete(
               { userId: userId } 
                
              );
              console.log(deletedviewerdoc);
              if (deletedviewerdoc!=null){
                let updatedRoom = await LiveRoomInstance.findByIdAndUpdate(
                    roomId,
                    { $pull: { viewers: deletedviewerdoc["_id"] } },{ new: true }); 
                    resolve(updatedRoom);
              }
              else{
                console.log("entering else")
                reject({"message":"viewer not found", "status":400})

              }
                
        }
        catch(e){
            reject(e);
            
        }
    })
}

let viewerget = async function (roomId){
    return new Promise(async (resolve,reject)=>{
        try{
            let room = await getRoombyIDtoken(roomId);
            
            if (room!=null){
                let viewerlist = await ViewerInstance.find({roomId:roomId});
                console.log(viewerlist);
                resolve(viewerlist);
            
            
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

module.exports = {vieweradd,viewerget, viewerremove}