import { motion } from "framer-motion";

interface EducationItemProps {
  degree: string;
  school: string;
  years: string;
}

export const EducationItem = ({
  degree,
  school,
  years,
}: EducationItemProps) => (
  <motion.div
    className="p-4 rounded-lg border border-transparent hover:border-mauve-gray/20 hover:bg-white/5 dark:hover:bg-dusty-rose/5 transition-shadow duration-300"
    whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
  >
    <p className="text-sm font-medium text-mauve-gray dark:text-parchment/70">
      {years}
    </p>
    <h3 className="text-lg font-semibold text-navy-dark dark:text-parchment">
      {degree}
    </h3>
    <p className="text-base text-slate-blue dark:text-parchment">{school}</p>
  </motion.div>
);
