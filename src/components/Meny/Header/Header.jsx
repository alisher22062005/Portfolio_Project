import { useRef } from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/Vector (2).png";
import MenuPopupState from "../../MaterialUI/MenuPopupState";

export default function Header({ handleClick, handleMenuClick }) {
  return (
    <>
      <div className="flex sm:p-[2%]  sm:gap-[50%] sm:bg-[#020617] text-[1.3rem] sticky top-[0px] xs:bg-[#1A1A1A] xs:gap-[37%] xs:p-[5%]">
        <div className="sm:ml-[10%] text-white font-[1000] text-[1.7rem] xs:ml-[5%] ">
          About
          <span className="sm:text-[#EAB308] sm:font-[1000] sm:text-[1.7rem] xs:text-[#DF0139]  ">
            Me
          </span>
        </div>
        <div className="sm:flex gap-[10%] font-['Lexend_Deca'] items-center text-[#9CA3AF] text-[1.3rem] font-bold hidden ">
          <div className="text-white">HOME</div>

          <div>
            {" "}
            <button>
              <Link to="/contacts">CONTACTS</Link>
            </button>
          </div>

          <div onClick={handleClick} className="font-['Lexend_Deca'] ">
            <button>PORTFOLIO</button>
          </div>
        </div>
        <div className="sm:hidden xs:flex xs:items-center">
          {/* <img src={img}></img> */}
          <MenuPopupState
            image={img}
            handleClickPortfolio={handleClick}
            handleMenuClick={handleMenuClick}
          ></MenuPopupState>
        </div>
      </div>
    </>
  );
}
