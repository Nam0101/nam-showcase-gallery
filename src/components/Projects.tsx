
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
    title: "Android Weather App",
    description: "Native Android weather application with location-based forecasts, widgets, and material design.",
    image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?auto=format&fit=crop&w=800&q=80",
    techStack: ["Kotlin", "Jetpack Compose", "Room", "Retrofit", "MVVM"],
    demoUrl: "https://play.google.com/store/apps/details?id=com.example.weatherapp",
    githubUrl: "https://github.com/Nam0101/android-weather-app",
    featured: true
  },
  {
    id: 3,
    title: "Fitness Tracker",
    description: "Android fitness application that tracks workouts, calories, and progress with custom animations.",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80",
    techStack: ["Java", "Firebase", "Google Fit API", "MPAndroidChart"],
    demoUrl: "https://play.google.com/store/apps/details?id=com.example.fitnesstracker",
    githubUrl: "https://github.com/Nam0101/fitness-tracker",
    featured: false
  },
  {
    id: 4,
    title: "E-Commerce Mobile App",
    description: "Full-featured Android shopping application with payment integration and real-time inventory.",
    image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?auto=format&fit=crop&w=800&q=80",
    techStack: ["Kotlin", "Dagger Hilt", "Coroutines", "Room", "Stripe API"],
    demoUrl: "https://play.google.com/store/apps/details?id=com.example.shopapp",
    githubUrl: "https://github.com/Nam0101/android-shop-app",
    featured: false
  },
  {
    id: 5,
    title: "Algorithm Visualizer",
    description: "Visualize various sorting and pathfinding algorithms in real time",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    techStack: ["JavaScript", "D3.js", "HTML5", "CSS3"],
    demoUrl: "https://algo-viz-demo.example.com",
    githubUrl: "https://github.com/Nam0101/algorithm-visualizer",
    featured: true
  },
  {
    id: 6,
    title: "Social Media Companion",
    description: "Android app that helps users manage multiple social media accounts with scheduling features.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80",
    techStack: ["Kotlin", "WorkManager", "Social Media APIs", "Jetpack Navigation"],
    demoUrl: "https://play.google.com/store/apps/details?id=com.example.socialcompanion",
    githubUrl: "https://github.com/Nam0101/social-companion",
    featured: false
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">Projects</h2>
        <p className="mb-10 text-slate max-w-2xl">
          A collection of projects that I've built, with a focus on Android development.
          Each project showcases different skills and technologies in mobile app development.
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
