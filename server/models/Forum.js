// -forum
//  --category
//    ---issue
//      ----message
import mongoose from 'mongoose';

const { Schema } = mongoose;

const forumSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true
  }
}, { timestamps: true });

export default mongoose.model('Forum', forumSchema);
