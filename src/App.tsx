import { motion, useScroll, useSpring } from "framer-motion";

// Hooks
import { useTheme } from "./hooks/useTheme";
import { useScrollObserver } from "./hooks/useScrollObserver";

// Components
import { Sidebar } from "./components/Sidebar";
import { CustomCursor } from "./components/CustomCursor";
import { ThemeToggle } from "./components/ThemeToggleButton";

// Sections
import { Summary } from "./sections/Summary";
import { Education } from "./sections/Education";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Hobbies } from "./sections/Hobbies";
import { Contact } from "./sections/Contact";
import { useMousePosition } from "./hooks/useMousePosition";

const sectionIds = [
  "summary",
  "education",
  "experience",
  "projects",
  "skills",
  "hobbies",
  "contact",
];

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const mousePosition = useMousePosition();
  const activeSection = useScrollObserver(sectionIds);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="bg-parchment dark:bg-navy-dark transition-colors duration-500 relative">
      <CustomCursor position={mousePosition} />

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-dusty-rose dark:bg-dusty-rose origin-left z-50"
        style={{ scaleX }}
      />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 md:px-8 py-12 md:py-24">
        {/* Left Non-Scrollable Content (Sidebar) */}
        <Sidebar activeSection={activeSection} />

        {/* Right Scrollable Content (Main) */}
        <main className="lg:col-span-2 space-y-24">
          <Summary />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Hobbies />
          <Contact />
        </main>
      </div>

      {/* Theme Toggle Button */}
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}
