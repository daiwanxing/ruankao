import sharp from 'sharp';
import { readFileSync } from 'fs';

const svgBuffer = readFileSync('./public/favicon.svg');

// 生成标准图标（透明背景）
async function generateStandardIcons() {
  // 192x192
  await sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toFile('./public/pwa-icons/icon-192x192.png');
  console.log('✓ Generated icon-192x192.png');

  // 512x512
  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile('./public/pwa-icons/icon-512x512.png');
  console.log('✓ Generated icon-512x512.png');

  // 180x180 for Apple
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile('./public/pwa-icons/apple-touch-icon.png');
  console.log('✓ Generated apple-touch-icon.png');
}

// 生成 Maskable 图标（带背景色）
async function generateMaskableIcons() {
  const backgroundColor = '#1e293b'; // 项目主题色

  // 192x192 maskable (图标占中心 40%)
  await sharp({
    create: {
      width: 192,
      height: 192,
      channels: 4,
      background: backgroundColor
    }
  })
  .composite([{
    input: await sharp(svgBuffer).resize(77, 77).toBuffer(), // 40% of 192
    top: Math.floor((192 - 77) / 2),
    left: Math.floor((192 - 77) / 2)
  }])
  .png()
  .toFile('./public/pwa-icons/icon-192x192-maskable.png');
  console.log('✓ Generated icon-192x192-maskable.png');

  // 512x512 maskable (图标占中心 40%)
  await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: backgroundColor
    }
  })
  .composite([{
    input: await sharp(svgBuffer).resize(205, 205).toBuffer(), // 40% of 512
    top: Math.floor((512 - 205) / 2),
    left: Math.floor((512 - 205) / 2)
  }])
  .png()
  .toFile('./public/pwa-icons/icon-512x512-maskable.png');
  console.log('✓ Generated icon-512x512-maskable.png');
}

console.log('开始生成 PWA 图标...\n');

try {
  await generateStandardIcons();
  await generateMaskableIcons();
  console.log('\n✅ 所有图标生成成功！');
} catch (error) {
  console.error('❌ 生成图标时出错:', error);
  process.exit(1);
}
