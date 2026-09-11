export type ProcessStep = {
  number: string;
  title: string;
  paragraphs: string[];
  highlight?: string;
  after?: string[];
  variant?: "default" | "reward";
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Elige una misión",
    paragraphs: [
      "Selecciona una misión y cuéntanos brevemente tu idea.",
      "No grabes nada todavía.",
    ],
  },
  {
    number: "02",
    title: "Revisamos tu perfil",
    paragraphs: [
      "Revisamos tu perfil, tu audiencia y tu propuesta.",
      "Si encaja:",
    ],
    highlight: "CREATOR APPROVED 🧡",
  },
  {
    number: "03",
    title: "Confirmamos tu colaboración",
    paragraphs: [
      "Confirmamos contigo la misión, el contenido, las condiciones de publicación, tu método de pago y tu recompensa de 100 €.",
      "El acuerdo de colaboración queda aceptado por ambas partes antes de empezar.",
    ],
    highlight: "TU COLABORACIÓN ESTÁ CONFIRMADA ✓",
  },
  {
    number: "04",
    title: "Crea y sube tu contenido",
    paragraphs: [
      "Ahora sí.",
      "Crea el Reel o TikTok siguiendo el brief acordado y súbelo a tu espacio de creator para revisión.",
    ],
  },
  {
    number: "05",
    title: "Lo aprobamos",
    paragraphs: ["Revisamos el contenido.", "Si está todo correcto:"],
    highlight: "APPROVED TO POST 🚀",
    after: [
      "Si necesitamos algún pequeño cambio, te lo indicaremos antes de publicar.",
    ],
  },
  {
    number: "06",
    title: "Publícalo en tu perfil",
    paragraphs: [
      "Publica el contenido aprobado en tu propio Instagram o TikTok y envíanos el enlace.",
    ],
  },
  {
    number: "07",
    title: "Verificamos",
    paragraphs: [
      "Comprobamos que el contenido aprobado está publicado correctamente.",
    ],
    highlight: "POST VERIFIED ✓",
  },
  {
    number: "08",
    title: "Cobra",
    paragraphs: [],
    highlight: "POST VERIFIED → 100 € RELEASED 💸",
    after: ["Tu recompensa se libera según el método de pago acordado."],
    variant: "reward",
  },
];
