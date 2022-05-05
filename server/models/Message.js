import mongoose from 'mongoose';

const { Schema } = mongoose;

const messageSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  issue_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Issue",
    required: true
  }
}, { timestamps: true });

export default mongoose.model('Message', messageSchema);
