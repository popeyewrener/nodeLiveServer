const path = require('path');
let mainget = (req,res,err)=>{

    //console.log(path.join(__dirname , "/../public/index.html"));
    res.sendFile(path.join(__dirname , "/../../public/index.html"));

}
module.exports = {mainget}