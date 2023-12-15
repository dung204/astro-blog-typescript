import type { APIContext } from 'astro';
import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context: APIContext) {
  return rss({
    title: 'Mantrilogix | Blog',
    description: 'My journey learning Astro',
    site: context.site || 'localhost:4321',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: '<language>en-us</language>',
  });
}
