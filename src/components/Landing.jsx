import React from "react";

const Landing = () => {
  return (
    <div className=" bg-[rgb(240,220,203)] p-5 sm:p-10">
      <div className="md:flex justify-center">
        <div className="md:w-1/2">
          <div className="pt-10 ">
            <span className="text-xs 3xs:text-lg bg-[#e3b58b] p-2 rounded-md font-bold">
              <span className="text-xl ">👋</span> Hello All
            </span>
          </div>
          <div className="text-2xl 3xs:text-4xl font-bold text-[#191919] pt-5">
            <p>I'm Chetan Patil,</p>
            <p>A Front-end</p>
            <p>Web Developer.</p>
          </div>
          <div className="flex gap-2 sm:gap-8 justify-center pt-5 pb-5 font-bold text-xs 3xs:text-lg md:justify-start">
            <button className="bg-[#4E5E80] text-white px-3 py-2 rounded-md flex gap-2  justify-center items-center">
              View My Work{" "}
              <img src="./rightsquare.svg" alt="" className="w-4" />
            </button>
            <button className="text-[#4E5E80] px-3 py-2 rounded-md   border-2 border-[#4D5566]">
              Contact Me
            </button>
          </div>
        </div>

        <div className="flex justify-center pt-5 md:pt-0 md:w-1/2">
          <img className="w-1/2 md:w-[400px]" src="./profile.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
