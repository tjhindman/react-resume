// import "./Nav.css";

const Nav = () => {
  return (
    <nav className="flex flex-col pb-6 md:flex-row">
      <a className="hover:text-primary active:text-clicked" href="#about">
        About Me
      </a>
      {/* 
        *** maybe ***
        <a href="">Resume</a>
      */}
      <a className="hover:text-primary active:text-clicked" href="#projects">
        Projects
      </a>
      <a
        className="hover:text-primary active:text-clicked"
        href="#recommendations"
      >
        Recommendations
      </a>
      <a className="hover:text-primary active:text-clicked" href="#contact">
        Contact Me
      </a>
    </nav>
  );
};

export default Nav;
