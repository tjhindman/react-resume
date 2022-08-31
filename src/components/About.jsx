import React from "react";

import proPic from "../assets/tj-work.jpg";

const About = () => {
  return (
    <div
      className="flex flex-col justify-around md:flex-row w-[100%]"
      id="about"
    >
      {/* professional headshot/full body pic of ya boi */}
      <img
        className="rounded-[10%] drop-shadow-2xl self-center w-[80%] md:w-[30%]"
        src={proPic}
        alt="TJ Hindman looking good"
      />
      <div className="flex flex-col justify-around md:w-[60%]">
        <h1 className="text-center font-bold text-3xl xs:my-8 md:text-5xl">Why choose me?</h1>
        <p>
          Should have a paragraph describing my pathway into software
          development and my progress so far. Should also include my skills and
          any past projects I've contributed to (no links to the past
          projects... just a brief description of the project goals and what I
          contributed to).
        </p>
        <div className="flex justify-around xs:my-8 md:justify-end">
          <a className="mx-4" href="#contact">
            <button>Hire Me!</button>
          </a>
          {/* should have .pdf file attached to "href" (see edubaba ex) */}
          <a className="mx-4" href="">
            <button>Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
