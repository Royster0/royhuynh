import { EducationItem } from "../components/EducationItem";
import { Section } from "../components/Section";
import { educationData } from "../data/educationData";

export const Education = () => (
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
);
