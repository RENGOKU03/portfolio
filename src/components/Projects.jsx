import React from "react";

const Projects = () => {
  const projects = [
    [
      "ViewTube",
      "viewtube1",
      ["viewtube1", "viewtube2"],

      "lksfjglkajdskljaskldgjlaksjdgkajsdklg LKEJFLAKSJDFLKJASDLKFJAKLSDJFKLAJSDKFJASKDJFKAJSDJKLJKLSJFDLKJSLDKJSRETJOGJWEGKWLKFGNKSLDFNGKLSDKLFGSDFKLGSKLDFGLKSMFDLKGMSLKDMGLKSMDKLFGMSLKEMGTRWELIRJGWOIEMGLSKMFGKETMG",
      "https://rengoku-youtube-clone.netlify.app/",
      ["React Js", "Tailwind Css", "Youtube Api"],
    ],
    [
      "MiniProject",
      "minipro1",
      ["minipro1,minipro2"],

      "lksfjglkajdskljaskldgjlaksjdgkajsdklg LKEJFLAKSJDFLKJASDLKFJAKLSDJFKLAJSDKFJASKDJFKAJSDJKLJKLSJFDLKJSLDKJSRETJOGJWEGKWLKFGNKSLDFNGKLSDKLFGSDFKLGSKLDFGLKSMFDLKGMSLKDMGLKSMDKLFGMSLKEMGTRWELIRJGWOIEMGLSKMFGKETMG",
      "https://rengoku-miniprojects.netlify.app",
      ["React Js", "Tailwind Css", "Github and Items Api"],
    ],
    [
      "Recipe",
      "recipe1",
      ["recipe1,recipe2"],

      "lksfjglkajdskljaskldgjlaksjdgkajsdklg LKEJFLAKSJDFLKJASDLKFJAKLSDJFKLAJSDKFJASKDJFKAJSDJKLJKLSJFDLKJSLDKJSRETJOGJWEGKWLKFGNKSLDFNGKLSDKLFGSDFKLGSKLDFGLKSMFDLKGMSLKDMGLKSMDKLFGMSLKEMGTRWELIRJGWOIEMGLSKMFGKETMG",
      "https://rengoku-food-api.netlify.app",
      ["React Js", "Tailwind Css", "Recipe Rapid Api"],
    ],
    [
      "Weather",
      "weather1",
      ["weather1,weather2"],

      "lksfjglkajdskljaskldgjlaksjdgkajsdklg LKEJFLAKSJDFLKJASDLKFJAKLSDJFKLAJSDKFJASKDJFKAJSDJKLJKLSJFDLKJSLDKJSRETJOGJWEGKWLKFGNKSLDFNGKLSDKLFGSDFKLGSKLDFGLKSMFDLKGMSLKDMGLKSMDKLFGMSLKEMGTRWELIRJGWOIEMGLSKMFGKETMG",
      "https://rengoku-weatherapi.netlify.app",
      ["React Js", "Tailwind Css", "Weather Rapid Api"],
    ],
    [
      "Shopping Cart",
      "shoppingcart1",
      ["shoppingcart1,shoppingcart2"],

      "lksfjglkajdskljaskldgjlaksjdgkajsdklg LKEJFLAKSJDFLKJASDLKFJAKLSDJFKLAJSDKFJASKDJFKAJSDJKLJKLSJFDLKJSLDKJSRETJOGJWEGKWLKFGNKSLDFNGKLSDKLFGSDFKLGSKLDFGLKSMFDLKGMSLKDMGLKSMDKLFGMSLKEMGTRWELIRJGWOIEMGLSKMFGKETMG",
      "https://renogoku-shopping-redux-cart.netlify.app",
      ["React Js", "Tailwind Css", "Demo Items Api"],
    ],
    [
      "Expense Tracker",
      "expense1",
      ["expense1,expense2"],

      "lksfjglkajdskljaskldgjlaksjdgkajsdklg LKEJFLAKSJDFLKJASDLKFJAKLSDJFKLAJSDKFJASKDJFKAJSDJKLJKLSJFDLKJSLDKJSRETJOGJWEGKWLKFGNKSLDFNGKLSDKLFGSDFKLGSKLDFGLKSMFDLKGMSLKDMGLKSMDKLFGMSLKEMGTRWELIRJGWOIEMGLSKMFGKETMG",
      "https://rengoku-expense-tracker.netlify.app",
      ["React Js", "Tailwind Css", "Firebase", "Google Authentication"],
    ],
    ,
  ];
  return (
    <div className="bg-[#fbcca3] p-5 sm:p-10 lg:px-14">
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
                {item[3]}
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <button className="bg-blue-200 p-2 rounded-md text-sm 3xs:text-lg font-semibold text-[#171717]">
                  {item[5][0]}
                </button>
                <button className="bg-red-200 p-2 rounded-md text-sm 3xs:text-lg font-semibold text-[#171717]">
                  {item[5][1]}
                </button>
                <button className="bg-gray-200 p-2 rounded-md text-sm 3xs:text-lg font-semibold text-[#171717]">
                  {item[5][2]}
                </button>
                {item[5][3] && (
                  <button className="bg-yellow-200 p-2 rounded-md text-sm 3xs:text-lg font-semibold text-[#171717]">
                    {item[5][3]}
                  </button>
                )}
              </div>

              <a href={item[4]} target="blank">
                <button className="bg-red-700 text-white p-2 rounded-md text-sm 3xs:text-lg font-semibold  hover:scale-110 ">
                  View Project
                </button>
              </a>
            </div>
            <div className="flex justify-center py-4 lg:p-0 lg:w-1/2 cursor-pointer ">
              <img src={`${item[1]}.png`} alt="" />;
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
