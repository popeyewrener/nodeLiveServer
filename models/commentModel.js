// commentInstance model
const commentInstanceSchema = new mongoose.Schema({
    isGift: Boolean,
    timestamp: Date,
    userId: String,
    amount: Number,
    text: String,
  });
  
module.exports = mongoose.model('CommentInstance', commentInstanceSchema);
  