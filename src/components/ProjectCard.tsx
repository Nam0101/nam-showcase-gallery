
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Link as LinkIcon } from "lucide-react";

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
    <Card className={`bg-navy-light border border-slate-dark overflow-hidden card-hover ${project.featured ? 'md:col-span-2' : ''}`}>
      <div className="h-48 overflow-hidden bg-slate-dark">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
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
  );
};

export default ProjectCard;
