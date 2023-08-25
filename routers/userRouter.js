const path = require('path');
const {createUser} = require("../services/userService");
const {getUserById} = require("../services/userService")
module.exports = {
    get: async(req,res,err)=>{
        
        const id = req.params.id;
        console.log(id)
        try{
            const doc=await getUserById(id);
            console.log(doc)            
            res.send(doc);

        }
        catch(e){
            res.send(e);

        }
        

       

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