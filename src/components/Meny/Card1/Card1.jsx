import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import anime from "../../../assets/ChatGPT Image Jun 13, 2025, 05_31_11 PM.png";
import { useNavigate } from "react-router-dom";
import img from "../../../assets/Картинка.png";
export default function Card1({ referenceMenu }) {
  const [text1, SetText1] = useState("");
  const [text2, SetText2] = useState("");
  const [text3, SetText3] = useState("");
  const [text4, SetText4] = useState("");
  const [text5, SetText5] = useState("");
  const [text6, SetText6] = useState("");

  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);
  const [index4, setIndex4] = useState(0);
  const [index5, setIndex5] = useState(0);
  const [index6, setIndex6] = useState(0);

  const sample3 =
    "Hi, everyone! I'm beging my jorney as Frontend developer, so looking forward to work with you.";
  const sample1 = "Hello, Welcome";
  const sample2 = "I'm Sharipov Alisher";
  const sample4 = "Sharipov Alisher";
  const sample5 = "Currently learning React & Tailwind.";
  const sample6 = " Open for internships";

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

  useEffect(() => {
    if (index1 == sample1.length) {
      const timeout = setTimeout(() => {
        if (index4 < sample4.length) {
          SetText4((prev) => prev + sample4[index4]);
          setIndex4((prev) => prev + 1);
        }
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index4, text1, text4]);

  useEffect(() => {
    if (index4 == sample4.length) {
      const timeout = setTimeout(() => {
        if (index5 < sample5.length) {
          SetText5((prev) => prev + sample5[index5]);
          setIndex5((prev) => prev + 1);
        }
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [text4, index5, text5]);

  useEffect(() => {
    if (index5 == sample5.length) {
      const timeout = setTimeout(() => {
        if (index6 < sample6.length) {
          SetText6((prev) => prev + sample6[index6]);
          setIndex6((prev) => prev + 1);
        }
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [text5, index6, text6]);

  return (
    <>
      <div
        ref={referenceMenu}
        className="flex pt-[16%] pl-[12%]  sm:bg-[#111827] font-[Lexend Deca] font-bold  pb-[10%] xs:flex-col sm:flex-row xs:gap-[2.5rem] sm:gap-[0] xs:bg-[#2E2E2E]  "
      >
        <div className="flex flex-col  gap-[1.5rem] justify-center xs:w-[95%] sm:w-[50%] ">
          <div className="sm:text-[#EAB308] xs:text-[#DF0139] ">{text1}</div>
          <div className="sm:text-[3rem] hidden text-white sm:flex xs:text-[1.5rem] ">
            {text2}
          </div>
          <div className="sm:hidden xs:text-[2.5rem] xs:font-bold xs:font-[Oswald] xs:leading-[2rem]">
            {text4}
          </div>
          <p className="max-w-[60%] tracking-widest leading-[2rem] text-[#6B7280] font-['Lexend_Deca']   xs:hidden sm:block ">
            {text3}
          </p>
          <div className="sm:hidden xs:flex xs:flex-col xs:w-full">
            <p className="sm:hidden xs:text-[1rem] sx:font-[Open Sans] xs:font-normal xs:max-w-[100%]">
              {" "}
              {text5}
            </p>

            <p className="sm:hidden xs:text-[1rem] sx:font-[Open Sans] xs:font-normal xs:max-w-[80%]">
              {text6}
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
