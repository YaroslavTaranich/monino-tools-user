import type { MetadataRoute } from 'next';

const HOST = process.env.HOST || '';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${HOST}sitemap.xml`,
  };
}
