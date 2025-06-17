// import screenshot2 from "../../../assets/Screenshot 2025-06-14 200013.png";
import img1 from "../assets/Screenshot 2025-06-14 200013.png";
export default function Component2() {
  return (
    <>
      {/* <div className="flex items-center h-screen justify-center ">
        <div className=" flex card lg:card-side bg-base-100 shadow-sm  ml-[10%] gap-[1%] h-full w-full items-center">
          <figure className="w-[55%] h-[70%] ">
            <img
              src={img1}
              className=" w-full h-full border object-contain "
              alt="Album"
            />
          </figure>
          <div className="card-body w-[40%]  flex-grow-0">
            <h2 className="card-title">New album is released!</h2>
            <p className=" max-w-[80%] break-words">
              Click the button to listen on Spotiwhy
              app.ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Liked</button>
            </div>
          </div>
        </div>
      </div> */}
      <div className="h-screen">
        {" "}
        <div className="w-[20%] h-[70%] bg-red-300">
          <img className="h-full" src={img1}></img>
        </div>
      </div>
    </>
  );

  <div className="h-screen">
    <div className="card lg:card-side bg-base-100 shadow-sm">
      <figure>
        <img src={img1} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  </div>;
}
