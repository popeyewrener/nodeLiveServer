const { getallrooms } = require("../../services/roomService");

let getAllRoom = async(req,res,err)=>{
    try{
    const allRooms = await getallrooms();
    console.log(allRooms);
    res.status(200).json(allRooms)
    }
    catch(err){
        console.log(err)
    }
    }

module.exports = {getAllRoom}    