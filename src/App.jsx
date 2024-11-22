import "./App.css";
import Aboutme from "./components/Aboutme";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import WorkTogether from "./components/WorkTogether";

function App() {
  return (
    <>
      <div className="sticky top-0 bg-[#f0dccb]">
        <ul className="flex justify-evenly  whitespace-nowrap flex-wrap py-4 gap-4 text-xl font-semibold lg:font-bold lg:text-3xl text-[#252525]">
          <li className="cursor-pointer hover:scale-110 group">
            Home
            <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </li>
          <li className="cursor-pointer hover:scale-110 group">
            Projects
            <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </li>
          <li className="cursor-pointer hover:scale-110 group">
            About
            <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </li>
          <li className="cursor-pointer hover:scale-110 group">
            Work Together
            <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </li>
        </ul>
        <div className="bg-[#4E5E80] h-[2px] w-full"></div>
      </div>
      <Landing />
      <Projects />
      <Aboutme />
      <WorkTogether />
    </>
  );
}

export default App;
