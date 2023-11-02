const { getRoombyIDtoken } = require("./roomService");

const LiveRoomInstance = require("../models/LiveRoomModel");
const { getDatabase } = require("../connectors/mongoConnector");
const { sortObjectByValues } = require("../functions/doc_functions");
async function addGifttoRoom(giftId, roomId, userId, amount){
    return new Promise(async (resolve,reject)=>{
        try{
let room = await getRoombyIDtoken(roomId);
if (room!=null){
    let roomcoins = room.coins;
    console.log(roomcoins);
    if (!room.coins[userId]){
        room.coins[userId] = amount;
        room.coins = sortObjectByValues(room.coins);
        console.log(room.coins)

        const updatedRoom = await LiveRoomInstance.findByIdAndUpdate(
            roomId,
            { $set: {
                coins: room.coins,
                
              },
                $push: { gifts: giftId }
             },

            { new: true }
          );

        resolve(updatedRoom);
    }
    else{
        room.coins[userId] += amount;
        room.coins = sortObjectByValues(room.coins);
       
        let updatedRoom = await LiveRoomInstance.findByIdAndUpdate(
            roomId,
            {$push: { gifts: giftId },
              $set: {coins: room.coins,}
              
              
            },
            { new: true }
          );
          resolve(updatedRoom);
    }

    
}
else{
    reject({"status":401,
  message:"Room not found"})
  }
        }
        catch(e){
            reject(e);

        }
    })

  }
async function getRoomGifts(id){
    return new Promise(async (resolve, reject) => {
      try{
      let room = await getRoombyIDtoken(id);
      if (room!=null){
        const db = await getDatabase();
        const collection =  db.collection("liveGift");
        console.log(room.gifts)
        const giftIds = room.gifts;
        const giftList = await collection.find({ _id: { $in: giftIds } }).toArray();
        
          
  
        resolve(giftList);  
  
      }
      else{
        reject({"status":401,
      message:"Room not found"})
      }
      
    }catch(e){
      console.log("entering catch error block")
      console.log(e)
      reject({"error":e});
    }
  
    
  });
  }  

  module.exports = {addGifttoRoom, getRoomGifts}