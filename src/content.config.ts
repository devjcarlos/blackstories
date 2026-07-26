import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const acertijosCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/acertijos' }),
  schema: z.object({
    title: z.string(),
    dificultad: z.number().min(1).max(5),
    categoria: z.enum(['clasico', 'oscuro', 'humor', 'historico', 'cortito']),
    tiempoEstimado: z.number(),
    imagen: z.string().optional(),
    tags: z.array(z.string()).default([]),
    destacado: z.boolean().default(false),
  }),
});

export const collections = {
  acertijos: acertijosCollection,
};
