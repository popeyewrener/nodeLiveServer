const { getRoomGifts } = require("../../services/GiftService");

let getAllRoomGifts = async (req,res,err)=>{
    let reqBody = req.body;
    let roomId = reqBody.roomId;
    try{
        let gift_list = await getRoomGifts(roomId);
        res.status(200).json(gift_list);
    }
    catch(e){
        res.status(400).json(e)

    }

}
module.exports = {
    getAllRoomGifts
}