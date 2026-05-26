import { posts } from '@/lib/posts';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://myaijourney.org';

  const blogPosts = posts.flatMap((post) => [
    { url: `${baseUrl}/blog/${post.slug}`, lastModified: new Date(post.publishedAt), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/es/blog/${post.slug}`, lastModified: new Date(post.publishedAt), changeFrequency: 'monthly' as const, priority: 0.7 },
  ]);

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/es`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/es/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/best-ai-tools`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/disclaimer`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    ...blogPosts,
  ];
}

