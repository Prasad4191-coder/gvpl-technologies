import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Industry from '../models/industry.js';

dotenv.config();

const FRONTEND_INDUSTRIES_PATH = path.resolve(process.cwd(), '../src/data/industries.ts');

function extractIndustries(tsSource) {
  const items = [];
  // Rough parse: find blocks that contain slug: '...', title: '...', and hero: { image: '...' }
  const objectRegex = /\{[\s\S]*?slug:\s*'([^']+)'[\s\S]*?title:\s*'([^']+)'[\s\S]*?hero:\s*\{[\s\S]*?image:\s*'([^']+)'[\s\S]*?\}[\s\S]*?\}/g;
  let match;
  while ((match = objectRegex.exec(tsSource)) !== null) {
    const slug = match[1];
    const title = match[2];
    const image = match[3];
    items.push({ slug, name: title, image });
  }
  return items;
}

async function run() {
  const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/gvpl';
  await mongoose.connect(mongoUri);
  console.log('Connected to MongoDB');

  const tsSource = fs.readFileSync(FRONTEND_INDUSTRIES_PATH, 'utf8');
  const parsed = extractIndustries(tsSource);
  if (parsed.length === 0) {
    console.error('No industries parsed from src/data/industries.ts');
    process.exit(1);
  }

  for (const it of parsed) {
    await Industry.findOneAndUpdate(
      { slug: it.slug },
      { name: it.name, image: it.image, slug: it.slug },
      { upsert: true, new: true }
    );
    console.log('Upserted industry:', it.slug);
  }

  await mongoose.disconnect();
  console.log('Import complete');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});


