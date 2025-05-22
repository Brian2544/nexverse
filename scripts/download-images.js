import fs from 'fs';
import path from 'path';
import https from 'https';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = {
  strategy: [
    {
      url: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
      filename: 'business-strategy.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      filename: 'market-analysis.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1551434678-e076c223a692',
      filename: 'digital-transformation.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      filename: 'growth-strategy.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1553877522-43269d4ea984',
      filename: 'case-study-1.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
      filename: 'case-study-2.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
      filename: 'case-study-3.jpg'
    }
  ]
};

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const chunks = [];
        response.on('data', (chunk) => chunks.push(chunk));
        response.on('end', () => {
          const buffer = Buffer.concat(chunks);
          resolve(buffer);
        });
      } else {
        reject(new Error(`Failed to download ${url}`));
      }
    }).on('error', reject);
  });
};

const optimizeImage = async (buffer, outputPath) => {
  await sharp(buffer)
    .resize(1200, 800, { fit: 'cover' })
    .jpeg({ quality: 80 })
    .toFile(outputPath);
};

const main = async () => {
  const baseDir = path.join(__dirname, '../public/assets/images');
  
  // Create directories if they don't exist
  Object.keys(images).forEach(dir => {
    const dirPath = path.join(baseDir, dir);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  });

  // Download and optimize images
  for (const [category, imageList] of Object.entries(images)) {
    for (const image of imageList) {
      try {
        console.log(`Downloading ${image.filename}...`);
        const buffer = await downloadImage(image.url, image.filename);
        const outputPath = path.join(baseDir, category, image.filename);
        await optimizeImage(buffer, outputPath);
        console.log(`Optimized ${image.filename}`);
      } catch (error) {
        console.error(`Error processing ${image.filename}:`, error);
      }
    }
  }
};

main().catch(console.error); 