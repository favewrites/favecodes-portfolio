// FaveCodes Portfolio — Projects Data
// Add new projects here and they auto-appear in the portfolio

export const projects = [
  {
    id: 1,
    title: "NobleNest",
    description: "A modern real estate website designed to showcase property listings with elegant visuals, smooth navigation, and responsive layouts that work seamlessly across all devices.",
    tech: ["React", "Vite", "CSS3", "Responsive Design"],
    github: "https://github.com/favewrites/noblenest",
    live: "https://noblenest-three.vercel.app",
    image: "/preview-images/noblenest.jpg",
    category: "Business Website",
    backend: false,
    year: "2024",
    featured: true,
  },
  {
    id: 2,
    title: "Coco Cartel",
    description: "A premium business website built with React and modern frontend architecture. Features dynamic content, smooth interactions, and a polished user experience for a luxury brand.",
    tech: ["React", "Vite", "JavaScript", "CSS3"],
    github: "https://github.com/favewrites/coco-cartel",
    live: "https://coco-cartel.vercel.app",
    image: "/preview-images/coco-cartel-react.jpg",
    category: "Business Website",
    backend: true,
    year: "2024",
    featured: false,
  },
  {
    id: 3,
    title: "Coco Cartel",
    description: "The same Coco Cartel business concept built with pure HTML, CSS, and JavaScript. Demonstrates versatility in implementing the same design with different technology stacks.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/favewrites/Coco-Cartel-",
    live: "https://favewrites.github.io/Coco-Cartel-/",
    image: "/preview-images/coco-cartel-html.jpg",
    category: "Business Website",
    backend: true,
    year: "2024",
    featured: false,
    comparisonLabel: "Same business concept. Different implementation.",
  },
  {
    id: 4,
    title: "Bloom Studio",
    description: "A creative portfolio website designed for a design studio. Features elegant typography, smooth animations, and a gallery-focused layout that highlights visual work beautifully.",
    tech: ["HTML5", "CSS3"],
    github: "https://github.com/favewrites/Bloom-studio",
    live: "https://favewrites.github.io/Bloom-studio",
    image: "/preview-images/bloom-studio.jpg",
    category: "Portfolio Website",
    backend: false,
    year: "2024",
    featured: false,
  },
];

export const categories = [
  "All",
  "React + Vite",
  "HTML/CSS",
  "Full Stack",
  "Business",
  "Portfolio",
  "Landing Page",
];

export const getFeaturedProject = () => projects.find((p) => p.featured);
export const getProjectsByCategory = (category) =>
  category === "All" ? projects : projects.filter((p) => p.category === category);
