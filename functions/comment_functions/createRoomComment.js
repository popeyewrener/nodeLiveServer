const { getRoombyIDtoken } = require("../../services/roomService");

const CommentInstance = require("../../models/commentModel")
const LiveRoomInstance = require("../../models/LiveRoomModel")
let createRoomComment = async (req,res,err)=> {

    let reqBody = req.body;
    let roomId = reqBody.roomId;
    let userId = reqBody.userId;
    let msg = reqBody.msg;
    let amount = reqBody.amount;
    let isGift = reqBody.isGift;
      try{
        

    let room = await getRoombyIDtoken(roomId);
    
    if (room!=null){
        let comment = new CommentInstance({
            userId: userId,
            msg:msg,
            room:roomId});
        
        comment.save().then( async commentID => {
    try {
        const updatedRoom = await LiveRoomInstance.findByIdAndUpdate(
          roomId,
          { $push: { comment: commentID } },
          { new: true }
        );
    
        console.log('Room with added comment:', updatedRoom);
        res.status(201).json(updatedRoom);
      } catch (error) {
        console.error('Error adding comment to room:', error);
        res.status(400).json(error);
      }

  
})
.catch(error => {
  console.error('Error creating room:', error);
  res.status(400).json(error);
});

        
        

    }
    else{
      return res.status(401).json({"message":"Room not found"})
    }
  }catch(error){
      console.error('Error creating room:', error);
      res.status(400).json(error);
    }

};
module.exports = {createRoomComment}