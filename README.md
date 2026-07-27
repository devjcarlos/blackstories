# Historias Negras

Versión digital de los enigmas de deducción tipo *Black Stories*: alguien hace de
Game Master y guarda en secreto la solución de un enigma absurdo; el resto del
grupo la reconstruye haciendo solo preguntas de sí o no.

## Stack

- [Astro 7](https://astro.build) — SSG, Content Collections con Zod, View Transitions (`ClientRouter`)
- [Tailwind CSS v4](https://tailwindcss.com) — reset/utilidades base; el sistema de color y tipografía va por CSS custom properties propias (ver `src/styles/global.css`)
- Fuentes autoalojadas vía `@fontsource` (Playfair Display, Syne, Crimson Pro, Inter)
- PWA vía `@vite-pwa/astro` — offline básico, instalable en móvil
- Adapter de despliegue: `@astrojs/vercel` (salida estática)

## Desarrollo

```bash
pnpm install
pnpm dev       # http://localhost:4321
pnpm check     # typecheck de Astro
pnpm build     # build de producción en dist/ y .vercel/output
pnpm preview   # sirve el build de producción
```

## Contenido

Los acertijos viven en `src/content/acertijos/*.md`. El frontmatter sigue el
schema de `src/content.config.ts`:

```yaml
title: "Título del acertijo"
dificultad: 1-5
categoria: oscuro | surreal | humor | clasico | historico | cortito
tiempoEstimado: minutos (número)
imagen: ruta a la imagen (public/ o import de src/assets)
tags: ["tag1", "tag2"]
destacado: true | false
```

El cuerpo del markdown lleva el enunciado, seguido del marcador
`<!-- SOLUCIÓN -->`, y después el texto de la solución. `src/lib/acertijos.ts`
se encarga de separar ambas partes y renderizarlas.

Las ilustraciones reales todavía no existen: cada acertijo usa un placeholder
por categoría en `public/images/acertijos/`. Los prompts de generación por
acertijo están en `docs/prompts-ilustraciones.md`.

## Estructura de páginas

| Ruta | Descripción |
| --- | --- |
| `/` | Landing editorial |
| `/jugar` | Grid de acertijos con filtro por categoría y botón aleatorio |
| `/acertijos/[slug]` | Página de juego individual, con mecánica de revelar solución para el Game Master |
| `/como-jugar` | Reglas del juego |
