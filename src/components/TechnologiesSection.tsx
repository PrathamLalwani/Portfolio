import Technology from "./Technology";
import { Technologies as TechnologiesData } from "../assets/resume.json";

const TechnologiesSection = () => {
  return (
    <section>
      <div>
        <h2 className="mb-3 inline-block text-5xl font-bold text-text">
          Technologies
        </h2>
        <div className="ml-5 inline-block items-center text-center align-middle text-xl "></div>
      </div>
      <p className="mb-5 pl-2 text-lg leading-8 text-text">
        I have worked with a range of technologies in the web development and
        machine learning space. Always looking to learn new technologies and
        frameworks. Here are a few that I have worked with:
      </p>
      <div className="p-0md:p-2 flex w-full flex-shrink-0 flex-grow-0 basis-0 flex-row flex-wrap items-center justify-center">
        {TechnologiesData.map((technology) => (
          <Technology
            key={technology.name}
            iconName={technology.name}
          ></Technology>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesSection;
