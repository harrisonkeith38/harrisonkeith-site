// Draws public/og.png (1200x630): headshot beside the HK lockup. Run: node scripts/og-image.mjs
import sharp from 'sharp';

const photo = await sharp('public/images/harrison-keith.jpg').resize(504, 630, { fit: 'cover' }).grayscale().toBuffer();
const lockup = await sharp('public/brand/hk-lockup.png').resize({ width: 540 }).toBuffer();
const { height } = await sharp(lockup).metadata();

await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#F4F4F4' } })
  .composite([
    { input: photo, left: 0, top: 0 },
    { input: lockup, left: 504 + Math.round((696 - 540) / 2), top: Math.round((630 - height) / 2) },
  ])
  .png()
  .toFile('public/og.png');
