import { readdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, extname } from 'node:path';

const OUTPUT_DIRS = [
  '.vercel/output/static',
  'dist',
];

function findOutputDir() {
  for (const dir of OUTPUT_DIRS) {
    if (existsSync(dir)) return dir;
  }
  return OUTPUT_DIRS[0];
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else if (entry.isFile() && extname(entry.name) === '.html') {
      files.push(fullPath);
    }
  }
  return files;
}

async function deferAstroCss(filePath) {
  const html = await readFile(filePath, 'utf-8');

  // Substitui <link rel="stylesheet" href="/_astro/style.HASH.css">
  // por preload + stylesheet assíncrono (media="print" onload)
  const updated = html.replace(
    /<link\s+rel="stylesheet"\s+href="(\/_astro\/style\.[^"]+\.css)"\s*\/?>/g,
    (_, href) => {
      return `<link rel="preload" href="${href}" as="style">` +
             `<link rel="stylesheet" href="${href}" media="print" onload="this.media='all'; this.onload=null;">` +
             `<noscript><link rel="stylesheet" href="${href}"></noscript>`;
    }
  );

  if (updated !== html) {
    await writeFile(filePath, updated, 'utf-8');
    console.log(`✓ ${filePath}`);
  }
}

async function main() {
  const OUTPUT_DIR = findOutputDir();
  console.log(`Output directory: ${OUTPUT_DIR}`);

  if (!existsSync(OUTPUT_DIR)) {
    console.error(`Output directory not found: ${OUTPUT_DIR}`);
    process.exit(1);
  }

  const files = await walk(OUTPUT_DIR);
  console.log(`Processing ${files.length} HTML files...`);

  if (files.length === 0) {
    console.error('No HTML files found to process.');
    process.exit(1);
  }

  await Promise.all(files.map(deferAstroCss));
  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
