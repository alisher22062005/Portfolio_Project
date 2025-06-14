import screenshot from "../../assets/Screenshot 2025-06-14 181050.png";
import screenshot2 from "../../assets/Screenshot 2025-06-14 200013.png";
import screenshot3 from "../../assets/Screenshot 2025-06-14 195307.png";
import screenshot4 from "../../assets/Screenshot 2025-06-14 194909.png";

export default function Card4() {
  return (
    <>
      <div className="bg-[#020617]">
        {" "}
        <div className="pt-[5%]  flex flex-col items-center gap-[3rem]">
          <div className="text-[2rem] font-[Lexend Deca] font-black">
            My <span className="text-[#EAB308]">PortFolio</span>
          </div>
          {/* <div className="max-w-[30%]">
            Here you can see all my projects which I have done, please enjoy!
          </div> */}
        </div>
        <div className="flex mt-[10%] ml-[15%]  ">
          <div className="rounded-[1rem]">
            {/* <img className="w-[50%] rounded-[1rem]" src={screenshot} alt="" /> */}
          </div>
          <div></div>
        </div>
        <div className="flex justify-center">
          <div className="carousel w-[65%] h-[60vh] rounded-[0.5rem]">
            <div id="item1" className="carousel-item w-full">
              <img src={screenshot} className="w-full" />
            </div>
            <div id="item2" className="carousel-item w-full">
              <img src={screenshot2} className="w-full" />
            </div>
            <div id="item3" className="carousel-item w-full">
              <img src={screenshot3} className="w-full" />
            </div>
            <div id="item4" className="carousel-item w-full">
              <img src={screenshot4} className="w-full" />
            </div>
          </div>
        </div>
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
    </>
  );
}
