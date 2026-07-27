# Historias Negras

Versión digital del juego de enigmas tipo **Black Stories**: acertijos absurdos, oscuros, surrealistas y cómicos para jugar en grupo respondiendo solo **sí o no**.

## Cómo se juega

1. Un jugador hace de **Game Master** y abre un enigma. Solo lee el enunciado, no la solución.
2. El resto del grupo hace preguntas cerradas (sí/no).
3. Cuando el grupo cree tenerlo, alguien narra la solución completa. Gana quien se acerque más.

## Stack técnico

- **Astro 7** — SSG, View Transitions (ClientRouter), Content Collections con Zod
- **Tailwind CSS v4** — utilidades base; sistema de color vía CSS custom properties nativas
- **Tipografía**: Playfair Display (headlines) · Syne (labels) · Crimson Pro (texto de acertijos) · Inter (UI pequeña)
- **PWA** vía `@vite-pwa/astro` — funciona offline, instalable en móvil
- **Deploy** en Vercel (estático)

## Cómo correr localmente

```bash
pnpm install
pnpm dev
```

Página de desarrollo en `http://localhost:4322`.

## Cómo desplegar

```bash
pnpm build
pnpm preview  # o hacer deploy directo desde el repo en Vercel
```

## Generar ilustraciones

Cada acertijo trae un placeholder por categoría. Para generar ilustraciones reales:

1. Consulta `docs/prompts-ilustraciones.md` para el prompt de cada acertijo.
2. Genera con tu herramienta de IA favorita.
3. Deja el resultado en `public/images/acertijos/` con el mismo nombre que el placeholder.

Prompt base:
> thick black curved line illustration, bold outlines, simple flat shapes,
> modern editorial style, white background, no shading, clean and friendly,
> [escena del acertijo]
