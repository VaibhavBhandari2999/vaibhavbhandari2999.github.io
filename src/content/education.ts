export type Education = {
  school: string;
  degree: string;
  location?: string;
  period: string;
  bullets?: string[];
};

export const education: Education[] = [
  {
    school: "University of Illinois, Urbana Champaign",
    degree: "Masters in Computer Science",
    location: "Champaign, IL, USA",
    period: "Jan 2024 - May 2025",
    bullets: [
    ],
  },
  {
    school: "VIT University",
    degree: "B.Tech in Computer Science",
    location: "Vellore, India",
    period: "Jul 2017 - May 2021",
    bullets: [
    ],
  },
];
