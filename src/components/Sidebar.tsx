import { LuGithub } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";
import { personalInfo } from "../data/personalInfo";

const sectionIds = [
  "summary",
  "education",
  "experience",
  "projects",
  "skills",
  "hobbies",
  "contact",
];

interface SidebarProps {
  activeSection: string;
}

export function Sidebar({ activeSection }: SidebarProps) {
  return (
    <header className="lg:sticky top-24 lg:h-screen flex flex-col justify-between col-span-1">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-navy-dark dark:text-dusty-rose">
          {personalInfo.name}
        </h1>
        <h2 className="mt-3 text-lg md:text-xl font-medium text-slate-blue dark:text-parchment/70">
          {personalInfo.title}
        </h2>

        {/* Navigation */}
        <nav className="hidden lg:block mt-12">
          <ul className="space-y-4">
            {sectionIds.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className="group flex items-center py-2">
                  <span
                    className={`nav-indicator mr-4 h-px w-8 transition-all group-hover:w-16 group-hover:bg-dusty-rose ${
                      activeSection === id
                        ? "w-16 bg-dusty-rose"
                        : "bg-mauve-gray"
                    }`}
                  ></span>
                  <span
                    className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors group-hover:text-navy-dark dark:group-hover:text-dusty-rose ${
                      activeSection === id
                        ? "text-navy-dark dark:text-dusty-rose"
                        : "text-mauve-gray dark:text-parchment/70"
                    }`}
                  >
                    {id}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Social Links */}
      <div className="flex items-center mt-8 lg:mt-0">
        <a
          href={personalInfo.socials.github}
          target="_blank"
          rel="noreferrer"
          className="mr-4 text-slate-blue hover:text-navy-dark dark:text-mauve-gray dark:hover:text-dusty-rose transition-all duration-300 hover:scale-110"
        >
          <LuGithub size={24} />
        </a>
        <a
          href={personalInfo.socials.linkedin}
          target="_blank"
          rel="noreferrer"
          className="mr-4 text-slate-blue hover:text-navy-dark dark:text-mauve-gray dark:hover:text-dusty-rose transition-all duration-300 hover:scale-110"
        >
          <SlSocialLinkedin size={24} />
        </a>
      </div>
    </header>
  );
}
