// import img1 from "../../assets/Frame (1).png";
import img2 from "../../../assets/Frame (7).png";
import img3 from "../../../assets/Frame (3).png";
import img4 from "../../../assets/Frame (4).png";
import img5 from "../../../assets/Frame (5).png";
import img6 from "../../../assets/Frame (6).png";

import linkedin from "../../../assets/Icon 6.png";
import gitHub from "../../../assets/Icon 4.png";

export default function Footer() {
  return (
    <>
      <div className="pt-[1%] flex gap-[55%] bg-[#111827] pb-[2%] font-['Lexend_Deca'] xs:hidden sm:flex">
        <div className="flex flex-col gap-[1rem] ml-[3%]">
          <div>
            <span className="text-[#EAB308]">E mail_ </span>
            shalisher2206@gmail.com
          </div>
          <div>
            <span className="text-white">
              {" "}
              <span className="text-[#EAB308]">Phone_ </span> +77089737816{" "}
            </span>
          </div>
        </div>
        <div className="flex flex-col-reverse">
          <div className="flex gap-[15%] ">
            <img src={img3} alt="Icon"></img>

            <img src={img4}></img>
            <img src={img5}></img>
            <img src={img6}></img>
            <img src={img2}></img>
          </div>
        </div>
      </div>

      <div className="w-full sm:hidden flex justify-center p-[10%] font-['Open_Sans'] font-black bg-[#2E2E2E] ">
        <div className="flex flex-col gap-[1rem]">
          <div className="text-[1.2rem] flex justify-center">
            Let's work together!
          </div>
          <div className="text-[1.2rem] flex gap-[3%]">
            <span className="text-[#DF0139]">Email:</span>
            shalisher2206@gmail.com
          </div>
          <div className="text-[1.2rem] flex justify-evenly">
            <span className="text-[#DF0139] ">My number: </span> +7(708) 973
            7816
          </div>
          <div className="flex gap-[10%] justify-center ">
            <div>
              <a href="https://linkedin.com/in/alisher-sharipov-b1a26b35a">
                {" "}
                <img src={linkedin}></img>
              </a>
            </div>
            <div>
              <a href="https://github.com/alisher22062005">
                <img src={gitHub}></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
