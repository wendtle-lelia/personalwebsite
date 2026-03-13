import {
  Building2,
  TrendingUp,
  FlaskConical,
  Rocket,
  ArrowRight,
  Newspaper,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export interface TimelineProject {
  name: string;
  desc: string;
}

export interface TimelineEntry {
  id: string;
  verb: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  highlights?: string[];
  projects?: TimelineProject[];
  image?: string;
  button?: {
    url: string;
    text: string;
  };
}

export const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    id: "bayer",
    verb: "from within",
    icon: Building2,
    title: "Bayer · Market Access",
    subtitle: "~4 years · Pharma Commercialization",
    description:
      "I spent nearly four years on the commercial side of one of the world's largest pharma companies — pricing, reimbursement, launch strategy, health technology assessments. I built pricing frameworks for cell & gene therapies and digital therapeutics. I learned how decisions that shape millions of lives actually get made in regulated industries. And I saw, every single day, how much of that work was still painfully manual.",
    highlights: [
      "Pricing frameworks for cell & gene therapies",
      "Market access for digital therapeutics",
      "Health technology assessment strategy",
    ],
    image: "/Bayer.jpg",
    button: { url: "https://www.bayer.com/en/", text: "Bayer" },
  },
  {
    id: "marvelous",
    verb: "a fund",
    icon: TrendingUp,
    title: "Marvelous · First Employee",
    subtitle: "From day zero · Venture Capital",
    description:
      "I didn't join an established fund — I built one. As the first employee, I worked alongside the General Partners from day zero: sourcing, evaluation, portfolio support, fund operations. Seeing dozens of early stage companies up close taught me the patterns. The founders who win aren't smarter. They pick better problems.",
    highlights: [
      "First hire, built fund infrastructure from scratch",
      "Deal sourcing and portfolio evaluation",
      "Pattern recognition across dozens of startups",
    ],
    image: "/Marvelous.jpeg",
    button: { url: "https://marvelous-deeptech.com/", text: "Marvelous" },
  },
  {
    id: "protein-distillery",
    verb: "a factory",
    icon: FlaskConical,
    title: "ProteinDistillery · Finance Lead",
    subtitle: "Deep Tech · Lab to Production",
    description:
      "As Finance Lead at a deep tech food startup, I managed debt and equity projects during the hardest transition in deep tech: lab to large scale. My work directly led to building a First of a Kind (FOAK) production facility — turning research into physical infrastructure. That's where I saw how pharma, food, and biotech share the same structural pain points.",
    highlights: [
      "Led financing for FOAK production facility",
      "Managed debt and equity capital projects",
      "Bridged lab research to industrial scale",
    ],
    image: "/ProteinDistillery.jpg",
    button: { url: "https://proteindistillery.com/groundbreaking-ceremony-in-heilbronn/", text: "ProteinDistillery" },
  },
  {
    id: "lelia",
    verb: "companies",
    icon: Rocket,
    title: "Lelia · Founded, Built, Shut Down",
    subtitle: "2024 · AI for Private Credit",
    description:
      "I built Lelia to crack open European private credit — an industry running on spreadsheets and email. We shipped a live AI native platform, signed paying customers, and ran deep discovery across the market. Then I made the hardest decision of my career: I shut it down. The pain was real but not deep enough. The market was real but not large enough. I wrote down seven lessons. They now guide every bet I make.",
    highlights: [
      "Live platform with paying enterprise customers",
      "100+ discovery calls analyzed",
      "Disciplined shutdown after rigorous validation",
    ],
    image: "/Lelia.jpeg",
  },
  {
    id: "act6",
    verb: "access",
    icon: Newspaper,
    title: "act6.eu · Fashion Magazine",
    subtitle: "Founded · Culture & Access",
    description:
      "Founded a fashion magazine to get access to Paris Fashion Week. Still running today. The best way to get into a room is to build something people in that room care about.",
    highlights: [
      "Paris Fashion Week accreditation",
      "Editorial content & creative direction",
      "Still running today",
    ],
    image: "/Act6.jpeg",
    button: { url: "https://act6.eu/", text: "act6.eu" },
  },
  {
    id: "vibe-learning",
    verb: "to learn",
    icon: Sparkles,
    title: "Vibe Coded Learning Platform",
    subtitle: "Side Project · Education × AI",
    description:
      "An experimental education tool — vibes first, structure second. The best way to learn a technology is to ship something with it.",
    image: "/VibeLearning.png",
  },
  {
    id: "linkedin-bs",
    verb: "for fun",
    icon: Sparkles,
    title: "LinkedIn BS Detector",
    subtitle: "Side Project · Because someone had to",
    description:
      "A widget that makes LinkedIn posts less bullshit. Built because someone had to.",
    image: "/LinkedIn.png",
  },
  {
    id: "exist",
    verb: "what's next",
    icon: ArrowRight,
    title: "EXIST Grant · Building Again",
    subtitle: "2026 → · AI × Regulated Industries",
    description:
      "Backed by Germany's premier startup grant with 12 months of runway. I'm building something new at the intersection of AI and regulated European industries — with Julia Schimanietz (COO, ex ProteinDistillery, €1.6M+ in grants) and Rouven Glauert (CTO, ex Parloa, production AI agents). The thesis: give experts leverage, not replacement. More soon.",
    highlights: [
      "EXIST research transfer grant secured",
      "Team of three with deep domain expertise",
      "AI for regulated European industries",
    ],
    image: "/Whatsnext.png",
  },
];

export const HERO_WORDS = TIMELINE_ENTRIES.map((s) => s.verb);

export const SOCIAL_LINKS = [
  { label: "Email", href: "mailto:lennart.wendt@lelia.io" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/lennartwendt/" },
] as const;
