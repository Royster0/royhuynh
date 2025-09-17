import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { useState } from "react";
import { DemoModal } from "./DemoModal";

interface ProjectProps {
  title: string;
  url: string;
  description: string;
  skills: string[];
  demo?: string;
}
export const ProjectItem = ({
  title,
  url,
  description,
  skills,
  demo,
}: ProjectProps) => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <>
      <motion.div
        className="block p-4 rounded-lg border border-transparent hover:border-mauve-gray/20 hover:bg-white/5 dark:hover:bg-dusty-rose/5 transition-shadow duration-300 group"
        whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
      >
    <div className="grid md:grid-cols-4 gap-4">
      <div className="md:col-span-4">
        <div className="flex items-center justify-between">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center text-lg font-semibold text-navy-dark dark:text-parchment hover:text-slate-blue dark:hover:text-dusty-rose transition-colors group"
          >
            {title}
            <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
          {demo && (
            <button
              onClick={() => setIsDemoOpen(true)}
              className="flex items-center gap-2 px-3 py-1 rounded-md bg-dusty-rose/10 hover:bg-dusty-rose/20 text-dusty-rose border border-dusty-rose/30 transition-colors"
            >
              <Play className="h-3 w-3" />
              Demo
            </button>
          )}
        </div>
        <p className="mt-2 text-slate-blue dark:text-parchment">
          {description}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-dusty-rose/20 text-dusty-rose dark:bg-dusty-rose/10 dark:text-dusty-rose border border-dusty-rose/30 dark:border-dusty-rose/20 py-1 px-3 rounded-full text-xs font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
      </motion.div>
      {demo && (
        <DemoModal
          isOpen={isDemoOpen}
          onClose={() => setIsDemoOpen(false)}
          videoSrc={demo}
          title={title}
        />
      )}
    </>
  );
};
