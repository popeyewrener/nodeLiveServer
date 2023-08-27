const { createRoom } = require("../../services/roomService");

let createRoomFun = async(req,res,err)=>{
    const reqBody = req.body;
        const roomname = reqBody.roomname;
        const agoraToken = reqBody.agoraToken;
        const desc = reqBody.desc;
        const imageUrl = reqBody.imageUrl;
        console.log(roomname);
        console.log(agoraToken)
        const room = await createRoom(roomname,agoraToken,desc,imageUrl);
        //console.log(userId);
        console.log(room);
        
        res.status(201).json(room);
}
module.exports = {createRoomFun}