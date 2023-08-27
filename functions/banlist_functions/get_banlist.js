const { banListget } = require("../../services/banlistService");


let getAllBanList = async(req,res,err)=>{
    let reqBody = req.body;
    let roomId = reqBody.roomId;
    let curr_time = new Date().getTime();
    let banlist = await banListget(roomId);
    let endtime = new Date().getTime();
    let elapsed = (endtime - curr_time);
    
    console.log(`Elapsed time: ${elapsed}ms`);
    res.status(200).json(banlist);
    }



module.exports = {getAllBanList}    