import { ArrowUpRight } from "lucide-react";
import { Section } from "../components/Section";
import { personalInfo } from "../data/personalInfo";

export const Contact = () => (
  <Section id="contact">
    <h2 className="text-2xl font-bold text-slate-blue dark:text-dusty-rose">
      Get In Touch
    </h2>
    <p className="mt-4 text-slate-blue dark:text-parchment">
      I'm always open to new opportunities and collaborations. Feel free to
      reach out if you have a project in mind or just want to connect!
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
);
