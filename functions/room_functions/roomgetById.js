const { getRoombyIDtoken } = require("../../services/roomService");

let roomgetById = async(req,res,err)=>{
        
    const id = req.params.id;
    console.log(id)
    try{
        const doc=await getRoombyIDtoken(id);
               
        res.send(doc);

    }
    catch(e){
        res.send(e);

    }
}
module.exports = {roomgetById}