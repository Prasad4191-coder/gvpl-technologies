import mongoose from 'mongoose';
import dotenv from 'dotenv';
import HomeContent from './models/homeContent.js';
import Service from './models/service.js';
import Industry from './models/industry.js';
import Blog from './models/blog.js';
import Career from './models/career.js';
import User from './models/user.js';
import bcrypt from 'bcryptjs';

dotenv.config();

async function seed() {
  const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/gvpl';
  await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log('Connected to MongoDB for seeding');

  try {
    // Users
    await User.deleteMany({});
    const hashedPassword = await bcrypt.hash('admin', 10);
    await User.create({ username: 'admin', password: hashedPassword, role: 'admin' });

    // Home content
    await HomeContent.deleteMany({});
    await HomeContent.create({
      heroSlides: [
        { title: 'Crafting Every Single Product With Detailed', description: 'We will help to develop every smallest thing into a big one for your company', image: 'https://placehold.co/1920x1080/001F3F/FFFFFF/png?text=Engineering+Design' },
        { title: 'Innovative Engineering Solutions', description: 'Delivering excellence through advanced technology and expertise', image: 'https://placehold.co/1920x1080/003366/FFFFFF/png?text=Innovation' },
        { title: 'Global Technical Excellence', description: 'Providing world-class engineering services across industries', image: 'https://placehold.co/1920x1080/004080/FFFFFF/png?text=Excellence' },
      ],
      services: [
        { title: 'Computer Aided Design', description: 'Computer-Aided Design (CAD) is a powerful tool...', image: 'https://placehold.co/800x600/333333/FFFFFF/png?text=CAD' },
        { title: 'Finite Element Analysis', description: 'Advanced structural analysis...', image: 'https://placehold.co/800x600/333333/FFFFFF/png?text=FEA' },
        { title: 'Computational Fluid Dynamics', description: 'Sophisticated fluid flow analysis...', image: 'https://placehold.co/800x600/333333/FFFFFF/png?text=CFD' },
      ],
      industries: [
        { icon: 'https://placehold.co/100x100/009DFF/FFFFFF/png?text=Chemical', title: 'Chemical', description: 'Lorem ipsum' },
        { icon: 'https://placehold.co/100x100/009DFF/FFFFFF/png?text=Electronics', title: 'Electronics', description: 'Lorem ipsum' },
      ],
      partners: [ { name: 'Partner', logo: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png', url: '' } ],
      stats: [ { value: 10, suffix: '+', label: 'Years Of Experiences' } ],
      aboutHeroSlides: [ { title: 'Crafting Every Single Product With Detailed', description: 'We will help to develop every smallest thing into a big one for your company', image: 'localHeroImg' } ],
      contactInfo: { email: 'info@gvpltechnologies.com' },
    });

    // Services
    await Service.deleteMany({});
    await Service.create([
      {
        name: 'CAD',
        hero: { image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80', title: 'Computer Aided Design', subtitle: 'Transforming Ideas into Market-Ready Products with GVPL Technologies' },
        intro: ['At GVPL Technologies, we specialize in delivering top-tier 3D Computer-Aided Design (CAD)...'],
        features: [ { title: 'Detailed 3D CAD Modeling', image: 'https://www.shutterstock.com/shutterstock/photos/71536909/display_1500/stock-photo-built-walls-of-a-house-on-construction-drawings-71536909.jpg', bullets: ['Accurate Visualizations', 'Design Optimization', 'Virtual Prototyping'] } ],
        benefits: { title: 'Benefits of Our 3D CAD Services', benefits: [ { icon: '', title: 'Improved Design Quality', desc: 'Leverage templates and standards' } ], image: 'https://www.shutterstock.com/image-photo/benefits-cad-260nw-1939640738.jpg' },
      },
    ]);

    // Industries
    await Industry.deleteMany({});
    await Industry.create([
      { name: 'Aerospace Engineering', description: '', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80', slug: 'aerospace-engineering', services: ['CAD', 'CFD', 'FEA'] },
    ]);

    // Blogs
    await Blog.deleteMany({});
    await Blog.create([ { title: 'Welcome to GVPL Technologies Blog', content: 'Stay tuned...', author: 'Admin', image: 'https://placehold.co/800x600/333333/FFFFFF/png?text=Blog+Post', tags: ['engineering', 'news'], published: true } ]);

    // Careers
    await Career.deleteMany({});
    await Career.create([ { title: 'Mechanical Design Engineer', description: 'Join our team...', location: 'Pune, India', type: 'Full-time', requirements: ['B.E./B.Tech', '2+ years'], active: true } ]);

    console.log('Seeding complete!');
  } catch (err) {
    console.error('Seeding failed:', err);
  } finally {
    await mongoose.disconnect();
  }
}

seed();

 
