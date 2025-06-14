import img1 from "../../assets/Frame (1).png";
import img2 from "../../assets/Frame (7).png";
import img3 from "../../assets/Frame (3).png";
import img4 from "../../assets/Frame (4).png";
import img5 from "../../assets/Frame (5).png";
import img6 from "../../assets/Frame (6).png";

export default function Cadr5() {
  return (
    <>
      <div className="pt-[1%] flex gap-[55%] bg-[#111827] pb-[2%] font-[Lexend-Deca]">
        <div className="flex flex-col gap-[1rem] ml-[3%]">
          <div>
            <span className="text-[#EAB308]">E mail_ </span>
            shalisher2206@gmail.com
          </div>
          <div>
            <span className="text-white">
              {" "}
              <span className="text-[#EAB308]">Phone_ </span> +77089737816{" "}
            </span>
          </div>
        </div>
        <div className="flex flex-col-reverse">
          <div className="flex gap-[20%]">
            <img src={img3}></img>
            <img src={img4}></img>
            <img src={img5}></img>
            <img src={img6}></img>
            <img src={img2}></img>
          </div>
        </div>
      </div>
    </>
  );
}
