const { createUser } = require("../../services/userService");

let main_post = async(req,res,err)=>{
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
    })}

    module.exports = {main_post}