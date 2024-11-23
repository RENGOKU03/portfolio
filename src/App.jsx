import { useRef } from "react";
import "./App.css";
import Aboutme from "./components/Aboutme";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import WorkTogether from "./components/WorkTogether";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const handleHomeClick = () => {
    homeRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  const handleProjectCLick = () => {
    projectRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  const handleContactClick = () => {
    contactRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="sticky top-0 bg-[rgb(250,202,159)]">
        <ul className="flex justify-evenly md:justify-start md:px-10 md:gap-6  whitespace-nowrap flex-wrap py-4 gap-4 text-xl font-semibold lg:font-bold lg:text-3xl text-[#252525]">
          <li
            className="cursor-pointer hover:scale-110 group"
            onClick={() => handleHomeClick()}
          >
            Home
            <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </li>
          <li
            className="cursor-pointer hover:scale-110 group"
            onClick={() => handleProjectCLick()}
          >
            Projects
            <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </li>
          <li
            className="cursor-pointer hover:scale-110 group"
            onClick={() => handleAboutClick()}
          >
            About
            <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </li>
          <li
            className="cursor-pointer hover:scale-110 group"
            onClick={() => handleContactClick()}
          >
            Work Together
            <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </li>
        </ul>
        <div className="bg-[#4E5E80] h-[2px] w-full"></div>
      </div>
      <div ref={homeRef}>
        <Landing />
      </div>
      <div ref={projectRef}>
        <Projects />
      </div>
      <div ref={aboutRef}>
        <Aboutme />
      </div>
      <div ref={contactRef}>
        <WorkTogether />
      </div>
    </>
  );
}

export default App;
