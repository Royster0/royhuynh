import { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import {
  Sun,
  Moon,
  Github,
  Linkedin,
  Twitter,
  ArrowUpRight,
} from "lucide-react";

// Mock Data - Updated with your resume information
const personalInfo = {
  name: "Roy Huynh",
  title: "Software Engineer",
  summary:
    "I build accessible, inclusive products and digital experiences for the web. With over 8 years of experience, I specialize in React, TypeScript, and crafting beautiful user interfaces that are a joy to use.",
  email: "royt.huynh@gmail.com",
  socials: {
    github: "https://github.com/", // Please add your GitHub URL
    linkedin: "https://linkedin.com/in/royhuynh",
    twitter: "https://twitter.com/", // Please add your Twitter/X URL
  },
};

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Oregon State University",
    years: "Expected: Jun 2025",
  },
];

const experienceData = [
  {
    date: "Sep 2024 - Dec 2024",
    title: "Teacher's Assistant",
    company: "Oregon State University",
    companyUrl: "https://oregonstate.edu/",
    description:
      "Championed software quality by mentoring 10+ undergraduates in web development, emphasizing adherence to clean code practices, foundational testing principles, and demonstrating effective unit/integration testing to ensure application stability. Performed over 100 detailed code reviews of full-stack implementations.",
    skills: [
      "Web Development",
      "MERN Stack",
      "RESTful APIs",
      "Code Review",
      "Testing",
    ],
  },
  {
    date: "Jun 2016 - Sep 2019",
    title: "Manager/Server",
    company: "Pho Quynh",
    companyUrl: "#",
    description:
      "Developed comprehensive customer service training, leading to a 50% decrease in onboarding time. Enhanced system accuracy by implementing new payroll software. Managed daily operations, supervising teams and overseeing inventory, scheduling, and customer service excellence.",
    skills: [
      "Management",
      "Training",
      "Python",
      "Pandas",
      "System Implementation",
    ],
  },
];

const projectsData = [
  {
    title: "KeyRush",
    url: "#", // Add URL to live project if available
    description:
      "A dynamic, responsive typing test web application, focusing on user experience and accurate performance metric display. Engineered custom algorithms for real-time typing speed and accuracy calculations.",
    skills: ["NextJS", "Supabase", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "RoyWerkz",
    url: "#", // Add URL to live project if available
    description:
      "A full-stack portfolio and e-commerce platform for custom keyboard cases. Developed and tested for performance and payment processing reliability, resulting in 40+ sales and generating over $10,000 in revenue.",
    skills: ["Fusion360", "NextJS", "Supabase", "Stripe"],
  },
];

const skillsData = [
  { name: "JavaScript", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "React.js", level: 92 },
  { name: "NextJS", level: 90 },
  { name: "Node.js", level: 80 },
  { name: "Python", level: 85 },
  { name: "SQL", level: 75 },
  { name: "Docker", level: 70 },
];

const hobbiesData = [
  {
    name: "Keyboards",
    description:
      "I have a passion for custom mechanical keyboards, from designing cases in Fusion360 to prototyping and building them. This hobby combines my love for design, engineering, and hands-on creation.",
  },
  {
    name: "Web Development",
    description:
      "Beyond my professional work, I enjoy building personal projects and exploring new web technologies. Creating applications like KeyRush allows me to experiment with new tools and refine my craft.",
  },
  {
    name: "Gaming",
    description:
      "I'm an avid gamer and have dabbled in game development with Godot and Unity. This fuels my interest in performance optimization and creating engaging user experiences.",
  },
];

const sections = [
  "summary",
  "education",
  "experience",
  "projects",
  "skills",
  "hobbies",
  "contact",
];

// App Component
export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });
  const [activeSection, setActiveSection] = useState("summary");
  const [selectedHobby, setSelectedHobby] = useState(hobbiesData[0]);

  // Custom cursor state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Framer Motion scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Theme Toggling
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Active section highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Update mouse position for custom cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-parchment dark:bg-navy-dark transition-colors duration-500 relative">
      <style>{`* { cursor: none !important; }`}</style>
      <CustomCursor position={mousePosition} />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-dusty-rose dark:bg-dusty-rose origin-left z-50"
        style={{ scaleX }}
      />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 md:px-8 py-12 md:py-24">
        {/* Left Fixed Sidebar */}
        <header className="lg:sticky top-24 lg:h-screen flex flex-col justify-between col-span-1">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-navy-dark dark:text-dusty-rose">
              {personalInfo.name}
            </h1>
            <h2 className="mt-3 text-lg md:text-xl font-medium text-slate-blue dark:text-parchment/70">
              {personalInfo.title}
            </h2>
            <nav className="hidden lg:block mt-12">
              <ul className="space-y-4">
                {sections.map((section) => (
                  <li key={section}>
                    <a
                      href={`#${section}`}
                      className="group flex items-center py-2"
                    >
                      <span
                        className={`nav-indicator mr-4 h-px w-8 transition-all group-hover:w-16 group-hover:bg-dusty-rose dark:group-hover:bg-dusty-rose ${
                          activeSection === section
                            ? "w-16 bg-dusty-rose"
                            : "bg-mauve-gray"
                        }`}
                      ></span>
                      <span
                        className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors group-hover:text-navy-dark dark:group-hover:text-dusty-rose ${
                          activeSection === section
                            ? "text-navy-dark dark:text-dusty-rose"
                            : "text-mauve-gray dark:text-mauve-gray"
                        }`}
                      >
                        {section}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex items-center mt-8 lg:mt-0">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              className="mr-4 text-slate-blue hover:text-navy-dark dark:text-mauve-gray dark:hover:text-dusty-rose transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="mr-4 text-slate-blue hover:text-navy-dark dark:text-mauve-gray dark:hover:text-dusty-rose transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={personalInfo.socials.twitter}
              target="_blank"
              rel="noreferrer"
              className="text-slate-blue hover:text-navy-dark dark:text-mauve-gray dark:hover:text-dusty-rose transition-all duration-300 hover:scale-110"
            >
              <Twitter size={24} />
            </a>
          </div>
        </header>

        {/* Right Scrollable Content */}
        <main className="lg:col-span-2 space-y-24">
          <Section id="summary">
            <h2 className="text-2xl font-bold text-slate-blue dark:text-dusty-rose">
              About Me
            </h2>
            <p className="mt-4 text-slate-blue dark:text-parchment">
              As a computer science student at Oregon State University, I'm
              passionate about developing dynamic and responsive web
              applications. I have hands-on experience in mentoring, code
              review, and full-stack development through my role as a Teacher's
              Assistant. My project work, from creating a real-time typing test
              app to building a full e-commerce platform for custom keyboards,
              showcases my ability to deliver user-focused, high-quality
              software.
            </p>
          </Section>

          <Section id="education">
            <h2 className="text-2xl font-bold text-slate-blue dark:text-dusty-rose">
              Education
            </h2>
            <div className="space-y-4 mt-4">
              {educationData.map((item, index) => (
                <EducationItem key={index} {...item} />
              ))}
            </div>
          </Section>

          <Section id="experience">
            <h2 className="text-2xl font-bold text-slate-blue dark:text-dusty-rose">
              Experience
            </h2>
            <div className="space-y-4 mt-4">
              {experienceData.map((item, index) => (
                <ExperienceItem key={index} {...item} />
              ))}
            </div>
          </Section>

          <Section id="projects">
            <h2 className="text-2xl font-bold text-slate-blue dark:text-dusty-rose">
              Projects
            </h2>
            <div className="space-y-4 mt-4">
              {projectsData.map((item, index) => (
                <ProjectItem key={index} {...item} />
              ))}
            </div>
          </Section>

          <Section id="skills">
            <h2 className="text-2xl font-bold text-slate-blue dark:text-dusty-rose">
              Skills
            </h2>
            <div className="mt-4 space-y-6">
              {skillsData.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                />
              ))}
            </div>
          </Section>

          <Section id="hobbies">
            <h2 className="text-2xl font-bold text-slate-blue dark:text-dusty-rose">
              Hobbies & Interests
            </h2>
            <div className="mt-4 flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="flex md:flex-col gap-2">
                {hobbiesData.map((hobby) => (
                  <button
                    key={hobby.name}
                    onClick={() => setSelectedHobby(hobby)}
                    className={`text-left p-2 rounded-md transition-colors ${
                      selectedHobby.name === hobby.name
                        ? "bg-dusty-rose/20 dark:bg-dusty-rose/10 text-dusty-rose font-semibold"
                        : "hover:bg-mauve-gray/10 dark:hover:bg-mauve-gray/10 text-slate-blue dark:text-parchment"
                    }`}
                  >
                    {hobby.name}
                  </button>
                ))}
              </div>
              <div className="flex-1 p-4 rounded-lg bg-white/5 dark:bg-dusty-rose/5 min-h-[100px]">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={selectedHobby.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="text-slate-blue dark:text-parchment"
                  >
                    {selectedHobby.description}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </Section>

          <Section id="contact">
            <h2 className="text-2xl font-bold text-slate-blue dark:text-dusty-rose">
              Get In Touch
            </h2>
            <p className="mt-4 text-slate-blue dark:text-parchment">
              I'm always open to new opportunities and collaborations. Feel free
              to reach out if you have a project in mind or just want to
              connect!
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="mt-6 group inline-flex items-center bg-slate-blue text-parchment dark:bg-dusty-rose dark:text-navy-dark font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-all"
            >
              Say Hello
              <ArrowUpRight
                className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                size={20}
              />
            </a>
          </Section>
        </main>
      </div>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-8 right-8 bg-slate-blue dark:bg-dusty-rose p-3 rounded-full text-parchment dark:text-navy-dark shadow-lg hover:scale-110 transition-all duration-300 z-50"
        aria-label="Toggle theme"
      >
        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      </button>
    </div>
  );
}

// Section Component with Animation
const Section = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => (
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

// Education Item Component
interface EducationProps {
  degree: string;
  school: string;
  years: string;
}
const EducationItem = ({ degree, school, years }: EducationProps) => (
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

// Experience Item Component
interface ExperienceProps {
  date: string;
  title: string;
  company: string;
  companyUrl: string;
  description: string;
  skills: string[];
}
const ExperienceItem = ({
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

// Project Item Component
interface ProjectProps {
  title: string;
  url: string;
  description: string;
  skills: string[];
}
const ProjectItem = ({ title, url, description, skills }: ProjectProps) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noreferrer"
    className="block p-4 rounded-lg border border-transparent hover:border-mauve-gray/20 hover:bg-white/5 dark:hover:bg-dusty-rose/5 transition-shadow duration-300 group"
    whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
  >
    <div className="grid md:grid-cols-4 gap-4">
      <div className="md:col-span-4">
        <h3 className="text-lg font-semibold text-navy-dark dark:text-parchment group-hover:text-slate-blue dark:group-hover:text-dusty-rose transition-colors flex items-center">
          {title}
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

// Skill Bar Component
interface SkillBarProps {
  name: string;
  level: number;
}
const SkillBar = ({ name, level }: SkillBarProps) => (
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

// Custom Cursor Component
const CustomCursor = ({ position }: { position: { x: number; y: number } }) => {
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as Element).closest("a, button")) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      if (!(e.relatedTarget as Element)?.closest("a, button")) {
        setIsHovering(false);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      style={{
        left: position.x,
        top: position.y,
      }}
      animate={{
        width: isHovering ? 32 : 8,
        height: isHovering ? 32 : 8,
        x: "-50%",
        y: "-50%",
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <div
        className={`w-full h-full rounded-full transition-colors ${
          isHovering ? "bg-dusty-rose/50" : "bg-dusty-rose"
        }`}
      ></div>
    </motion.div>
  );
};
