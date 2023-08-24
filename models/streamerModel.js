const streamerInstanceSchema = new mongoose.Schema({
    userID: String,
    token: String,
    
  });
  
  const ViewerInstance = mongoose.model('StreamerInstance', streamerInstanceSchema);
  