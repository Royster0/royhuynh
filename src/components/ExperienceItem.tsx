import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ExperienceProps {
  date: string;
  title: string;
  company: string;
  companyUrl: string;
  description: string;
  skills: string[];
}
export const ExperienceItem = ({
  date,
  title,
  company,
  companyUrl,
  description,
  skills,
}: ExperienceProps) => (
  <motion.a
    href={companyUrl}
    target="_blank"
    rel="noreferrer"
    className="block p-4 rounded-lg border border-transparent hover:border-mauve-gray/20 hover:bg-white/5 dark:hover:bg-dusty-rose/5 transition-shadow duration-300 group"
    whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
  >
    <div className="grid md:grid-cols-4 gap-4">
      <p className="md:col-span-1 text-sm font-medium text-mauve-gray dark:text-parchment/70 pt-1">
        {date}
      </p>
      <div className="md:col-span-3">
        <h3 className="text-lg font-semibold text-navy-dark dark:text-parchment group-hover:text-slate-blue dark:group-hover:text-dusty-rose transition-colors flex items-center">
          {title} · {company}
          <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </h3>
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
  </motion.a>
);
