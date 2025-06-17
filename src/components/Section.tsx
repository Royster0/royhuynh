import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  children: React.ReactNode;
}

export const Section = ({ id, children }: SectionProps) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="scroll-mt-24"
  >
    {children}
  </motion.section>
);
