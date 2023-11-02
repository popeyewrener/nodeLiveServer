const GiftInstance = require("../../models/GiftModel");
const { addGifttoRoom } = require("../../services/GiftService");

let createGiftandAddtoRoom = async (req,res,err)=>{
    let reqBody = req.body;
    let userId = reqBody.userId;
    let amount = reqBody.amount;
    let giftImage = reqBody.giftImage;
    let roomId = reqBody.roomId;
    console.log(roomId);

    let gift = new GiftInstance({
        userId:userId,
        amount:amount,
        giftImage:giftImage,
        room:roomId
    })
    gift.save().then(async giftId =>{
        try{
            let updated_room = await addGifttoRoom(giftId,roomId,userId,amount);
            res.status(201).json(updated_room);
        }
        catch(e){
            console.log(e)
            res.status(400).json(e)
        }

    })


}
module.exports = {createGiftandAddtoRoom}