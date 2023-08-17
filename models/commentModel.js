// commentInstance model
const commentInstanceSchema = new mongoose.Schema({
    isGift: Boolean,
    timestamp: Date,
    userId: String,
    amount: Number,
    text: String,
  });
  
  const CommentInstance = mongoose.model('CommentInstance', commentInstanceSchema);
  