import mongoose from 'mongoose';

const careerSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  type: String,
  requirements: [String],
  postedAt: { type: Date, default: Date.now },
  active: { type: Boolean, default: true },
});

export default mongoose.model('Career', careerSchema);
