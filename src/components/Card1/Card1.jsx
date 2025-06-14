import anime from "../../assets/ChatGPT Image Jun 13, 2025, 05_31_11 PM.png";
export default function Card1() {
  return (
    <>
      <div className="flex pt-[16%] pl-[12%]  bg-[#111827] font-[Lexend Deca] font-bold gap-[10%] pb-[10%]">
        <div className="flex flex-col  gap-[1.5rem] justify-center w-[50%]">
          <div className="text-[#EAB308] ">Hello, Welcome</div>
          <div className="text-[3rem] text-white">I'm Sharipov Alisher</div>
          <p className="max-w-[80%] tracking-widest leading-[2rem] text-[#6B7280] font-[Lexend Deca]">
            Hi, everyone! I'm beging my jorney as FRONTED-DEVELOPER, so looking
            forward to work with you.
          </p>
          {/* <button className="btn btn-active btn-warning w-[15%]">
            Contact me
          </button> */}
          <button className="btn  btn-warning w-[20%]">Contact me</button>
        </div>
        <div className="w-[35%]  ">
          <img className="h-[60vh]" src={anime}></img>
        </div>
      </div>
    </>
  );
}
