import mongoose from 'mongoose';

const { Schema } = mongoose;

const categorySchema = new Schema({
  title: {
    type: String,
    // unique: true,
    required: true
  },
  forum_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Forum",
    required: true
  }
}, { timestamps: true });

export default mongoose.model('Category', categorySchema);
