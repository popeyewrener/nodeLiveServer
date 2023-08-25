const path = require('path');
const CommentInstance = require("./../models/commentModel")
const LiveRoomInstance = require("./../models/LiveRoomModel")
const { getRoombyIDtoken, addComment, getRoomComments } = require('../services/roomService');
module.exports = {
    
    postCreateComment: async (req,res,err)=> {

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
                amount:amount,
                isGift:isGift,});
            
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

    },

    getAllComment: async(req,res,err)=>{
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

    
}