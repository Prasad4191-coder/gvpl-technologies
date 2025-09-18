import mongoose from 'mongoose';

const heroSlideSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
}, { _id: false });

const homeContentSchema = new mongoose.Schema({
  heroSlides: [heroSlideSchema],
  services: [{
    title: String,
    description: String,
    image: String,
  }],
  industries: [{
    title: String,
    description: String,
    image: String,
  }],
  partners: [{
    name: String,
    logo: String,
    url: String,
  }],
  stats: [{
    value: Number,
    suffix: String,
    label: String,
  }],
  aboutHeroSlides: [heroSlideSchema],
  contactInfo: {
    phones: [{ role: String, number: String }],
    email: String,
    address: String,
    mapEmbed: String,
  }
}, { timestamps: true });

export default mongoose.model('HomeContent', homeContentSchema);
