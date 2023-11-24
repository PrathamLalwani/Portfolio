import React from "react";
// import Experience from "./Experience";
import { Experience as ExperienceData } from "../assets/resume.json";
import Experience from "./Experience";
import { Element } from "react-scroll";
type ExperienceType = {
  company: string;
  duration: string;
  description: string;
  title: string;
};

export const ExperienceSection: React.FC = () => {
  return (
    <Element name="Experience">
      <section id="Experience" className="h-fit-content mb-20 mt-20">
        <div className="flex h-fit justify-between ">
          <div className="h-fit w-11/12">
            <h4 className="mb-5 py-2 text-5xl font-bold text-text">
              Experience
            </h4>
            <div className=" w-full rounded-xl border-2 border-slate-400/10 p-5 backdrop-blur-xl lg:w-1/2 ">
              {ExperienceData.map(
                (experience: ExperienceType, i: number): React.ReactNode => {
                  return (
                    <Experience
                      company={experience.company}
                      duration={experience.duration}
                      description={experience.description}
                      title={experience.title}
                      key={i}
                      showBorder={i !== ExperienceData.length - 1}
                    ></Experience>
                  );
                },
              )}
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};
