# Prompts de ilustración por acertijo

Cada acertijo usa hoy un placeholder simple en `public/images/acertijos/placeholder-<categoria>.svg`
(un icono de línea gruesa sobre el color de acento de su categoría) mientras no exista la
ilustración final. Cuando generes las imágenes reales con IA, usa el prompt base del proyecto
más la escena específica de cada enigma, y guarda el resultado en
`src/assets/acertijos/<slug>.png` (o `.jpg`), actualizando el campo `imagen` del frontmatter
del `.md` correspondiente para que apunte al nuevo archivo.

## Prompt base

```
thick black curved line illustration, bold outlines,
simple flat shapes, modern editorial style,
white background, no shading, clean and friendly,
[escena del acertijo]
```

## Por acertijo

### `el-violinista-sin-publico` (oscuro)
**Escena:** a violinist standing on a dim stage, eyes closed, playing mid-note, rows of
silent seated silhouettes in the dark facing him, one single spotlight overhead.
```
thick black curved line illustration, bold outlines, simple flat shapes, modern
editorial style, white background, no shading, clean and friendly, a lone violinist
standing on a stage under a single spotlight, playing with eyes closed, rows of
silent audience silhouettes seated in the dark
```

### `la-ciudad-que-caminaba-hacia-atras` (surreal)
**Escena:** a small town street where people walk backwards past cameras and film
lights on tripods, one clapperboard in the foreground.
```
thick black curved line illustration, bold outlines, simple flat shapes, modern
editorial style, white background, no shading, clean and friendly, a village street
where people walk backwards past film cameras and tripods, a clapperboard in the
foreground, surreal calm mood
```

### `el-pastel-equivocado` (humor)
**Escena:** a wedding-style cake with a name written in icing crossed out and
corrected, a baker peeking from behind, a small heart doodle nearby.
```
thick black curved line illustration, bold outlines, simple flat shapes, modern
editorial style, white background, no shading, clean and friendly, a round cake
with a misspelled name in icing, a baker peeking from behind with a surprised
smile, small heart doodle nearby
```

### `el-globo-sobre-el-desierto` (clasico)
**Escena:** a hot air balloon losing height over dunes, three tiny passenger
silhouettes in the basket, one match falling through the air.
```
thick black curved line illustration, bold outlines, simple flat shapes, modern
editorial style, white background, no shading, clean and friendly, a hot air
balloon descending low over desert dunes, three passenger silhouettes in the
basket, a single falling matchstick in the air
```

### `el-ultimo-banquete-del-rey` (historico)
**Escena:** a medieval banquet table full of untouched food, an empty ornate
chair at the head of the table, a crown resting on the table instead of a head.
```
thick black curved line illustration, bold outlines, simple flat shapes, modern
editorial style, white background, no shading, clean and friendly, a medieval
banquet table full of untouched food, an empty ornate chair at the head, a crown
resting on the table
```

### `la-apuesta-que-gano-perdiendo` (cortito)
**Escena:** a chessboard mid-game seen from above, one king tipped over, a hand
shaking another hand off to the side.
```
thick black curved line illustration, bold outlines, simple flat shapes, modern
editorial style, white background, no shading, clean and friendly, a chessboard
seen from above with a tipped-over king, two hands shaking off to the side
```

## Notas de estilo para mantener coherencia

- Trazo negro grueso (4–6% del ancho del lienzo), sin degradados ni sombreado.
- Formas simples y redondeadas; evitar detalle fotográfico o texturas.
- Un único color plano de fondo por ilustración (puede coincidir con el acento de
  la categoría: ver `--acento-suave` en `src/styles/global.css`), nunca fondo blanco puro.
- Encuadre 4:3, protagonista centrado, sin texto dentro de la imagen.
