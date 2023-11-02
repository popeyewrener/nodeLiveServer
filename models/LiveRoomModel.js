// liveRoomInstance model with viewer references
const mongoose = require('mongoose');
const liveRoomInstanceSchema = new mongoose.Schema({
    name: String,
    agoraToken: String,
    desc: String,
    imageUrl: String,
    lastUpdated: { type: Date, default: Date.now },
    banList: [String],
    viewers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ViewerInstance'
      },
      // You can add more fields related to each viewer in this map
    ],
    gifts:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'GiftInstance'
    }],
    broadcaster: [{
      
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BroadcasterInstance'
      
      // You can add more fields related to each broadcaster in this map
    }],
    admin: [String],
    coins: {
      type: Map,
      of: Number,
    },
    comment: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CommentInstance'
    }],
    

    chatBanList: [String],
    totalViewers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ViewerInstance'
      },]

    
  },
  { collection: 'liveRooms' } );
  
module.exports = mongoose.model('LiveRoomInstance', liveRoomInstanceSchema);
  