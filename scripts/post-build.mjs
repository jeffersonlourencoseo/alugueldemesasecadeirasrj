import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';

const OUTPUT_DIR = '.vercel/output/static';

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
  const files = await walk(OUTPUT_DIR);
  console.log(`Processing ${files.length} HTML files...`);
  await Promise.all(files.map(deferAstroCss));
  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
