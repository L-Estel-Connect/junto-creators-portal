export type Mission = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  reward: string;
  format: string;
  ctaLabel: string;
  gradient: string;
  badge?: string;
  featured?: boolean;
};

export const missions: Mission[] = [
  {
    id: "send-single-friend",
    number: "01",
    title: "SEND THIS TO YOUR SINGLE FRIEND",
    subtitle: "Todos tenemos ese amigo soltero.",
    description: `El que tiene las mejores historias de citas.
El que está cansado de las dating apps.
El que nunca iría solo a conocer gente.
O el que claramente debería probar Junto contigo.

Hazlo meme, POV, sketch, conversación o cualquier formato que funcione contigo.`,
    reward: "50 €",
    format: "Reel / TikTok",
    ctaLabel: "ELEGIR ESTA MISIÓN",
    gradient: "from-coral to-tangerine",
    badge: "SIMPLE POV · NO VOICE REQUIRED",
  },
  {
    id: "wtf-group-dating",
    number: "02",
    title: "WTF IS GROUP DATING?",
    subtitle: "Presenta el group dating a tu manera.",
    description: `¿Qué pasa cuando, en lugar de tener una cita solo/a, sales con tus amigos y conocéis a otro grupo?

Explícalo, interprétalo o conviértelo en contenido.

POV, humor, storytelling, conversación entre amigos…

Tu estilo. Tu audiencia.`,
    reward: "100 €",
    format: "Reel / TikTok",
    ctaLabel: "ELEGIR ESTA MISIÓN",
    gradient: "from-tangerine to-biscuit",
  },
  {
    id: "dating-but-social",
    number: "03",
    title: "DATING, BUT MAKE IT SOCIAL",
    subtitle: "Tu visión sobre el dating moderno.",
    description: `Ghosting.
Red flags.
Dating fatigue.
First dates.
Dating apps.
Historias imposibles.

Parte de algo que tu audiencia reconozca y presenta otra manera de conocer gente:

con tus amigos.

Storytime, humor, POV, sketch o tu propio formato.`,
    reward: "150 €",
    format: "Reel / TikTok",
    ctaLabel: "ELEGIR ESTA MISIÓN",
    gradient: "from-biscuit to-wax",
  },
  {
    id: "we-tried-junto",
    number: "04",
    title: "WE TRIED JUNTO",
    subtitle: "Vive la experiencia completa.",
    description: `Prueba Junto de verdad con tus amigos.

Crea vuestro grupo, conecta con otro grupo y queda IRL. Convierte la experiencia — desde el match hasta el plan — en un Reel/TikTok auténtico.`,
    reward: "250 €",
    format: "Reel / TikTok",
    ctaLabel: "ELEGIR ESTA MISIÓN",
    gradient: "from-coral to-wax",
    badge: "EXPERIENCIA REAL",
    featured: true,
  },
  {
    id: "your-idea",
    number: "05",
    title: "YOUR IDEA",
    subtitle: "Sorpréndenos.",
    description: `¿Tienes una idea mejor?

Queremos verla.

Puede ser un trend, un sketch, una historia, un experimento social, una conversación, un formato recurrente de tu perfil o algo completamente nuevo.

Solo hay una condición:

Tiene que sentirse como contenido tuyo.`,
    reward: "A convenir",
    format: "Reel / TikTok",
    ctaLabel: "PROPONER MI IDEA",
    gradient: "from-tangerine to-coral",
  },
];
