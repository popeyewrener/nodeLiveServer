
const { viewerremove } = require("../../services/viewerService");

let deleteViewerList = async(req,res,err)=>{
    let reqBody = req.body;
    let roomId = reqBody.roomId;
    let userId = reqBody.userId;
    let curr_time = new Date().getTime();
    try{let viewerlist = await viewerremove(userId, roomId);
        res.status(200).json(viewerlist);}
        catch(e){
            res.status(400).json(e);
        }
    
    let endtime = new Date().getTime();
    let elapsed = (endtime - curr_time);
    
    console.log(`Elapsed time: ${elapsed}ms`);
    
    }        

module.exports = {deleteViewerList}    
