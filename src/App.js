import Nav from "./components/Nav";
import About from "./components/About";

import "./App.css";

function App() {
  return (
    <div className="">
      <h1 className="text-center text-5xl font-bold py-6 md:text-7xl">
        TJ Hindman
      </h1>
      <div className="flex justify-center w-full">
        {/* SQUARE BRACKETS [] ALLOW FOR CUSTOM SIZING OPTIONS FOR TAILWIND!!! */}
        <p className="text-center text-slate-400 pb-6 mb-6 border-b-2 border-slate-200 w-[80%]">
          Info here giving a short summary of who I am as a dev.
        </p>
      </div>
      {/*
       *** SHOULD TRY TO SEE IF THERE IS A WAY TO CONNECT TO LINKEDIN API AND CYCLE THROUGH REVIEWS THAT WERE LEFT FOR ME ***
       */}
      {/* nav bar should go underneath title above and include About me/Projects (Recommendations? Resume?)/Contact Me tabs */}
      <Nav />
      {/*
        underneath nav should be About me section. should include:
          - profile picture of me
          - header with "Why choose me?" with a paragraph explaining my background and including skills I've picked up.
          - underneath should have a "Hire Me" (should snap to "Contact Me" section of page) and "Get Resume" (should download a .pdf of my resume when someone clicks) buttons [maybe Github and LinkedIn icons next to these buttons?]
          - header and background paragraph should be to the right of profile pic
      */}
      <About />
      {/* 
        potential "Resume" section highlighting my education background, work history and programming skills?
      */}
      {/* 
        "Projects" section would go underneath "About me" section IF "Resume" IS NOT INCLUDED!!!
          - would be a side scroll of any projects I may have worked on with a link to the deployed application (maybe include my Github profile link here if I don't have more than 1 project to show)
      */}
      {/* 
        potential "Recommendations" section based on LinkedIn recommendations if I can figure out how to hook up to their API (might just copy + paste if not)
          - would also be a side scroll of cards for each recommendation with their profile pic, name and recommendation
      */}
      {/* 
        "Contact Me" section will be last
          - should include Name, Business Name (optional), Email and Message inputs
          - might want to include an icon to my github/linkedin in this section???
      */}
    </div>
  );
}

export default App;
