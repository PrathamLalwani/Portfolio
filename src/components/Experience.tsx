import React from "react";

type ExperienceProps = {
  children?: React.ReactNode;
  company: string;
  duration: string;
  title: string;
  description: string;
  showBorder?: boolean;
};

const Experience: React.FC<ExperienceProps> = (props: ExperienceProps) => {
  return (
    <section>
      <div
        className={` before:-translate-x-[1.7rem] ${
          props.showBorder &&
          "border-l-2 border-solid border-l-primary-300 before:-translate-x-[1.82rem]"
        } max-h-max p-5 pt-0 before:absolute  
        before:inline-block before:h-4 before:w-4 before:content-normal
        before:rounded-full before:bg-primary before:shadow-primary before:drop-shadow-xl`}
      >
        <div
          className={`${
            props.showBorder
              ? "-translate-x-[1.82rem]"
              : "-translate-x-[1.7rem]"
          } absolute h-4 w-4 rounded-full bg-primary blur`}
        ></div>
        <div className="inline-block w-full p-[-10px]  align-super md:w-11/12 ">
          <h4 className="-translate-y-2   text-2xl text-text ">
            {props.title}
          </h4>
          <p className="pb-2 text-lg text-text">{props.company}</p>

          <p className="py-2 text-xl text-text">{props.duration}</p>
          <p className="py-2 text-lg text-text">{props.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
