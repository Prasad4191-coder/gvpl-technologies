import mongoose from 'mongoose';

const industrySchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  slug: String,
  services: [String],
});

export default mongoose.model('Industry', industrySchema);
