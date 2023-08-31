// broadcasterInstance model
const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const broadcasterInstanceSchema = new mongoose.Schema({
    userId: String,
    diamond: Number,
    token: String,
    roomId: ObjectId
  },{collection:"liveBroadcaster"});
  
module.exports = mongoose.model('BroadcasterInstance', broadcasterInstanceSchema);
  