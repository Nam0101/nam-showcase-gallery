import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Link as LinkIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Parallax } from 'react-scroll-parallax';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl: string;
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
      whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
      whileTap={{ scale: 0.98 }}
      style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
    >
      <Card className={`bg-navy-light border border-slate-dark overflow-hidden card-hover ${project.featured ? 'md:col-span-2' : ''}`} style={{ height: '100%' }}>
        <Parallax speed={-10}>
          <div className="h-48 overflow-hidden bg-slate-dark">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </div>
        </Parallax>
        <CardHeader>
          <CardTitle className="text-xl text-white">{project.title}</CardTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.techStack.map((tech, index) => (
              <Badge key={index} variant="outline" className="bg-transparent border-accent text-accent">
                {tech}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-slate">
            {project.description}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex gap-3">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-slate hover:text-accent">
                <Github size={20} />
              </Button>
            </a>
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-slate hover:text-accent">
                  <LinkIcon size={20} />
                </Button>
              </a>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
