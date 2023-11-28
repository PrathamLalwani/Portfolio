/// <reference types="vite-plugin-svgr/client" />

import React, { useState, useRef, useEffect, useCallback } from "react";
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
  const [overflowActive, setOverflowActive] = useState<boolean>(true);
  const [showMore, setShowMore] = useState<boolean>(false);
  const overflowingText = useRef<HTMLSpanElement | null>(null);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const checkOverflow = (textContainer: HTMLSpanElement | null): boolean => {
    if (textContainer)
      return (
        textContainer.offsetHeight < textContainer.scrollHeight ||
        textContainer.offsetWidth < textContainer.scrollWidth
      );
    return false;
  };
  const onShowMore = () => {
    setShowMore((prev) => !prev);
  };
  const handleWindowResize = useCallback(() => {
    setWindowSize(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);
  useEffect(() => {
    if (checkOverflow(overflowingText.current)) {
      setOverflowActive(true);
      return;
    }
    setOverflowActive(false);
  }, [overflowActive, windowSize]);
  return (
    <div className="m-5 flex h-full w-max flex-col items-center rounded-2xl border-2 border-slate-400/50 bg-background-50 bg-opacity-10 px-3 py-5 backdrop-blur-md transition-all ease-in-out sm:p-5 md:items-start">
      <div className="h-52 w-52 shrink-0 rounded-md sm:h-64 sm:w-64 md:h-96 md:w-96 ">
        <img
          src={getImgUrl(props.img_path)}
          alt={props.projectName}
          className="h-full w-full rounded-md bg-center object-contain"
        />
      </div>
      <div className="flex w-52 flex-col sm:w-64 md:w-96">
        <h4 className="my-2 text-xl text-primary">{props.projectName}</h4>
        <div className="my-2 py-2">
          {" "}
          <span
            ref={overflowingText}
            className={`relative line-clamp-2 w-full overflow-hidden overflow-ellipsis text-sm text-text sm:text-base ${
              showMore
                ? "line-clamp-none h-fit overflow-visible"
                : overflowActive
                ? "h-10 sm:h-12"
                : "h-14 sm:h-[4.5rem]"
            }`}
          >
            {props.description}
          </span>
          {!showMore && !overflowActive ? null : (
            <button className="text-accent" onClick={onShowMore}>
              {showMore ? "Show less" : "Show more"}
            </button>
          )}
        </div>

        <h5 className="text-l text-primary">Tech Stack</h5>
        <ul className="flex flex-wrap">
          {props.techStack.map((tech) => (
            <li
              key={tech}
              className="text-md my-2 mr-1 w-max rounded-lg  px-2 py-1 text-text"
              title={tech}
            >
              {
                <SvgIcon
                  key={tech}
                  iconName={tech}
                  size={40}
                  onError={console.error}
                  onCompleted={console.log}
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
                onError={console.error}
                onCompleted={console.log}
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
                  onError={console.error}
                  onCompleted={console.log}
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
