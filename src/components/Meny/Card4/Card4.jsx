//

import screenshot from "../../../assets/Screenshot 2025-06-14 181050.png";
import screenshot2 from "../../../assets/Screenshot 2025-06-14 200013.png";
import screenshot3 from "../../../assets/Screenshot 2025-06-14 195307.png";
import screenshot4 from "../../../assets/Screenshot 2025-06-14 194909.png";
import { useState } from "react";
// import { reference } from "three/tsl";

export default function Card4({ reference }) {
  const [isDescription, isSetDescription] = useState(false);
  const [isDescription2, isSetDescription2] = useState(false);
  const [isDescription3, isSetDescription3] = useState(false);
  const [isDescription4, isSetDescription4] = useState(false);

  const description =
    "Simple To Do List, Here we have made this project on React, used hookies such as UseState and UseEffect, additionally used Tailwind";

  const description2 =
    "News, we built this project without any framework, used html/css/js. Used API which allows to extract data from the server";

  const description3 =
    "Random quote generator, the code is written without framework, used html/css/js";

  const description4 =
    "JumusTap is actually first my project, tried to design the website, used html/css";

  return (
    <div className="sm:bg-[#020617] xs:bg-[#1A1A1A]">
      <div className="pt-[5%] flex flex-col items-center gap-[3rem]">
        <div className="text-[2rem] sm:font-['Lexend_Deca'] xs:font-['Oswald'] font-black">
          My{" "}
          <span className="sm:text-[#EAB308] xs:text-[#DF0139] sm:font-['Lexend_Deca']  xs:font-['Oswald']">
            PortFolio
          </span>
        </div>

        {/* Description block */}
        <div className="relative w-full flex justify-center items-center">
          <div
            className={`absolute top-0 z-10 sm:max-w-[45%] xs:max-w-full px-4 py-2 rounded-[1rem] shadow-md text-center transition-all duration-500 ease-in-out transform bg-[#111827]
            ${
              isDescription ||
              isDescription2 ||
              isDescription3 ||
              isDescription4
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-5 pointer-events-none"
            }`}
          >
            {(isDescription && description) ||
              (isDescription2 && description2) ||
              (isDescription3 && description3) ||
              (isDescription4 && description4)}
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div ref={reference} className="flex justify-center pt-[5%]">
        <div className="carousel sm:w-[65%] sm:h-[60vh] rounded-[0.5rem] xs:h-[40vh] xs:w-[90%]">
          {/* Item 1 */}
          <div
            onMouseEnter={() => isSetDescription(true)}
            onMouseLeave={() => isSetDescription(false)}
            id="item1"
            className="carousel-item w-full relative"
          >
            <img src={screenshot} className="w-full" />
            <div
              className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                isDescription ? "opacity-40" : "opacity-0"
              }`}
            />
          </div>

          {/* Item 2 */}
          <div
            onMouseEnter={() => isSetDescription2(true)}
            onMouseLeave={() => isSetDescription2(false)}
            id="item2"
            className="carousel-item w-full relative"
          >
            <img src={screenshot2} className="w-full" />
            <div
              className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                isDescription2 ? "opacity-40" : "opacity-0"
              }`}
            />
          </div>

          {/* Item 3 */}
          <div
            onMouseEnter={() => isSetDescription3(true)}
            onMouseLeave={() => isSetDescription3(false)}
            id="item3"
            className="carousel-item w-full relative"
          >
            <img src={screenshot3} className="w-full" />
            <div
              className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                isDescription3 ? "opacity-40" : "opacity-0"
              }`}
            />
          </div>

          {/* Item 4 */}
          <div
            onMouseEnter={() => isSetDescription4(true)}
            onMouseLeave={() => isSetDescription4(false)}
            id="item4"
            className="carousel-item w-full relative"
          >
            <img src={screenshot4} className="w-full" />
            <div
              className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                isDescription4 ? "opacity-40" : "opacity-0"
              }`}
            />
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex w-full justify-center gap-2 py-2 pb-[5%]">
        <button
          onClick={() =>
            document
              .getElementById("item1")
              .scrollIntoView({ behavior: "smooth", block: "nearest" })
          }
          className="btn btn-xs"
        >
          1
        </button>
        <button
          onClick={() =>
            document
              .getElementById("item2")
              .scrollIntoView({ behavior: "smooth", block: "nearest" })
          }
          className="btn btn-xs"
        >
          2
        </button>
        <button
          onClick={() =>
            document
              .getElementById("item3")
              .scrollIntoView({ behavior: "smooth", block: "nearest" })
          }
          className="btn btn-xs"
        >
          3
        </button>
        <button
          onClick={() =>
            document
              .getElementById("item4")
              .scrollIntoView({ behavior: "smooth", block: "nearest" })
          }
          className="btn btn-xs"
        >
          4
        </button>
      </div>
    </div>
  );
}
