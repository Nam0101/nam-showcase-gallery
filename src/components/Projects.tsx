
import ProjectCard, { Project } from "./ProjectCard";

const projects: Project[] = [
  {
    id: 1,
    title: "MineSweeperX",
    description: "A modern minesweeper game with customizable difficulty levels and themes.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    techStack: ["React", "TypeScript", "Styled Components"],
    githubUrl: "https://github.com/Nam0101/minesweeper",
    featured: true
  },
  {
    id: 2,
    title: "Quiz App",
    description: "Interactive quiz application with multiple categories and difficulty levels.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    techStack: ["React", "Redux", "Node.js", "MongoDB"],
    demoUrl: "https://quiz-app-demo.example.com",
    githubUrl: "https://github.com/Nam0101/quiz-app",
    featured: false
  },
  {
    id: 3,
    title: "Personal Finance Tracker",
    description: "Application to help users track expenses, income, and manage budgets.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    techStack: ["Vue.js", "Firebase", "Chart.js"],
    demoUrl: "https://finance-tracker-demo.example.com",
    githubUrl: "https://github.com/Nam0101/finance-tracker",
    featured: false
  },
  {
    id: 4,
    title: "Algorithm Visualizer",
    description: "Visualize various sorting and pathfinding algorithms in real time",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    techStack: ["JavaScript", "D3.js", "HTML5", "CSS3"],
    demoUrl: "https://algo-viz-demo.example.com",
    githubUrl: "https://github.com/Nam0101/algorithm-visualizer",
    featured: true
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description: "Real-time weather application with 5-day forecast and location detection",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    techStack: ["React", "Weather API", "Geolocation API"],
    demoUrl: "https://weather-dash-demo.example.com",
    githubUrl: "https://github.com/Nam0101/weather-dashboard",
    featured: false
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">Projects</h2>
        <p className="mb-10 text-slate max-w-2xl">
          A collection of projects that I've built. Each project is a unique piece
          that showcases my skills and passion for building exceptional web experiences.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
