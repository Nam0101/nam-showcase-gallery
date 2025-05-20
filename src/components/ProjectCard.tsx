import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Link as LinkIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Parallax } from 'react-scroll-parallax';
import React, { useRef, useState } from "react";

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
  layoutId?: string;
  onClick?: () => void;
}

const ProjectCard = ({ project, layoutId, onClick }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHover(false);
  };

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  return (
    <motion.div
      ref={cardRef}
      layoutId={layoutId}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        perspective: 1200,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${project.title}`}
      className="cursor-pointer"
    >
      <motion.div
        style={{
          height: '100%',
          transform: `rotateY(${tilt.x * 10}deg) rotateX(${-tilt.y * 10}deg)`
        }}
        animate={isHover ? {
          boxShadow: "0 12px 40px 0 rgba(14,165,233,0.18), 0 2px 8px 0 rgba(30,41,59,0.12)",
          scale: 1.04
        } : {
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          scale: 1
        }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className={`relative h-full`}
      >
        {/* Gradient overlay on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHover ? 0.18 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: "linear-gradient(135deg, #0ea5e9 0%, #1e293b 100%)"
          }}
        />
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
    </motion.div>
  );
};

export default ProjectCard;
