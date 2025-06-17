import { ProjectItem } from "../components/ProjectItem";
import { Section } from "../components/Section";
import { projectsData } from "../data/projectsData";

export const Projects = () => (
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
);
