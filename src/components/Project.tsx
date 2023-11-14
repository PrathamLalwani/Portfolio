/// <reference types="vite-plugin-svgr/client" />

import React from "react";
import SvgIcon from "./SvgIcon";
type Props = {
  children?: React.ReactNode;
  projectName: string;
  description: string;
  techStack: string[];
  githubLink: string;
  liveLink: string;
};

const Project = (props: Props) => {
  return (
    <div className="flex h-fit w-fit flex-col items-center rounded-md bg-background-50 px-3 py-5 transition-all ease-in-out hover:shadow-2xl hover:shadow-accent sm:p-5 md:items-start">
      <div className="h-52 w-52 shrink-0 rounded-md bg-blue-500 sm:h-64 sm:w-64 md:h-96 md:w-96 "></div>
      <div className="flex w-52 flex-col sm:w-64 md:w-96">
        <h4 className="my-2 text-xl text-primary">{props.projectName}</h4>
        <p className="py-2 text-sm text-text sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab officiis
          veniam dolores laborum sapiente eaque voluptatem, odio dignissimos
          vero quos reiciendis, rem culpa harum nesciunt?
        </p>
        <h5 className="text-l text-primary">Tech Stack</h5>
        <ul className="flex flex-wrap">
          {props.techStack.map((tech) => (
            <li
              key={tech}
              className="text-md my-2 mr-1 max-w-full rounded-lg bg-background-50  px-2 py-1 text-text"
              title={tech}
            >
              {
                <SvgIcon
                  iconName={tech}
                  size={0}
                  className=" h-5 w-5 fill-text sm:h-6 sm:w-6"
                />
              }
            </li>
          ))}
        </ul>
        <h5 className="text-l text-primary">Links</h5>
        <ul className="flex flex-wrap">
          <li className="text-md my-2 mr-1 flex w-max items-center rounded-lg bg-background-50 px-2 py-1 text-text">
            <a href={props.githubLink}>
              <SvgIcon
                iconName="GitHub"
                size={24}
                className="fill-secondary-950"
              ></SvgIcon>
            </a>
          </li>
          <li className="text-md my-2 mr-1 w-max rounded-lg  px-2 py-1 text-text">
            <a href={props.liveLink}>
              <SvgIcon
                iconName="live"
                size={24}
                className="fill-secondary-950"
              ></SvgIcon>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Project;
