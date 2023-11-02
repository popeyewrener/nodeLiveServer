const { json } = require("express");
const { createRoom } = require("../services/roomService");
const { vieweradd } = require("../services/viewerService");
const { broadcasteradd, broadcastercheck } = require("../services/broadcasterService");

handleSocket = (io,socket,userid)=>{
    console.log(socket.userId)
    
    
    socket.on("sendMessage", (message)=>{
        io.emit("recieveMessage", message);
    });
    socket.on("create_room", async (req)=>{
        let reqBody = req ;
        const roomname = reqBody.roomname;  
        const agoraToken = reqBody.agoraToken;
        const desc = reqBody.desc;
        const imageUrl = reqBody.imageUrl;
      console.log(roomname, agoraToken,desc,imageUrl )
        
      try {
        const room = await createRoom(roomname, agoraToken, desc, imageUrl);
        console.log(room);
        socket.emit("roomDetails", room)
        // Handle the resolved promise (room was created successfully)
      } catch (e) {
        // Handle the rejected promise (an error occurred)
        console.error('Error creating room:', e);
    socket.emit("roomDetails", e.message)
        // You can also respond to the client with an error message if this is an HTTP route handler
      }
        //console.log(userId);
        
        
    });
    
    socket.on("enter_live", async (data, ack)=>{
        let reqBody = data;
        let roomId = reqBody.roomId;
        let userId = socket.userId;
        let diamond = reqBody.diamond;
        let token = reqBody.token;
        let canChat = reqBody.canChat;
        let curr_time = new Date().getTime();
        try{
            let viewerlist = await vieweradd(userId, roomId, diamond, token, canChat);
            ack({"data":viewerlist});}
        catch(e){
            
            ack({"error":e.message});
    
        }
    });
    socket.on("add_broadcaster", async(data, ack)=>{
        let reqBody = data;
        let roomId = reqBody.roomId;
        let userId = socket.userId;
        let diamond = reqBody.diamond;
        let token = reqBody.token;
        let curr_time = new Date().getTime();
        try{
            let broadcastlist = await broadcasteradd(userId, roomId, diamond, token);
            ack({"data":broadcastlist});}
            //res.status(200).json(broadcastlist);}
        catch(e){
            ack({"error":e})
            //res.status(400).json(e)
    
        }
        
    });
    socket.on("check_broadcaster", async(data,ack)=>{
        let reqBody = data;
        let roomId = reqBody.roomId;
        let userId = socket.userId;
        try{
            let broadcaster = await broadcastercheck(userId, roomId);
            ack({"data":broadcaster});
        }
        catch(e){
        ack({"error":e.message});
        }
    })
    socket.on("join_room", async(data)=>{

    });
    socket.on("leave_room",async (data)=>{
        
    });
    
    socket.on("startLive", async(data)=>{
       
    });
    socket.on("endLive", async(data)=>{
        
    });
    socket.on("sendGift", async(data)=>{
        
    });
    socket.on("getLives", async(data)=>{
        
    });
    socket.on("sendGift",async (data)=>{
        
    });
    

}
module.exports = {handleSocket}
