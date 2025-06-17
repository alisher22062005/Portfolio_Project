import telegram from "../../assets/Platform=Telegram, Color=Original.png";
import linkedin from "../../assets/Platform=LinkedIn, Color=Original.svg";
import profile from "../../assets/Group 4.png";

import img from "../../assets/7.png";
import { useNavigate } from "react-router-dom";
export default function Contact() {
  const navigate = useNavigate();
  return (
    <>
      {/* <button onClick={() => navigate(-1)} className="relative z-10">
        Back
      </button> */}

      <div className="h-screen flex justify-center items-center font-[Inter] font-normal ">
        <div className="flex flex-col bg-white h-[55%] rounded-[0.5rem]  bg-[#FAFAFA] p-[3%] gap-[1rem]">
          <div className="flex justify-center">
            <img src={profile}></img>
          </div>
          <div className="flex flex-col gap-[0px]">
            <div className="text-[2.2rem] text-[#1D57A5] font-normal leading-none">
              Sharipov Alisher
            </div>
            <div className="text-[1.5rem] flex justify-center text-[#1D69CF] ">
              Frontend-Developer
            </div>
          </div>

          <div className="flex justify-center gap-[8%]">
            <a
              target="_blank"
              href="https://linkedin.com/in/alisher-sharipov-b1a26b35a"
            >
              <img src={linkedin}></img>
            </a>
            <a href="http://t.me/sh_alishe1" target="_blank">
              <img src={telegram}></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
