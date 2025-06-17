export default function Component3({ text, image, theme }) {
  return (
    <>
      <div className="w-full  p-[5%]  flex  font-['Open_Sans'] font-normal">
        <div className="flex flex-col w-full rounded-[1.5rem]  p-[8%] gap-[0.8rem] bg-[#00000026]">
          <div className="flex justify-center">
            <img src={image}></img>
          </div>
          <div className="flex justify-center text-white font-bold text-[1.5rem]">
            {theme}
          </div>
          <div className="flex justify-center text-[#E4E4E4] text-[0.8rem] items-center">
            {text}
          </div>
        </div>
      </div>
    </>
  );
}
