import Component1 from "../../../ReusableComponents/Component1/Component1";
import Component3 from "../../../ReusableComponents/Component3/Component3";
import vector from "../../../assets/Vector.png";
import frame1 from "../../../assets/Frame.png";
import frame2 from "../../../assets/Frame (1).png";

import img1 from "../../../assets/Icon_ code.png";
import img2 from "../../../assets/Icon_ web-site.png";
import img3 from "../../../assets/Icon_ daisy.png";
// import SceneWrapper from "../Portfolio/Portfolio";
export default function Card3() {
  const theme1 = {
    theme: "HTML/CSS/JS",
    image: vector,
    text: "Semantic layout & interactive UI Building responsive, accessible and animated interfaces",
  };
  const theme2 = {
    theme: "React",
    image: frame1,
    text: "Modern frontend frame work Creating dynamic components and working with props, hooks, and state",
  };
  const theme3 = {
    theme: "Tailwind/Daisy ",
    image: frame2,
    text: "Utility-first & component UI Designing fast, clean layouts using Tailwind classes and DaisyUI components",
  };
  const array = [theme1, theme2, theme3];

  const theme4 = {
    theme: "HTML/CSS/JS",
    image: img1,
    text: "Semantic layout & interactive UI Building responsive, accessible and animated interfaces",
  };
  const theme5 = {
    theme: "React",
    image: img2,
    text: "Modern frontend frame work Creating dynamic components and working with props, hooks, and state",
  };
  const theme6 = {
    theme: "Tailwind/Daisy ",
    image: img3,
    text: "Utility-first & component UI Designing fast, clean layouts using Tailwind classes and DaisyUI components",
  };
  const array2 = [theme4, theme5, theme6];
  return (
    <>
      <div className="flex flex-col pl-[10%] pt-[5%] gap-[2rem] pb-[10%] sm:bg-[#111827] xs:bg-[#2E2E2E]  ">
        <div className="font-['Lexend_Deca'] text-[2rem] font-bold xs:flex xs:justify-center sx:w-full sm:justify-start sm:ml-[2%] ">
          My{" "}
          <span className="sm:text-[#EAB308]  xs:text-[#DF0139] ">Skills</span>
        </div>

        <div className="flex  gap-[5%] mt-[3%] ml-[5%] xs:hidden sm:flex ">
          {array.map((item, index) => {
            return (
              <Component1
                key={index}
                text={item.text}
                theme={item.theme}
                image={item.image}
              ></Component1>
            );
          })}
        </div>
        <div className=" sm:hidden">
          {array2.map((item, index) => {
            return (
              <Component3
                key={index}
                text={item.text}
                image={item.image}
                theme={item.theme}
              ></Component3>
            );
          })}
        </div>
      </div>
    </>
  );
}
