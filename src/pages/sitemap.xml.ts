import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE_CONFIG } from '../data/config';

const { domain } = SITE_CONFIG;

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export const GET: APIRoute = async () => {
  const pages = [
    '',
    'sobre/',
    'servicos/',
    'blog/',
    'contato/',
    'privacidade/',
    'termos/',
  ];

  const blogPosts = await getCollection('blog');
  const servicos = await getCollection('servicos');

  const urls = pages.map((path) => {
    const url = path === '' ? domain : `${domain}/${path}`;
    return `  <url>
    <loc>${escapeXml(url)}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${path === '' ? '1.0' : '0.8'}</priority>
  </url>`;
  });

  for (const post of blogPosts) {
    const url = `${domain}/blog/${post.slug}/`;
    const date = post.data.updatedDate?.toISOString().split('T')[0] ?? post.data.pubDate.toISOString().split('T')[0];
    urls.push(`  <url>
    <loc>${escapeXml(url)}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`);
  }

  for (const servico of servicos) {
    const url = `${domain}/servicos/${servico.slug}/`;
    urls.push(`  <url>
    <loc>${escapeXml(url)}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`);
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
