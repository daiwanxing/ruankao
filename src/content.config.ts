import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const docs = defineCollection({
  loader: glob({
    base: './src/content/docs',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    sidebar: z
      .object({
        order: z.number().optional(),
        badge: z
          .object({
            text: z.string(),
            variant: z.enum(['tip', 'note', 'important', 'new', 'success', 'danger']).optional(),
          })
          .optional(),
      })
      .optional(),
  }),
});

export const collections = { docs };
