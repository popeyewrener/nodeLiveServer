//const { broadcasteradd } = require("../../services/broadcasterService");

const { vieweradd } = require("../../services/viewerService");

let addViewerList = async(req,res,err)=>{
    let reqBody = req.body;
    let roomId = reqBody.roomId;
    let userId = reqBody.userId;
    let diamond = reqBody.diamond;
    let token = reqBody.token;
    let canChat = reqBody.canChat;
    let curr_time = new Date().getTime();
    console.log(`room ID:${roomId}`)
    console.log(`user ID:${userId}`)
    console.log(`Diamond:${diamond}`)
    console.log(`token:${token}`)
    console.log(`can Chat:${canChat}`)
    try{
        let viewerlist = await vieweradd(userId, roomId, diamond, token, canChat);
        res.status(200).json(viewerlist);}
    catch(e){
        res.status(400).json(e)

    }
    
    
    let endtime = new Date().getTime();
    let elapsed = (endtime - curr_time);
    
    console.log(`Elapsed time: ${elapsed}ms`);
   
    }


module.exports = {addViewerList}    