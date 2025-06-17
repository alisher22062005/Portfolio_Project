export default function PageNotFound() {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center gap-[1.5rem] font-bold bg-white ">
        <div className="text-[10rem] leading-none text-[#020617] ">404</div>
        <div className="text-[2rem] leading-none text-[#020617]">Not found</div>
        <div className="text-[1rem] text-[#020617]">
          The url doesn't exist, please try again
        </div>
      </div>
    </>
  );
}
