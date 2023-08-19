// broadcasterInstance model
const broadcasterInstanceSchema = new mongoose.Schema({
    userId: String,
    diamond: Number,
    token: String,
  });
  
module.exports = mongoose.model('BroadcasterInstance', broadcasterInstanceSchema);
  