import "./App.css";
import Contact from "./components/Contact";
import { ExperienceSection } from "./components/ExperienceSection";
import NavBar from "./components/NavBar";
import ProjectSection from "./components/ProjectSection";
import { Element } from "react-scroll";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";

function App() {
  return (
    <div className="background box-border bg-background text-text">
      <NavBar />

      <main className="min-w-full px-9 md:px-12">
        <Element className="flex items-center justify-center " name="Home">
          <section className=" flex h-[calc(100vh-80px)] w-full flex-col justify-center text-center md:w-7/12 ">
            <h2 className="inline-block bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text py-2 text-5xl font-extrabold text-transparent md:text-7xl">
              Pratham Lalwani
            </h2>
            <h3 className="py-2 text-xl text-text md:text-3xl">
              Software Developer and Machine Learning Researcher
            </h3>
            <p className="py-5 text-lg leading-8 text-text">
              Building things that make a difference. When I am not coding, I am
              probably crocheting, making music, or playing chess.
            </p>

            <span className="flex w-full flex-row items-center justify-center">
              <a href="https://linkedin.com/in/pratham-lalwani" target="_blank">
                <SlSocialLinkedin
                  size="2rem"
                  className="mr-5 hover:cursor-pointer hover:text-blue-500"
                />
              </a>{" "}
              <a href="https://github.com/PrathamLalwani" target="_blank">
                {" "}
                <FiGithub
                  size="2rem"
                  className="hover:cursor-pointer hover:text-primary"
                />
              </a>
            </span>
          </section>
        </Element>
        <ProjectSection></ProjectSection>
        <ExperienceSection></ExperienceSection>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
