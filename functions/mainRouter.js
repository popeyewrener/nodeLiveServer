const path = require('path');
module.exports = {
    get: (req,res,err)=>{
        console.log(path.join(__dirname , "/../public/index.html"));
        res.sendFile(path.join(__dirname , "/../public/index.html"));

    }
}