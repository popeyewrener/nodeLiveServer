const { createRoom } = require("../services/roomService");

handleSocket = (io,socket)=>{
    socket.on("sendMessage", (message)=>{
        io.emit("recieveMessage", message);
    });
    socket.on("roomCreate", async (req)=>{
        const reqBody = req;
        const roomname = reqBody.roomname;
        const agoraToken = reqBody.agoraToken;
        const desc = reqBody.desc;
        const imageUrl = reqBody.imageUrl;
        console.log(roomname);
        console.log(agoraToken)
        
        const room = await createRoom(roomname,agoraToken,desc,imageUrl);
        //console.log(userId);
        console.log(room);
        socket.emit("roomDetail", room)
        
    });

    
    socket.on("joinLive", (message)=>{
        
    });
    socket.on("startLive", (message)=>{
       
    });
    socket.on("endLive", (message)=>{
        
    });
    socket.on("sendGift", (message)=>{
        
    });
    socket.on("getLives", (message)=>{
        
    });
    socket.on("sendGift", (message)=>{
        
    });
    

}
module.exports = {handleSocket}
