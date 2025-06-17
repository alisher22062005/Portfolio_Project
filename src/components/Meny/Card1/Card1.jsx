import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import anime from "../../../assets/ChatGPT Image Jun 13, 2025, 05_31_11 PM.png";
import { useNavigate } from "react-router-dom";
import img from "../../../assets/Картинка.png";
export default function Card1() {
  const [text1, SetText1] = useState("");
  const [text2, SetText2] = useState("");
  const [text3, SetText3] = useState("");

  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);

  const sample3 =
    "Hi, everyone! I'm beging my jorney as FRONTED-DEVELOPER, so looking forward to work with you.";
  const sample1 = "Hello, Welcome";
  const sample2 = "I'm Sharipov Alisher";

  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (index1 < sample1.length) {
        SetText1((prev) => prev + sample1[index1]);
        setIndex1((prev) => prev + 1);
      }
    }, 50);
    return () => clearTimeout(timeout);
  }, [index1, text1]);

  useEffect(() => {
    if (index1 == sample1.length) {
      const timeout = setTimeout(() => {
        if (index2 < sample2.length) {
          SetText2((prev) => prev + sample2[index2]);
          setIndex2((prev) => prev + 1);
        }
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [text2, index2, index1]);

  useEffect(() => {
    if (index2 == sample2.length) {
      const timeout = setTimeout(() => {
        if (index3 < sample3.length) {
          SetText3((prev) => prev + sample3[index3]);
          setIndex3((prev) => prev + 1);
        }
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [text3, index2, index1, index3]);

  return (
    <>
      <div className="flex pt-[16%] pl-[12%]  sm:bg-[#111827] font-[Lexend Deca] font-bold  pb-[10%] xs:flex-col sm:flex-row xs:gap-[2.5rem] sm:gap-[0] xs:bg-[#2E2E2E]  ">
        <div className="flex flex-col  gap-[1.5rem] justify-center xs:w-[95%] sm:w-[50%] ">
          <div className="sm:text-[#EAB308] xs:text-[#DF0139] ">{text1}</div>
          <div className="sm:text-[3rem] hidden text-white sm:flex xs:text-[1.5rem] ">
            {text2}
          </div>
          <div className="sm:hidden xs:text-[2.5rem] xs:font-bold xs:font-[Oswald] xs:leading-[2rem]">
            Sharipov Alisher
          </div>
          <p className="max-w-[60%] tracking-widest leading-[2rem] text-[#6B7280] font-[Lexend Deca]   xs:hidden sm:block ">
            {text3}
          </p>
          <div className="sm:hidden xs:flex xs:flex-col xs:w-full">
            <p className="sm:hidden xs:text-[1rem] sx:font-[Open Sans] xs:font-normal xs:max-w-[100%]">
              {" "}
              Currently learning React & Tailwind.
            </p>

            <p className="sm:hidden xs:text-[1rem] sx:font-[Open Sans] xs:font-normal xs:max-w-[80%]">
              Open for internships
            </p>
          </div>

          {index3 == sample3.length && (
            <button
              onClick={() => navigate("/contacts")}
              className="btn  btn-warning sm:w-[20%] xs:w-[41%] "
            >
              Contact me
            </button>
          )}
        </div>
        <div className="sm:w-[35%] xs:flex  xs:items-center xs:w-full ">
          <img className="h-[60vh]" src={img}></img>
        </div>
      </div>
    </>
  );
}
