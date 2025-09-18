import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  name: String,
  hero: {
    image: String,
    title: String,
    subtitle: String,
  },
  intro: [String],
  features: [{
    title: String,
    image: String,
    bullets: [String],
  }],
  benefits: {
    title: String,
    benefits: [{
      icon: String,
      title: String,
      desc: String,
    }],
    image: String,
  },
  capabilities: [{
    title: String,
    desc: String,
    icon: String,
  }],
});

export default mongoose.model('Service', serviceSchema);
