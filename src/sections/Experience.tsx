import { ExperienceItem } from "../components/ExperienceItem";
import { Section } from "../components/Section";
import { experienceData } from "../data/experienceData";

export const Experience = () => (
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
);
