const path = require('path');
const {createRoom, getRoombyIDtoken, getallrooms} = require("./../services/roomService");
module.exports = {

    get: async(req,res,err)=>{
        
        const id = req.params.id;
        console.log(id)
        try{
            const doc=await getRoombyIDtoken(id);
            console.log(doc)            
            res.send(doc);

        }
        catch(e){
            res.send(e);

        }
},
getall: async(req,res,err)=>{
try{
const allRooms = await getallrooms();
console.log(allRooms);
res.status(200).json(allRooms)
}
catch(err){
    console.log(err)
}
},
post: async(req,res,err)=>{
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

}