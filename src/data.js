import p1 from "./assets/interstellar.png";
import p2 from "./assets/portfolio.png";
import p3 from "./assets/crypto.png";
import p4 from "./assets/fyp.png";
import p5 from "./assets/dashboard.png";
import p6 from "./assets/wizarding.png";
import p7 from "./assets/llama.png";

export const filters = [
  {
    name: "All",
    id: "all",
  },
  {
    name: "Dashboard",
    id: "dashboard",
  },
  {
    name: "Mobile App",
    id: "mobile-app",
  },
  {
    name: "Website",
    id: "website",
  },
];

export const projects = [
  {
    name: "Llama AI Tutor ",
    image: p7,
    tags: ["dashboard", "website"],
    codeLink: "https://llama-ai-tutor.vercel.app/",
    // videoLink: "https://www.youtube.com/watch?v=8QZqX0ZxJZ8",
  },
  {
    name: "Interstellar - Age Calculator ",
    image: p1,
    tags: ["dashboard", "website"],
    codeLink: "https://interstellar-master.vercel.app/",
    // videoLink: "https://www.youtube.com/watch?v=8QZqX0ZxJZ8",
  },
  {
    name: "Portfolio'23 - My Portfolio Website",
    image: p2,
    tags: ["website"],
    codeLink: "https://krazyykunal.vercel.app/",
  },
  /* {
    name: "Weather - App ",
    image:
      "https://raw.githubusercontent.com/Kunalsonar007/Weather-App/master/preview.png",
    tags: ["all"],
    codeLink: "https://github.com/Kunalsonar007/Weather-App",
  },*/
  {
    name: "Crypto Hunter - Tracker",
    image: p3,
    tags: ["mobile-app", "dashboard"],
    codeLink: "https://cryptohunter111.netlify.app/",
  },
  {
    name: "Quixlab - Dashboard",
    image: p5,
    tags: ["website", "dashboard"],
    codeLink: "https://kunalsonar007.github.io/Modern-Dashboard/",
  },
  {
    name: "Wizarding World - WebApp",
    image: p6,
    tags: ["all", "website"],
    codeLink: "https://github.com/Kunalsonar19/wizarding-world",
  },
];

export const achievements = [
  {
    id: 1,
    year: 70,
    description: "SUCCESSFULLY<br />COMPLETED<br />PROJECTS",
  },
  {
    id: 2,
    year: 5,
    description: "YEARS OF<br />EXPERIENCE",
  },
  {
    id: 3,
    year: 20,
    description: "TECHNOLOGIES",
  },
  {
    id: 4,
    year: 20,
    description: "COMMUNITY<br />MEMBER",
  },
];
