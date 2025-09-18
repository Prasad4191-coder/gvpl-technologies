import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Service from '../models/service.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..', '..');
const SERVICES_DIR = path.resolve(projectRoot, 'src/pages/Services');

function parseServiceFile(source, fallbackName) {
  const heroMatch = source.match(/const\s+hero\s*=\s*\{[\s\S]*?image:\s*'([^']+)'[\s\S]*?title:\s*'([^']+)'[\s\S]*?subtitle:\s*'([^']*)'[\s\S]*?\}/);
  const features = [];
  const featureRegex = /\{\s*title:\s*'([^']+)'[\s\S]*?image:\s*'([^']+)'[\s\S]*?bullets:\s*\[([\s\S]*?)\][\s\S]*?\}/g;
  let m;
  while ((m = featureRegex.exec(source)) !== null) {
    const title = m[1];
    const image = m[2];
    const bulletsRaw = m[3];
    const bullets = Array.from(bulletsRaw.matchAll(/'([^']+)'/g)).map(b => b[1]);
    features.push({ title, image, bullets });
  }
  const benefitsMatch = source.match(/const\s+benefits\s*=\s*\{[\s\S]*?title:\s*'([^']+)'[\s\S]*?benefits:\s*\[([\s\S]*?)\][\s\S]*?image:\s*'([^']+)'[\s\S]*?\}/);
  return {
    name: fallbackName,
    hero: heroMatch ? { image: heroMatch[1], title: heroMatch[2], subtitle: heroMatch[3] } : { image: '', title: fallbackName, subtitle: '' },
    intro: [],
    features,
    benefits: benefitsMatch ? { title: benefitsMatch[1], benefits: [], image: benefitsMatch[3] } : undefined,
  };
}

async function run() {
  const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/gvpl';
  await mongoose.connect(mongoUri);
  console.log('Connected to MongoDB');

  const files = fs.readdirSync(SERVICES_DIR).filter(f => f.endsWith('.tsx'));
  for (const file of files) {
    const name = path.basename(file, '.tsx').toUpperCase();
    const source = fs.readFileSync(path.join(SERVICES_DIR, file), 'utf8');
    const svc = parseServiceFile(source, name);
    await Service.findOneAndUpdate(
      { name: svc.name },
      svc,
      { upsert: true, new: true }
    );
    console.log('Upserted service:', svc.name);
  }

  await mongoose.disconnect();
  console.log('Service import complete');
}

run().catch(err => { console.error(err); process.exit(1); });


