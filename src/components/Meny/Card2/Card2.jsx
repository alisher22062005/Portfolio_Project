import { useNavigate } from "react-router-dom";
import img from "../../../assets/image 2.png";
export default function Card2() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex pt-[10%] pl-[12%]   font-['Lexend_Deca'] font-bold gap-[8%] pb-[10%] flex-row-reverse sm:bg-[#020617] sm:flex-row sm:flex-row-reverse xs:flex-row-reverse xs:flex-col xs:bg-[#1A1A1A]">
        <div className="flex flex-col  gap-[1.5rem] justify-center sm:w-[50%] xs:w-[100%]">
          <div className="text-[3rem] text-white tracking-widest font-black xs:text-[2.5rem] xs:font-[Oswald] sm:font-['Lexend_Deca']">
            About{" "}
            <span className="sm:text-[#EAB308]  xs:text-[#DF0139]">Me</span>
          </div>
          <p className="sm:max-w-[80%] tracking-widest leading-[1.8rem] text-[#6B7280] xs:max-w-[97%] xs:font-['Open_Sans'] xs:font-normal xs:text-[#E4E4E4] sm:font-['Lexend_Deca'] sm:text-[#6B7280] sm:font-bold">
            Hi, again! I'm FTONTEND DEVELOPER, about 20 years old. Currently
            study at KBTU in Almaty, Kazakhstan. <br></br> <br></br>Going to
            finish online Frontend course from nFactorial school, after I plan
            to look for an internship. In addition, I will show some projects of
            mine to demonstrate my skills
          </p>

          <button
            onClick={() => navigate("/contacts")}
            className="btn  btn-warning sm:w-[20%] xs:w-[40%] "
          >
            Contact me
          </button>
        </div>
        <div className="sm:w-[35%] sx:w-[100%]  ">
          <img className="h-[60vh]" src={img}></img>
        </div>
      </div>
    </>
  );
}
