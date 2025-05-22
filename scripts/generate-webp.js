const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '../public/assets/images');
const QUALITY = 80;

async function convertToWebP(filePath) {
  const fileName = path.basename(filePath);
  const outputPath = path.join(
    IMAGES_DIR,
    'webp',
    fileName.replace(/\.(jpg|jpeg|png)$/, '.webp')
  );

  // Create webp directory if it doesn't exist
  if (!fs.existsSync(path.join(IMAGES_DIR, 'webp'))) {
    fs.mkdirSync(path.join(IMAGES_DIR, 'webp'), { recursive: true });
  }

  try {
    await sharp(filePath)
      .webp({ quality: QUALITY })
      .toFile(outputPath);
    console.log(`Converted ${fileName} to WebP`);
  } catch (error) {
    console.error(`Error converting ${fileName}:`, error);
  }
}

async function processImages() {
  const files = fs.readdirSync(IMAGES_DIR);
  
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      await convertToWebP(path.join(IMAGES_DIR, file));
    }
  }
}

processImages().catch(console.error); 