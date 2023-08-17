// broadcasterInstance model
const broadcasterInstanceSchema = new mongoose.Schema({
    userId: String,
    diamond: Number,
    token: String,
  });
  
  const BroadcasterInstance = mongoose.model('BroadcasterInstance', broadcasterInstanceSchema);
  