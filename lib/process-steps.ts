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
    paragraphs: ["Cuéntanos brevemente tu idea. No grabes nada todavía."],
  },
  {
    number: "02",
    title: "Revisamos tu perfil",
    paragraphs: ["Si encaja:"],
    highlight: "CREATOR APPROVED 🧡",
  },
  {
    number: "03",
    title: "Confirmamos tu colaboración",
    paragraphs: [
      "Acordamos la misión, el contenido, las condiciones de publicación y tu recompensa antes de empezar.",
      "Firmamos un acuerdo antes de que empieces a crear.",
    ],
    highlight: "TU COLABORACIÓN ESTÁ CONFIRMADA ✓",
  },
  {
    number: "04",
    title: "Crea y sube tu contenido",
    paragraphs: [
      "Graba el Reel o TikTok siguiendo el brief acordado y súbelo para revisión.",
    ],
  },
  {
    number: "05",
    title: "Lo aprobamos",
    paragraphs: ["Si está todo correcto:"],
    highlight: "APPROVED TO POST 🚀",
    after: ["Si hace falta algún ajuste, te lo indicamos antes de publicar."],
  },
  {
    number: "06",
    title: "Publícalo en tu perfil",
    paragraphs: [
      "Publica el contenido aprobado en tu Instagram o TikTok y envíanos el enlace.",
    ],
  },
  {
    number: "07",
    title: "Verificamos",
    paragraphs: [],
    highlight: "POST VERIFIED ✓",
  },
  {
    number: "08",
    title: "Cobra",
    paragraphs: [],
    highlight: "POST VERIFIED ✓ → REWARD RELEASED 💸",
    after: ["Tu recompensa se libera según el método de pago acordado."],
    variant: "reward",
  },
];
