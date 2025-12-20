export type Education = {
  school: string;
  degree: string;
  location?: string;
  period: string;
  focus?: string;
  gpa?: string;
  bullets?: string[];
};

export const education: Education[] = [
  {
    school: "University of Illinois, Urbana Champaign",
    degree: "Masters in Computer Science",
    location: "Champaign, IL, USA",
    period: "Jan 2024 - May 2025",
    focus: "Focus: Distributed Systems, Large Language Models, Cloud",
    gpa: "3.96 / 4.00",
    bullets: [
    ],
  },
  {
    school: "VIT University",
    degree: "B.Tech in Computer Science",
    location: "Vellore, India",
    period: "Jul 2017 - May 2021",
    gpa: "3.90 / 4.00",
    bullets: [
    ],
  },
];
