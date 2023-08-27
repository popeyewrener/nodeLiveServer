const { getRoomComments } = require("../../services/roomService");

let getAllRoomComment = async(req,res,err)=>{
    let reqBody = req.body;
    let roomId = reqBody.roomId;
    let curr_time = new Date().getTime();
    let commentList = await getRoomComments(roomId);
    let endtime = new Date().getTime();
    let elapsed = endtime - curr_time;
    console.log(curr_time);
    console.log(endtime)
    console.log(`Elapsed time: ${elapsed}`);
    res.status(200).json(commentList);
    }

module.exports = {getAllRoomComment}    