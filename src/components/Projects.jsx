import React from "react";
import { projArr } from "../assets/projects.js";

const Projects = () => {
  return (
    <div className="flex flex-col w-[100%]" id="projects">
      <h1 className="self-start font-bold text-3xl my-8 md:my-20 md:text-5xl">
        Projects
      </h1>
      <div className="flex flex-col items-center max-h-[36vh] md:max-h-[43vh] overflow-y-auto">
        {projArr.map((proj) => (
          <a className="w-[90%] my-2" href={proj.url} target="_blank">
            <button className="flex justify-between items-center rounded-[10px] transition ease-in delay-150 hover:-translate-y-2 duration-400">
              <img className="w-[20%]" src={proj.img} alt={proj.name} />
              <div className="w-[80%] text-center">{proj.name}</div>
            </button>
          </a>
        ))}
      </div>
      <a
        className="self-end my-8 underline hover:text-blue-400 active:text-blue-900 visited:text-blue-600"
        href="https://github.com/tjhindman"
        target="_blank"
      >
        Check out my Github for more code!
      </a>
    </div>
  );
};

export default Projects;
