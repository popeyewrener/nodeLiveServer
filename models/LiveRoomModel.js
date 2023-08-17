// liveRoomInstance model with viewer references
const liveRoomInstanceSchema = new mongoose.Schema({
    name: String,
    agoraToken: String,
    banList: [String],
    viewers: [{
      viewerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ViewerInstance'
      },
      // You can add more fields related to each viewer in this map
    }],
    broadcaster: [{
      broadcasterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BroadcasterInstance'
      },
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
    totalViewers: [String],
  });
  
  const LiveRoomInstance = mongoose.model('LiveRoomInstance', liveRoomInstanceSchema);
  