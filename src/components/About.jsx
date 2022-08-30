import React from "react";

import proPic from "../assets/tj-work.jpg";

const About = () => {
  return (
    <div
      className="flex flex-col justify-around md:flex-row w-[100%] h-[60%]"
      id="about"
    >
      {/* professional headshot/full body pic of ya boi */}
      <img
        className="rounded-[50%] md:w-[30%] after:content-[''] after:block after:pb-[100%]"
        src={proPic}
        alt="TJ Hindman looking good"
      />
      <div className="flex flex-col justify-around md:w-[60%]">
        <h1 className="text-center font-bold text-3xl">Why choose me?</h1>
        <p>
          Should have a paragraph describing my pathway into software
          development and my progress so far. Should also include my skills and
          any past projects I've contributed to (no links to the past
          projects... just a brief description of the project goals and what I
          contributed to).
        </p>
        <div className="flex justify-around md:justify-end">
          <a className="appearance-none" href="#contact">
            <button>Hire Me!</button>
          </a>
          {/* should have .pdf file attached to "href" (see edubaba ex) */}
          <a href="">
            <button>Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
