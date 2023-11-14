import Project from "./Project";
import { Element } from "react-scroll";
// type Props = { children?: React.ReactNode };

const ProjectSection = () => {
  return (
    <Element name="Projects">
      <section>
        <h2 className="mb-3 text-5xl font-bold text-text">Projects</h2>
        <Project
          projectName="Lorem ipsum"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
          techStack={["React", "Node.js", "Express", "JavaScript", "TypeScript", "AWS"]}
          githubLink="test.com"
          liveLink="test.com"
        ></Project>
      </section>
    </Element>
  );
};
export default ProjectSection;
