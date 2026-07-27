import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const CATEGORIAS = [
  "oscuro",
  "surreal",
  "humor",
  "clasico",
  "historico",
  "cortito",
] as const;

const acertijos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/acertijos" }),
  schema: z.object({
    title: z.string(),
    dificultad: z.number().int().min(1).max(5),
    categoria: z.enum(CATEGORIAS),
    tiempoEstimado: z.number().int().positive(),
    imagen: z.string(),
    tags: z.array(z.string()).default([]),
    destacado: z.boolean().default(false),
  }),
});

export const collections = { acertijos };
export { CATEGORIAS };
