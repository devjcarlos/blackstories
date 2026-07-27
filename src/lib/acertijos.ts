const MARCADOR_SOLUCION = "<!-- SOLUCIÓN -->";

/**
 * Convierte un fragmento de markdown "de prosa simple" (párrafos, **negrita**,
 * *cursiva*) a HTML. Los enigmas se escriben en prosa corta, así que no hace
 * falta arrastrar un motor de markdown completo solo para dos párrafos.
 */
function prosaAHtml(md: string): string {
  const parrafos = md
    .trim()
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return parrafos
    .map((p) => {
      const inline = p
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.+?)\*/g, "<em>$1</em>")
        .replace(/\n/g, "<br />");
      return `<p>${inline}</p>`;
    })
    .join("\n");
}

export interface CuerpoAcertijo {
  enunciadoHtml: string;
  solucionHtml: string;
}

/** Separa el body de un acertijo en enunciado (visible) y solución (oculta). */
export function partirCuerpo(body: string): CuerpoAcertijo {
  const partes = body.split(MARCADOR_SOLUCION);
  const enunciado = partes[0] ?? "";
  const solucion = partes[1] ?? "";

  return {
    enunciadoHtml: prosaAHtml(enunciado),
    solucionHtml: prosaAHtml(solucion),
  };
}

export const CATEGORIA_INFO: Record<
  string,
  { label: string; descripcion: string; icono: string }
> = {
  oscuro: {
    label: "Oscuro",
    descripcion: "Muertes, crímenes y giros perturbadores.",
    icono: "luna",
  },
  surreal: {
    label: "Surreal",
    descripcion: "Lógicas imposibles y situaciones de otro mundo.",
    icono: "espiral",
  },
  humor: {
    label: "Humor",
    descripcion: "El absurdo que da risa, no miedo.",
    icono: "mascara",
  },
  clasico: {
    label: "Clásico",
    descripcion: "Los enigmas de toda la vida, pulidos.",
    icono: "libro",
  },
  historico: {
    label: "Histórico",
    descripcion: "Ambientados en otras épocas.",
    icono: "corona",
  },
  cortito: {
    label: "Cortito",
    descripcion: "Para calentar motores, resolución rápida.",
    icono: "rayo",
  },
};
