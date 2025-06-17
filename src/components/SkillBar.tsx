import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  level: number;
}
export const SkillBar = ({ name, level }: SkillBarProps) => (
  <div>
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium text-slate-blue dark:text-parchment">
        {name}
      </span>
    </div>
    <div className="w-full bg-mauve-gray/20 rounded-full h-2.5 dark:bg-mauve-gray/30">
      <motion.div
        className="bg-dusty-rose h-2.5 rounded-full"
        initial={{ width: "0%" }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
      />
    </div>
  </div>
);
