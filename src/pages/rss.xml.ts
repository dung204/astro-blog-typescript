import type { APIContext } from 'astro';
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts');

  return rss({
    title: 'Mantrilogix | Blog',
    description: 'My journey learning Astro',
    site: context.site || 'localhost:4321',
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: '<language>en-us</language>',
  });
}
