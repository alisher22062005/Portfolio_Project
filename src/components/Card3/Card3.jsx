import Component1 from "../../ReusableComponents/Component1/Component1";
import vector from "../../assets/Vector.png";
import frame1 from "../../assets/Frame.png";
import frame2 from "../../assets/Frame (1).png";
import SceneWrapper from "../Portfolio/Portfolio";
export default function Card3() {
  const theme1 = {
    theme: "HTML/CSS/JS",
    image: vector,
    text: "Have basic knowledge of html/css/js. Built quote-generator ptoject just by using them.",
  };
  const theme2 = {
    theme: "React",
    image: frame1,
    text: "Have basic knowledge of html/css/js. Built quote-generator ptoject just by using them.",
  };
  const theme3 = {
    theme: "Tailwind/Daisy ",
    image: frame2,
    text: "Have basic knowledge of html/css/js. Built quote-generator ptoject just by using them.",
  };
  const arra = [theme1, theme2, theme3];
  return (
    <>
      <div className="flex flex-col pl-[12%] pt-[5%] gap-[2rem] pb-[10%] bg-[#111827]">
        <div className="font-[Lexend Deca] text-[2rem] font-bold ">
          My <span className="text-[#EAB308]">Skills</span>
        </div>
        <div>
          {/* <p className="text-[#6B7280] max-w-[30%]">
            There are many skills which I obtained during the practice, here the
            most important
          </p> */}
          {/* <SceneWrapper></SceneWrapper> */}
        </div>
        <div className="flex  gap-[5%] mt-[3%] ml-[5%] ">
          {arra.map((item, index) => {
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
      </div>
    </>
  );
}
