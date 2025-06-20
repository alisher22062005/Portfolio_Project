import telegram from "../../assets/Platform=Telegram, Color=Original.png";
import linkedin from "../../assets/Platform=LinkedIn, Color=Original.svg";
import profile from "../../assets/Group 4.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useNavigate } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
export default function Contact() {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="h-screen flex justify-center items-center font-[Inter] font-normal bg-base-100
 "
      >
        <div className="flex flex-col  max-h-[70%] sm:w-[35%] xs:w-[80%]  rounded-[2rem]  bg-[#FDD469] p-[3%]  ">
          <div className="flex justify-center items-center">
            <img className="h-[60%]" src={profile}></img>
          </div>
          <div className="flex flex-col gap-[0.2rem] mt-[0.5rem]">
            <div className="text-[1rem] text-black font-['Seymour_One'] font-bold leading-none flex justify-center">
              Sharipov Alisher
            </div>
            <div className="xs:text-[1rem]  flex justify-center text-white ">
              Web-Developer
            </div>
          </div>

          <div className="w-ful  flex justify-center items-centerl mt-[3%]">
            <div className="text-[#000000] xs:text-[1rem]   flex flex-col">
              <div> I'm a web developer passionate</div>
              <div>about creating dynamic websites</div>
              <div className="flex justify-center">and web applications.</div>
            </div>
          </div>

          <div className="flex flex-col mt-[0.3rem] gap-[1rem]">
            <div className="flex justify-center xs:text-[1rem] ">
              connect with me
            </div>
            <div className="flex gap-[4%] justify-evenly">
              <div className="p-[4%] bg-[#EE5373] rounded-[50%] flex items-center jutstify-center">
                <a target="_blank" href="https://github.com/alisher22062005">
                  <GitHubIcon></GitHubIcon>
                </a>
              </div>

              <div className="flex justify-center items-center p-[4%] bg-[#EE5373] rounded-[50%]">
                <a
                  target="_blank"
                  href="https://linkedin.com/in/alisher-sharipov-b1a26b35a"
                >
                  {" "}
                  <LinkedInIcon></LinkedInIcon>
                </a>
              </div>
              <div className="flex justify-center items-center p-[4%] bg-[#EE5373] rounded-[50%]">
                <a
                  target="_blank"
                  href="https://www.instagram.com/sh_alishe1?igsh=MXRlMmN5amw1MnE2ZA=="
                >
                  {" "}
                  <InstagramIcon></InstagramIcon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
