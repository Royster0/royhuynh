import { Section } from "../components/Section";
import { SkillBar } from "../components/SkillBar";
import { skillsData } from "../data/skillsData";

export const Skills = () => (
  <Section id="skills">
    <h2 className="text-2xl font-bold text-slate-blue dark:text-dusty-rose">
      Skills
    </h2>
    <div className="mt-4 space-y-6">
      {skillsData.map((skill) => (
        <SkillBar key={skill.name} name={skill.name} level={skill.level} />
      ))}
    </div>
  </Section>
);
