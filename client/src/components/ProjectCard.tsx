import type { Project } from "@shared/schema";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group flex flex-col h-full bg-white border border-border hover:border-black transition-colors duration-300 relative overflow-hidden"
    >
      {/* Category Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className="inline-block px-3 py-1 bg-black/5 backdrop-blur-sm border border-black/10 text-xs font-mono uppercase tracking-wider font-bold">
          {project.category}
        </span>
      </div>

      {/* Image Area */}
      <div className="aspect-[4/3] w-full overflow-hidden bg-secondary relative">
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 z-10" />
        <img 
          src={project.imageUrl || "https://placehold.co/600x400/png?text=Hardware+Project"} 
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-grow p-6 md:p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl md:text-2xl font-bold font-mono group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          <a 
            href={project.linkUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-black transition-colors"
          >
            <ArrowUpRight className="w-6 h-6" />
          </a>
        </div>
        
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Features/Tags if available */}
        {project.features && project.features.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.features.map((feature, idx) => (
              <span key={idx} className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1">
                #{feature}
              </span>
            ))}
          </div>
        )}

        <div className="pt-6 border-t border-border flex gap-4">
           <a 
            href={project.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 border border-black bg-transparent hover:bg-black hover:text-white transition-all duration-300 font-mono text-sm font-bold uppercase"
          >
            <ExternalLink className="w-4 h-4" />
            View Project
          </a>
        </div>
      </div>
    </motion.div>
  );
}
