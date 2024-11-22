import React from "react";

const Aboutme = () => {
  return (
    <div className="bg-[#f0dccb] p-5 flex flex-col gap-4 sm:p-10">
      <div className="md:flex ">
        <div className="md:w-1/2 self-center">
          <p className="text-2xl 3xs:text-3xl font-bold whitespace-nowrap text-[#252525]">
            A little Bit About Me
          </p>
          <p className="text-sm 3xs:text-base text-[#272727]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quis
            obcaecati suscipit laborum eos alias! Voluptate, adipisci quidem?
            Possimus esse officiis placeat id accusamus non expedita dolorem
            laborum animi a. Dignissimos fuga dolores minus, nihil dolorum ipsum
            unde exercitationem laudantium.
          </p>
          <div className="flex flex-col gap-4 justify-center 3xs:flex-row text-xs 3xs:text-sm pt-5">
            <button className="text-[#4E5E80] px-3 py-2 rounded-md font-bold  border-2 border-[#4D5566]">
              Contact Me
            </button>
            <button className="text-[#4E5E80] px-3 py-2 rounded-md font-bold  border-2 border-[#4D5566]">
              Downlod Resume
            </button>
          </div>
        </div>
        <div className="flex justify-center md:w-1/2">
          <img className="w-1/2 md:w-[400px]" src="./dev2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
