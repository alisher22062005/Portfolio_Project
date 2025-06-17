import vector from "../../assets/Vector.png";
export default function Component1({ text, theme, image }) {
  return (
    <>
      <div className="flex flex-col font-[Lexend Deca]  p-[3%] gap-[2rem] bg-[#020617] w-[27%] rounded-[1rem] ">
        <div className="flex justify-center">
          <img src={image} alt="Image" />
        </div>
        <div className="text-[1.5rem] text-[#F3F4F6] font-bold flex justify-center ">
          {" "}
          {theme}
        </div>
      </div>
    </>
  );
}
