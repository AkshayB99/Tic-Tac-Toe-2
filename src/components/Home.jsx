import { Link } from "react-router-dom";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Home() {
  const [isHoverO, setIsHoverO] = useState(false);
  const [isHoverX, setIsHoverX] = useState(false);

  const [choice, setChoice] = useState();

  //removing all initial values
  localStorage.removeItem("userScore");
  localStorage.removeItem("cpuScore");
  localStorage.removeItem("tieScore");

  //initilizing score to 0
  localStorage.setItem("userScore", "0");
  localStorage.setItem("cpuScore", "0");
  localStorage.setItem("tieScore", "0");
  let ak = "akshay";

  const handleClickO = () => {
    setChoice(true);
    setIsHoverO(true);
  };

  const notify = () => {
    toast.success("Invite link copied", {
      icon: '',
      style: {
        borderRadius: '20px',
        background: '#192A32',
        color: '#F2B237'
      }
    });
  }

  return (
    <>
      <div className="flex h-screen">
        <div className="m-auto bg-[#192A32] w-full sm:w-[415px] h-full sm:h-[650px] sm:rounded-[43px] flex justify-center ">
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center mb-3">
              <div className="relative h-10 w-10">
                <div className="absolute left-1/2 w-[7px] h-9 -ml-1  transform -rotate-45 bg-[#32C4C3] rounded-md"></div>
                <div className="absolute left-1/2 w-[7px] h-9 -ml-1  transform rotate-45 bg-[#32C4C3] rounded-md"></div>
              </div>
              <div className="w-[33px] h-[33px] border-[7px] border-[#F7B336] rounded-full"></div>
            </div>
            <div className="flex w-[307px] h-[154px] bg-[#1F3540] shadow-lg flex-col items-center mb-7 rounded-lg">
              <h3 className="text-white text-2xl font-semibold mt-5">
                PICK PLAYER
              </h3>
              <div className="w-[276px] h-[45px] bg-[#192A32] mt-6 rounded-md justify-between flex items-center">
                <button
                  className="w-[127px] h-[30px] hover:bg-[#D9D9D9] ml-3 flex justify-center rounded"
                  onMouseOver={() => setIsHoverX(true)}
                  onMouseOut={() => setIsHoverX(false)}
                  onClick={() => setChoice(false)}
                >
                  <div className="relative h-10 w-10">
                    <div
                      className={`absolute left-1/2  w-[6px] h-8 -ml-1  transform -rotate-45 rounded-md ${
                        isHoverX ? "bg-[#192A32]" : "bg-[#32C4C3]"
                      }`}
                    ></div>
                    <div
                      className={`absolute left-1/2 w-[6px] h-8 -ml-1  transform rotate-45  rounded-md ${
                        isHoverX ? "bg-[#192A32]" : "bg-[#32C4C3]"
                      }`}
                    ></div>
                  </div>
                </button>
                <button
                  className={`w-[127px] h-[30px]  mr-3 flex justify-center items-center rounded ${
                    isHoverO ? "bg-[#D9D9D9]" : "hover:bg-[#D9D9D9]"
                  }`}
                  onMouseOver={() => setIsHoverO(true)}
                  onMouseOut={() => setIsHoverO(false)}
                  onClick={handleClickO}
                >
                  <div
                    className={`w-[26px] h-[26px] border-[6px] rounded-full ${
                      isHoverO ? "border-[#192A32]" : "border-[#F7B336]"
                    }`}
                  ></div>
                </button>
              </div>
            </div>
            <div className="w-[307px] h-[40px] rounded bg-[#F2B237] flex justify-center items-center mb-4 hover:cursor-pointer">
              <Link className="text-black font-[650]" to={choice ? "/0" : "/1"}>
                NEW GAME ( VS CPU )
              </Link>
            </div>
            <div className="w-[307px] h-[40px] rounded bg-[#32C4C3] flex justify-center items-center mb-9">
              <h3 className="text-[#192A32] text-sm font-[650]">
                NEW GAME ( VS HUMAN ) Coming Soon
              </h3>
            </div>
            <div className="w-[225px] h-[33px] rounded bg-[#F2B237] flex justify-center items-center cursor-pointer">
              <h3 className="text-black text-md font-[650]" onClick={notify}>
                Invite Your Friend
              </h3>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default Home;
