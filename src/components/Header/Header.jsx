export default function Header() {
  return (
    <>
      <div className="flex p-[2%]   gap-[40%] bg-[#020617] text-[1.3rem] sticky top-[0px] ">
        <div className="ml-[10%] text-white font-[1000] text-[1.7rem]  ">
          About
          <span className="text-[#EAB308] font-[1000] text-[1.7rem]">Me</span>
        </div>
        <div className="flex gap-[10%] font-[Lexend-Deca] text-[#9CA3AF] text-[1.3rem] font-bold ">
          <div className="text-white">HOME</div>
          <div>PORTFOLIO</div>
          <div>CONTACT</div>
          <div>SKILLS</div>
        </div>
      </div>
    </>
  );
}
