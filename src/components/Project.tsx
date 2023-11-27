/// <reference types="vite-plugin-svgr/client" />

import React from "react";
import SvgIcon from "./SvgIcon";
type Props = {
  children?: React.ReactNode;
  img_path: string;
  projectName: string;
  description: string;
  techStack: string[];
  githubLink: string;
  liveLink?: string;
};

const Project = (props: Props) => {
  const getImgUrl = (name: string) =>
    new URL(`../assets/ProjectPictures/${name}`, import.meta.url).href;

  return (
    <div className="m-5 flex h-full w-fit flex-col items-center rounded-2xl border-2 border-slate-400/50 bg-background-50 bg-opacity-10 px-3 py-5 backdrop-blur-md transition-all ease-in-out sm:p-5 md:items-start">
      <div className="h-52 w-52 shrink-0 rounded-md sm:h-64 sm:w-64 md:h-96 md:w-96 ">
        <img
          src={getImgUrl(props.img_path)}
          alt={props.projectName}
          className="h-full w-full rounded-md bg-center object-contain"
        />
      </div>
      <div className="flex w-52 flex-col sm:w-64 md:w-96">
        <h4 className="my-2 text-xl text-primary">{props.projectName}</h4>
        <p className="py-2 text-sm text-text sm:text-base">
          {props.description}
        </p>
        <h5 className="text-l text-primary">Tech Stack</h5>
        <ul className="flex flex-wrap">
          {props.techStack.map((tech) => (
            <li
              key={tech}
              className="text-md my-2 mr-1 max-w-full rounded-lg  px-2 py-1 text-text"
              title={tech}
            >
              {
                <SvgIcon
                  key={tech}
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
          <li className="text-md my-2 mr-1 flex w-max items-center rounded-lg px-2 py-1 text-text">
            <a href={props.githubLink} target="_blank">
              <SvgIcon
                iconName="GitHub"
                size={24}
                className="fill-secondary-950"
              ></SvgIcon>
            </a>
          </li>
          {props.liveLink && (
            <li className="text-md my-2 mr-1 w-max rounded-lg  px-2 py-1 text-text">
              <a href={props.liveLink} target="_blank">
                <SvgIcon
                  iconName="live"
                  size={24}
                  className="fill-secondary-950"
                ></SvgIcon>
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Project;
