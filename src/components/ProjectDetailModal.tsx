import React from "react";
import { motion } from "framer-motion";
import { Project } from "./ProjectCard";
import { Github, Link as LinkIcon, X } from "lucide-react";

interface ProjectDetailModalProps {
  project: Project;
  layoutId: string;
  onClose: () => void;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 }
};

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, layoutId, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
    >
      <motion.div
        layoutId={layoutId}
        className="relative bg-navy-light rounded-xl shadow-2xl max-w-2xl w-full p-8 border border-slate-dark"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.35, ease: [0.77, 0, 0.175, 1] }}
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-slate hover:text-accent"
          onClick={onClose}
          aria-label="Close project details"
        >
          <X size={24} />
        </button>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover rounded-lg mb-6 border border-slate-dark"
        />
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, idx) => (
            <span key={idx} className="px-2 py-1 bg-accent/10 text-accent border border-accent rounded text-xs font-mono">
              {tech}
            </span>
          ))}
        </div>
        <p className="text-slate mb-6">{project.description}</p>
        <div className="flex gap-4">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-accent">
            <Github size={22} />
          </a>
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-accent">
              <LinkIcon size={22} />
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetailModal; 