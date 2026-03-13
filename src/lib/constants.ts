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
    id: "act6",
    verb: "access",
    icon: Newspaper,
    title: "act6.eu · Fashion Magazine",
    subtitle: "Founded · Culture & Access",
    description:
      "When I was 17, my biggest passion was fashion and my biggest dream was to sit at Paris Fashion Week and exchange with the designers I idolized. It seemed impossibly far away. But I learned something that has shaped everything I've built since: the best way to get into a room is to build something people in that room care about.\n\nSo I founded act6. The magazine was backed by GATE 194, one of Berlin's most important high fashion stores, and has been releasing biannually ever since. Merch drops, events in Berlin and Paris, and yes, I made it to Paris Fashion Week. Many times. Fashion is no longer my primary focus, but I am still immensely proud of what we created.",
    highlights: [
      "Paris Fashion Week accreditation",
      "Backed by GATE 194",
      "Biannual print releases",
      "Still running today",
    ],
    image: "/Act6.webp",
    button: { url: "https://act6.eu/", text: "act6.eu" },
  },
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
    image: "/Bayer.webp",
    button: { url: "https://www.bayer.com/en/", text: "Bayer" },
  },
  {
    id: "marvelous",
    verb: "a fund",
    icon: TrendingUp,
    title: "Marvelous · First Employee",
    subtitle: "From day zero · Venture Capital",
    description:
      "In my early twenties I received an incredible opportunity: to build a climate deep tech VC fund from scratch together with three General Partners, from day zero. I was the first employee. I talked to LPs and founders alike, built fund operations, sourced deals, and evaluated companies across sectors.\n\nSitting across the table from dozens of early stage teams taught me a lot about what actually makes a company work. And more importantly, what doesn't. It also made one thing very clear: I wanted to be on the other side of that table.",
    highlights: [
      "First employee from day zero",
      "Climate deep tech focus",
      "Talked to LPs and founders across sectors",
    ],
    image: "/Marvelous.webp",
    button: { url: "https://marvelous-deeptech.com/", text: "Marvelous" },
  },
  {
    id: "protein-distillery",
    verb: "a factory",
    icon: FlaskConical,
    title: "ProteinDistillery · Finance Lead",
    subtitle: "Deep Tech · Lab to Production",
    description:
      "At ProteinDistillery I owned everything finance. I managed multimillion euro debt contracts, raised equity rounds, and built the financing that ultimately led to a First of a Kind production facility. I also did the financial planning, controlling, accounting, year end reports, investor reportings, and unit economics calculations. It was an incredible education in what it actually takes to run startup finance end to end.\n\nSeeing a FOAK facility go from spreadsheet to physical infrastructure is something I'm deeply proud of. It's also what made me realize that the technologies shaping our future are held back not by science, but by how hard it is to finance and scale them. I wanted to change that.",
    highlights: [
      "Built financing for FOAK production facility",
      "Multimillion euro debt contracts",
      "Full stack startup finance",
    ],
    image: "/ProteinDistillery.webp",
    button: { url: "https://proteindistillery.com/groundbreaking-ceremony-in-heilbronn/", text: "ProteinDistillery" },
  },
  {
    id: "lelia",
    verb: "companies",
    icon: Rocket,
    title: "Lelia · Founded, Built, Shut Down",
    subtitle: "2024 · AI for Private Credit",
    description:
      "I built Lelia because I strongly believe that the future is hardware driven. Semiconductors, data centers, renewables, space, robotics. These industries are not financed through equity but oftentimes through debt. So we tried to crack open European private credit, an industry still running on spreadsheets and email. We shipped a live AI native platform, signed paying customers, and ran deep discovery across the market.\n\nAfter months of rigorous validation we came to the conclusion that the pain point wasn't deep enough and the market wasn't large enough to build the kind of company we wanted to build. So we shut it down. We don't regret a single day of it. I wrote down seven lessons from the experience and they now guide every decision I make.",
    highlights: [
      "Live platform with paying customers",
      "Hardware driven future thesis",
      "Shut down with discipline, not defeat",
    ],
    image: "/Lelia.webp",
  },
  {
    id: "fun-projects",
    verb: "for fun",
    icon: Sparkles,
    title: "Side Projects · Always",
    subtitle: "Side Projects · Building for fun",
    description:
      "Along my journey I've always enjoyed building software on the side. Whether that's a Chrome widget that transforms my LinkedIn feed into something I actually enjoy reading, or a Duolingo style app for vibe coding that helped me understand what my beloved Claude is actually doing under the hood. I've always loved the process of building something simply because I need it.",
    image: "/Funprojects.webp",
  },
  {
    id: "exist",
    verb: "what's next",
    icon: ArrowRight,
    title: "EXIST Grant · Building Again",
    subtitle: "2026 → · AI × Regulated Industries",
    description:
      "With my trusted co founders Julia and Rouven I'm building something new at the intersection of AI and regulated industries. We're backed by Germany's premier startup grant with 12 months of runway, a sharp thesis, and everything we've learned from the last few years. More soon.",
    highlights: [
      "EXIST grant backed",
      "Team of three",
      "AI for regulated industries",
    ],
    image: "/Whatsnext.webp",
  },
];

export const HERO_WORDS = TIMELINE_ENTRIES.map((s) => s.verb);

export const SOCIAL_LINKS = [
  { label: "Email", href: "mailto:lennart.wendt@lelia.io" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/lennartwendt/" },
] as const;
