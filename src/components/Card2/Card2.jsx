import anime from "../../assets/ChatGPT Image Jun 13, 2025, 05_31_11 PM.png";
export default function Card2() {
  return (
    <>
      <div className="flex pt-[10%] pl-[12%]   font-[Lexend Deca] font-bold gap-[8%] pb-[10%] flex-row-reverse bg-[#020617]">
        <div className="flex flex-col  gap-[1.5rem] justify-center w-[50%]">
          <div className="text-[3rem] text-white tracking-widest font-black">
            About <span className="text-[#EAB308]">Me</span>
          </div>
          <p className="max-w-[80%] tracking-widest leading-[1.8rem] text-[#6B7280] ">
            Hi, again! I'm FTONTEND DEVELOPER, about 20 years old. Currently
            study at KBTU in Almaty, Kazakhstan. <br></br> <br></br>Going to
            finish online Frontend course from nFactorial school, after I plan
            to look for an internship. In addition I will show some projects of
            mine to demonstrate my skills
          </p>

          <button className="btn  btn-warning w-[20%]">Contact me</button>
        </div>
        <div className="w-[35%]  ">
          <img className="h-[60vh]" src={anime}></img>
        </div>
      </div>
    </>
  );
}
