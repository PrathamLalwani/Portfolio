import React from "react";
import Technology from "./Technology";
import { Technologies as TechnologiesData } from "../assets/resume.json";

const TechnologiesSection = () => {
  return (
    <section>
      <h2 className="mb-3 text-5xl font-bold text-text">Technologies</h2>
      <div className="flex w-full flex-shrink-0 flex-grow-0 basis-0 flex-row flex-wrap items-center justify-center p-2">
        {TechnologiesData.map((technology) => (
          <Technology key={technology} iconName={technology}></Technology>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesSection;
