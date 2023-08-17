// viewerInstance model
const viewerInstanceSchema = new mongoose.Schema({
    userID: String,
    token: String,
    diamonds: Number,
    canChat: Boolean,
  });
  
  const ViewerInstance = mongoose.model('ViewerInstance', viewerInstanceSchema);
  