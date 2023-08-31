const { ObjectId } = require("mongodb");
const { default: mongoose } = require("mongoose");

// viewerInstance model
const viewerInstanceSchema = new mongoose.Schema({
    userId: Number,
    token: String,
    diamond: Number,
    roomId: ObjectId,
    canChat: Boolean
  },
  {collection: "liveViewer"});
  
  module.exports = mongoose.model('ViewerInstance', viewerInstanceSchema);
  