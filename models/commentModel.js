// commentInstance model
const mongoose = require('mongoose');
const commentInstanceSchema = new mongoose.Schema({
    isGift: Boolean,
    timestamp: { type: Date, default: Date.now },
    userId: String,
    amount: Number,
    msg: String,
  },
  { collection: 'liveComment' } );
  
module.exports = mongoose.model('CommentInstance', commentInstanceSchema);
  