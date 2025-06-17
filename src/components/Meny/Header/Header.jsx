import { useRef } from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/Vector (2).png";

export default function Header({ reference }) {
  // const reference = useRef(null);
  function handleClick() {
    reference.current?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <div className="flex sm:p-[2%]  sm:gap-[50%] sm:bg-[#020617] text-[1.3rem] sticky top-[0px] xs:bg-[#1A1A1A] xs:gap-[40%] xs:p-[5%]">
        <div className="sm:ml-[10%] text-white font-[1000] text-[1.7rem] xs:ml-[5%] ">
          About
          <span className="sm:text-[#EAB308] sm:font-[1000] sm:text-[1.7rem] xs:text-[#DF0139]  ">
            Me
          </span>
        </div>
        <div className="sm:flex gap-[10%] font-['Lexend_Deca'] text-[#9CA3AF] text-[1.3rem] font-bold hidden ">
          <div className="text-white">HOME</div>

          <div>
            {" "}
            <button>
              <Link to="/contacts">CONTACTS</Link>
            </button>
          </div>

          <div className="font-['Lexend_Deca'] ">PORTFOLIO</div>
        </div>
        <div className="sm:hidden xs:flex xs:items-center">
          <img src={img}></img>
        </div>
      </div>
    </>
  );
}
