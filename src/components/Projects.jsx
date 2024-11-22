import React from "react";

const Projects = () => {
  const projects = [
    [
      "ViewTube",
      "viewtube1",
      "lksfjglkajdskljaskldgjlaksjdgkajsdklg LKEJFLAKSJDFLKJASDLKFJAKLSDJFKLAJSDKFJASKDJFKAJSDJKLJKLSJFDLKJSLDKJSRETJOGJWEGKWLKFGNKSLDFNGKLSDKLFGSDFKLGSKLDFGLKSMFDLKGMSLKDMGLKSMDKLFGMSLKEMGTRWELIRJGWOIEMGLSKMFGKETMG",
      "https://rengoku-youtube-clone.netlify.app/",
    ],
    [
      "MiniProject",
      "minipro",
      "lksfjglkajdskljaskldgjlaksjdgkajsdklg LKEJFLAKSJDFLKJASDLKFJAKLSDJFKLAJSDKFJASKDJFKAJSDJKLJKLSJFDLKJSLDKJSRETJOGJWEGKWLKFGNKSLDFNGKLSDKLFGSDFKLGSKLDFGLKSMFDLKGMSLKDMGLKSMDKLFGMSLKEMGTRWELIRJGWOIEMGLSKMFGKETMG",
      "https://rengoku-youtube-clone.netlify.app/",
    ],
  ];
  return (
    <div className="bg-[#fbcca3] p-5 sm:p-10 ">
      <p className="text-2xl 3xs:text-4xl  font-bold text-[#282727] mb-4 underline underline-offset-4 ">
        Projects
      </p>
      {projects.map((item) => {
        return (
          <div className="bg-[#f0efef] p-5 lg:gap-3 rounded-xl mt-5 lg:flex">
            <div className="lg:w-1/2">
              <p className="text-2xl 3xs:text-3xl font-bold text-[rgb(40,39,39)] mb-4">
                {item[0]}
              </p>
              <p className="mb-4 text-[#494949] text-xs 3xs:text-sm overflow-hidden pr-3">
                {item[2]}
              </p>
              <a href={item[3]} target="blank">
                <button className="bg-[#ffbe85] p-2 rounded-md text-sm 3xs:text-lg font-semibold text-[#171717] hover:scale-110 hover:text-blue-600">
                  View Project
                </button>
              </a>
            </div>
            <div className="flex justify-center py-4 lg:p-0 lg:w-1/2">
              <img src={`./${item[1]}.png`} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
