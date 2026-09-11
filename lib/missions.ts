export type Mission = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  reward: string;
  effort: "Quick" | "Medium" | "Featured";
  gradient: string;
};

export const missions: Mission[] = [
  {
    id: "welcome",
    number: "01",
    title: "Say Hello",
    tagline: "Introduce yourself",
    description:
      "Post a short intro Reel telling your community why you joined the Junto Creator Program.",
    reward: "50 Junto Points",
    effort: "Quick",
    gradient: "from-coral to-tangerine",
  },
  {
    id: "spotlight",
    number: "02",
    title: "Content Spotlight",
    tagline: "Show your best work",
    description:
      "Share your favorite piece of content using the #JuntoCreator tag for a chance to be featured.",
    reward: "120 Junto Points",
    effort: "Medium",
    gradient: "from-tangerine to-biscuit",
  },
  {
    id: "community-boost",
    number: "03",
    title: "Community Boost",
    tagline: "Bring your people",
    description:
      "Tag three creator friends who should join you on Junto and start their own missions.",
    reward: "80 Junto Points",
    effort: "Quick",
    gradient: "from-biscuit to-wax",
  },
  {
    id: "style-challenge",
    number: "04",
    title: "Style Challenge",
    tagline: "Make it yours",
    description:
      "Put your own spin on this month's creative prompt and share it with your audience.",
    reward: "150 Junto Points",
    effort: "Featured",
    gradient: "from-coral to-wax",
  },
  {
    id: "referral",
    number: "05",
    title: "Referral Mission",
    tagline: "Grow the crew",
    description:
      "Invite one creator friend to apply. When they're accepted, you both get rewarded.",
    reward: "200 Junto Points",
    effort: "Featured",
    gradient: "from-tangerine to-coral",
  },
];
