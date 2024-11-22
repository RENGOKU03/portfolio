import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const WorkTogether = () => {
  return (
    <div className="bg-[#fbcca3] p-5 sm:p-10 lg:px-14">
      <p className="text-xl 3xs:text-2xl font-bold text-[#282727] mb-4">
        Let's Work Together and make something great, someting usefull, someting
        memorable.
      </p>
      <div className="flex justify-between 3xs:justify-center gap-6">
        <button className="text-[#4E5E80]  px-3 py-2 rounded-md font-bold text-xs 3xs:text-sm lg:text-lg border-2 border-[#4D5566]">
          Contact Me
        </button>
        <div className="flex gap-3 justify-center">
          <a href="https://github.com/RENGOKU03" target="blank">
            <FaGithub className="size-8 lg:size-14" />
          </a>
          <a
            href="https://www.linkedin.com/in/chetan-patil-169474264"
            target="blank"
          >
            <FaLinkedin className="size-8 lg:size-14" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkTogether;
