import React from "react";
import projArr from "../assets/projects.json";

const Projects = () => {
  return (
    <div className="flex flex-col w-[100%] h-[50vh]" id="projects">
      <h1 className="self-start font-bold text-3xl my-8 md:my-20 md:text-5xl">
        Projects
      </h1>
      <div className="flex flex-col items-center">
        {projArr.map((proj) => (
          <a className="w-[90%]" target="_blank" href={proj.url}>
            <button className="rounded-[10px]">{proj.name}</button>
          </a>
        ))}
      </div>
      <a className="self-end" href="">Check out my Github for more code!</a>
    </div>
  );
};

export default Projects;
