import React from "react";

const Landing = () => {
  return (
    <div className=" bg-[#f0dccb]">
      <div className="sticky top-0 bg-[#f0dccb]">
        <ul className="flex justify-evenly whitespace-nowrap pt-4">
          <div>
            <li className="cursor-pointer hover:scale-110">Home</li>
            <li className="cursor-pointer hover:scale-110">Projects</li>
          </div>
          <div>
            <li className="cursor-pointer hover:scale-110">About</li>
            <li className="cursor-pointer hover:scale-110">Work Together</li>
          </div>
        </ul>
      </div>
      <div className="mt-10 pl-4">
        <span className="text-xs bg-[#e3b58b] p-2 rounded-md font-bold">
          <span className="text-xl">👋</span> Hello All
        </span>
      </div>
      <div>
        <div className="text-2xl font-bold text-[#191919] pl-4 pt-5">
          <p>I'm Chetan Patil,</p>
          <p>A Front-end</p>
          <p>Web Developer.</p>
        </div>
        <div className="flex justify-center pt-5">
          <img className="w-1/2" src="./profile.png" alt="" />
        </div>
        <div className="flex gap-2 justify-center pt-5 pb-5">
          <button className="bg-[#4E5E80] text-white px-3 py-2 rounded-md flex gap-2 text-xs justify-center items-center">
            View My Work <img src="./rightsquare.svg" alt="" className="w-4" />
          </button>
          <button className="text-[#4E5E80] px-3 py-2 rounded-md font-bold text-xs border-2 border-[#4D5566]">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
