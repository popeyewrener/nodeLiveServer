// commentInstance model
const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const commentInstanceSchema = new mongoose.Schema({
    
    timestamp: { type: Date, default: Date.now },
    userId: String,
    msg: String,
    room: ObjectId
  },
  { collection: 'liveComment' } );
  
module.exports = mongoose.model('CommentInstance', commentInstanceSchema);
  