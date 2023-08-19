const liveRoomInstanceSchema = new mongoose.Schema(
    {
      name: String,
      agoraToken: String,
      banList: [String],
      viewers: [mongoose.Schema.Types.ObjectId],
      broadcaster: [mongoose.Schema.Types.ObjectId],
      admin: [String],
      coins: {
        type: Map,
        of: Number,
      },
      comment: [mongoose.Schema.Types.ObjectId],
      chatBanList: [String],
      totalViewers: [String],
    },
    { collection: 'liveRooms' } // Specify the collection name here
  );