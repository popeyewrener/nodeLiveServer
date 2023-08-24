const path = require('path');
const CommentInstance = require("./../models/commentModel")
const LiveRoomInstance = require("./../models/LiveRoomModel")
const { getRoombyIDtoken, addComment } = require('../services/roomService');
module.exports = {
    
    post: async (req,res,err)=> {

        let reqBody = req.body;
        let roomId = reqBody.roomId;
        let userId = reqBody.userId;
        let msg = reqBody.msg;
        console.log(roomId)
        console.log(userId);
        console.log(msg);
        let room = await getRoombyIDtoken(roomId);
        console.log(room)
        if (room){
            console.log(room)
            let comment = new CommentInstance({
                userId: userId,
                msg:msg,
                amount:0,
                isGift:false

                
            });
            
            comment.save()
    .then( async commentID => {
        try {
            const updatedRoom = await LiveRoomInstance.findByIdAndUpdate(
              roomId,
              { $push: { comment: comment } },
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

    },
}