import sharp from "sharp";
import { readdirSync, mkdirSync, copyFileSync, statSync } from "node:fs";
import { join, extname, basename } from "node:path";

const SRC_DIR = join(process.cwd(), "image");
const OUT_DIR = join(process.cwd(), "public", "images");
const MAX_BYTES = 200 * 1024;
const MAX_WIDTH = 1600;

mkdirSync(OUT_DIR, { recursive: true });

const files = readdirSync(SRC_DIR);

for (const file of files) {
  const ext = extname(file).toLowerCase();
  const srcPath = join(SRC_DIR, file);
  const name = basename(file, ext);

  if (ext === ".svg") {
    copyFileSync(srcPath, join(OUT_DIR, `${name}.svg`));
    console.log(`copied  ${name}.svg`);
    continue;
  }

  if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") continue;

  const outPath = join(OUT_DIR, `${name}.webp`);
  let quality = 80;
  let width = MAX_WIDTH;
  let buffer = await sharp(srcPath)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toBuffer();

  while (buffer.length > MAX_BYTES && quality > 30) {
    quality -= 10;
    buffer = await sharp(srcPath)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality })
      .toBuffer();
  }

  while (buffer.length > MAX_BYTES && width > 640) {
    width -= 200;
    buffer = await sharp(srcPath)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality })
      .toBuffer();
  }

  await sharp(buffer).toFile(outPath);
  const kb = (buffer.length / 1024).toFixed(1);
  console.log(`compressed ${name}.webp  ${kb}kb  q${quality}`);
}

console.log("done");
