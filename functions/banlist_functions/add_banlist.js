const { banListadd } = require("../../services/banlistService");

let addbanList = async(req,res,err)=>{
    let reqBody = req.body;
    let roomId = reqBody.roomId;
    let userId = reqBody.userId;
    let curr_time = new Date().getTime();
    let banlist = await banListadd(userId, roomId);
    let endtime = new Date().getTime();
    let elapsed = (endtime - curr_time);
    
    console.log(`Elapsed time: ${elapsed}ms`);
    res.status(200).json(banlist);
    }


module.exports = {addbanList}    