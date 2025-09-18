import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import HomeContent from '../models/homeContent.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..', '..');
const HOME_HERO_PATH = path.resolve(projectRoot, 'src/pages/Home/Hero.tsx');
const HOME_SERVICES_PATH = path.resolve(projectRoot, 'src/pages/Home/Services.tsx');
const HOME_INDUSTRIES_PATH = path.resolve(projectRoot, 'src/pages/Home/Industries.tsx');
const CONTACT_PATH = path.resolve(projectRoot, 'src/pages/Contact/Contact.tsx');

function parseHero(tsSource) {
  // Extract slides array entries with title/description/image
  const slidesBlock = tsSource.match(/const\s+slides\s*=\s*\[([\s\S]*?)\];/);
  if (!slidesBlock) return [];
  const itemRegex = /\{\s*title:\s*"([^"]*)"[\s\S]*?description:\s*"([^"]*)"[\s\S]*?image:\s*([A-Za-z0-9_]+)/g;
  const items = [];
  let m;
  while ((m = itemRegex.exec(slidesBlock[1])) !== null) {
    const title = m[1];
    const description = m[2];
    // We cannot resolve imported image variable to URL; store variable name as placeholder
    const image = m[3];
    items.push({ title, description, image });
  }
  return items;
}

function parseContact(tsSource) {
  const emailMatch = tsSource.match(/mailto:([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/);
  const addressMatch = tsSource.match(/>Office[^<]+<\/span>|>([^<]*Platinum[^<]*)<\//i);
  const phones = [];
  const phoneRegex = /tel:\+?(\d+)/g;
  let p;
  while ((p = phoneRegex.exec(tsSource)) !== null) {
    phones.push({ role: '', number: `+${p[1]}` });
  }
  return {
    email: emailMatch ? emailMatch[1] : '',
    address: addressMatch ? addressMatch[0].replace(/[<>]/g, '').replace(/^(>)/, '').replace(/<.*/, '') : '',
    phones,
  };
}

function parseHomeServices(tsSource) {
  const block = tsSource.match(/const\s+services\s*=\s*\[([\s\S]*?)\];/);
  if (!block) return [];
  const itemRegex = /\{\s*title:\s*"([^"]+)"[\s\S]*?description:\s*"([\s\S]*?)"[\s\S]*?image:\s*("[^"]+"|[A-Za-z0-9_]+)/g;
  const items = [];
  let m;
  while ((m = itemRegex.exec(block[1])) !== null) {
    const title = m[1];
    const description = m[2];
    const image = m[3].replace(/(^"|"$)/g, '');
    items.push({ title, description, image });
  }
  return items;
}

function parseHomeIndustries(tsSource) {
  const block = tsSource.match(/const\s+industries\s*=\s*\[([\s\S]*?)\];/);
  if (!block) return [];
  const itemRegex = /\{\s*icon:\s*'([^']+)'[\s\S]*?title:\s*'([^']+)'[\s\S]*?description:\s*'([^']+)'/g;
  const items = [];
  let m;
  while ((m = itemRegex.exec(block[1])) !== null) {
    items.push({ image: m[1], title: m[2], description: m[3] });
  }
  return items;
}

async function run() {
  const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/gvpl';
  await mongoose.connect(mongoUri);
  console.log('Connected to MongoDB');

  const heroSrc = fs.readFileSync(HOME_HERO_PATH, 'utf8');
  const slides = parseHero(heroSrc).map(s => ({ title: s.title, description: s.description, image: s.image }));

  const contactSrc = fs.readFileSync(CONTACT_PATH, 'utf8');
  const contact = parseContact(contactSrc);
  const servicesSrc = fs.readFileSync(HOME_SERVICES_PATH, 'utf8');
  const homeServices = parseHomeServices(servicesSrc);
  const industriesSrc = fs.readFileSync(HOME_INDUSTRIES_PATH, 'utf8');
  const homeIndustries = parseHomeIndustries(industriesSrc);

  const update = {
    ...(slides.length ? { heroSlides: slides } : {}),
    contactInfo: {
      email: contact.email,
      address: contact.address,
      phones: contact.phones,
      mapEmbed: ''
    },
    services: homeServices.map(s => ({ title: s.title, description: s.description, image: s.image })),
    industries: homeIndustries.map(i => ({ title: i.title, description: i.description, image: i.image })),
  };

  const doc = await HomeContent.findOneAndUpdate({}, update, { upsert: true, new: true });
  console.log('Home content upserted:', doc?._id?.toString());

  await mongoose.disconnect();
  console.log('Home import complete');
}

run().catch(err => { console.error(err); process.exit(1); });


