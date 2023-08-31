//const { broadcasterget } = require("../../services/broadcasterService");
const { json } = require("express");
const { viewerget } = require("../../services/viewerService");


let getAllViewerList = async(req,res,err)=>{
    let reqBody = req.body;
    let roomId = reqBody.roomId;
    let curr_time = new Date().getTime();
    try{
        let viewerlist = await viewerget(roomId);
        res.status(200).json(viewerlist);
    }
    catch(e){
        json(400).json(e);
    }
    
    let endtime = new Date().getTime();
    let elapsed = (endtime - curr_time);
    
    console.log(`Elapsed time: ${elapsed}ms`);
    
    }



module.exports = {getAllViewerList}    