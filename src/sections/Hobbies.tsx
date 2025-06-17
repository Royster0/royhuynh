import { AnimatePresence, motion } from "framer-motion";
import { Section } from "../components/Section";
import { hobbiesData } from "../data/hobbiesData";
import { useState } from "react";

export const Hobbies = () => {
  const [selectedHobby, setSelectedHobby] = useState(hobbiesData[0]);

  return (
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
  );
};
