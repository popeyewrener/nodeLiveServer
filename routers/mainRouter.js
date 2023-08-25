const path = require('path');
const {createUser} = require("../services/userService")
module.exports = {
    get: (req,res,err)=>{

        console.log(path.join(__dirname , "/../public/index.html"));
        res.sendFile(path.join(__dirname , "/../public/index.html"));

    },
    post: async(req,res,err)=>{
        const reqBody = req.body;
        const userName = reqBody.username;
        const email = reqBody.email;
        console.log(email);
        console.log(userName)
        const userId = await createUser({username:userName,
        email:email})
        console.log(userId);
        res.send({
            id:userId,
            userName:userName,
            email:email
        })



    }
}