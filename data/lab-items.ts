export type LabItem = {
  id: string;
  title: string;
  category: string;
  year: "2026";
  description: string;
  image: string;
  thumbnailImage: string;
  alt: string;
  mediaLabel: "Original photograph";
  tone: "dark" | "light";
  url: string;
};

export const labItems: LabItem[] = [
  {
    id: "ethglobal-ny",
    title: "ETHGlobal New York",
    category: "Hackathon",
    year: "2026",
    description:
      "Building CashMeIfYouCan at ETHGlobal New York, a 36-hour hackathon at the Metropolitan Pavilion.",
    image: "/images/projects/ethglobal-1.webp",
    thumbnailImage: "/images/lab/optimized/ethglobal-seated-card.webp",
    alt: "Jigar and a teammate at a table with laptops during ETHGlobal New York.",
    mediaLabel: "Original photograph",
    tone: "light",
    url: "https://cashmeifyoucan.us",
  },
];
