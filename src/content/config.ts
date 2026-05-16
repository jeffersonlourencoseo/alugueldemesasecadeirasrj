import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const servicosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.string().optional(),
    features: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  servicos: servicosCollection,
};
