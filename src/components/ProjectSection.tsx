import Project from "./Project";
import { Element } from "react-scroll";
import { Project as ProjectData } from "../assets/resume.json";
// type Props = { children?: React.ReactNode };

const ProjectSection = () => {
  return (
    <Element name="Projects">
      <section>
        <h2 className="mb-12 text-5xl font-bold text-text">Projects</h2>
        {ProjectData.map((project) => {
          return (
            <Project
              key={project.projectName}
              img_path={project.img_path}
              projectName={project.projectName}
              description={project.description}
              techStack={project.techStack}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            ></Project>
          );
        })}
      </section>
    </Element>
  );
};
export default ProjectSection;
