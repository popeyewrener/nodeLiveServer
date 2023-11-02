// giftInstance model
const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const GiftInstanceSchema = new mongoose.Schema({
    
    timestamp: { type: Date, default: Date.now },
    userId: String,
    amount: Number,
    room: ObjectId,
    giftImage: String
  },
  { collection: 'liveGift' } );
  
module.exports = mongoose.model('GiftInstance', GiftInstanceSchema);
  