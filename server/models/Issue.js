import mongoose from 'mongoose';

const { Schema } = mongoose;

const issueSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
}, { timestamps: true });

export default mongoose.model('Issue', issueSchema);
