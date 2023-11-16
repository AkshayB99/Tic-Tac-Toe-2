import React from "react";
import { Link } from "react-router-dom";

function WinnerShow(props) {
  const handleClickRefresh = () => history.go(0);

  return (
    <>
      {props.winner === 1 ? (
        <div className="flex h-screen relative">
          <div className="m-auto w-full bg-[#192A32] sm:w-[415px] h-full sm:h-[650px] sm:rounded-[43px] flex justify-center items-center bg-opacity-70">
            <div className="w-[415px] h-[222px] bg-[#192A32] relative flex flex-col  items-center justify-center">
              <div className="flex flex-col  items-center ">
                <h1 className="text-[#ACC2CD] text-md">YOU WIN!</h1>
                <div className="flex my-6">
                  <div className="w-[33px] h-[33px] border-[7px] border-[#F7B336] rounded-full"></div>
                  <h1 className=" text-[#F2B237] font-bold text-3xl ml-4">
                    TAKES THE ROUND
                  </h1>
                </div>
                <div className="flex">
                  <Link to="/">
                    <div className="w-[113px] h-[33px] bg-[#F2B237] text-[#192A32]  rounded-lg font-bold text-base mx-6 flex justify-center items-center">
                      QUIT
                    </div>
                  </Link>
                  <div
                    className="w-[113px] h-[33px] bg-[#31C4BE] text-[#192A32] rounded-lg font-bold text-base mx-6 flex justify-center items-center cursor-pointer"
                    onClick={handleClickRefresh}
                  >
                    PLAY AGAIN
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : props.winner === 2 ? (
        <div className="flex h-screen relative">
          <div className="m-auto w-full bg-[#192A32] sm:w-[415px] h-full sm:h-[650px] sm:rounded-[43px] flex justify-center items-center bg-opacity-70">
            <div className="w-[415px] h-[222px] bg-[#192A32] relative flex flex-col  items-center justify-center">
              <div className="flex flex-col  items-center ">
                <h1 className="text-[#ACC2CD] text-md">PC WIN!</h1>
                <div className="flex my-6">
                  <div className="relative h-10 w-10">
                    <div className="absolute left-1/2 w-[7px] h-9 -ml-1  transform -rotate-45 bg-[#32C4C3] rounded-md"></div>
                    <div className="absolute left-1/2 w-[7px] h-9 -ml-1  transform rotate-45 bg-[#32C4C3] rounded-md"></div>
                  </div>
                  <h1 className=" text-[#F2B237] font-bold text-3xl ml-4">
                    TAKES THE ROUND
                  </h1>
                </div>
                <div className="flex">
                  <Link to="/">
                    <div className="w-[113px] h-[33px] bg-[#F2B237] text-[#192A32]  rounded-lg font-bold text-base mx-6 flex justify-center items-center">
                      QUIT
                    </div>
                  </Link>
                  <div
                    className="w-[113px] h-[33px] bg-[#31C4BE] text-[#192A32] rounded-lg font-bold text-base mx-6 flex justify-center items-center cursor-pointer"
                    onClick={handleClickRefresh}
                  >
                    PLAY AGAIN
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : props.winner === 3 ? (
        <div className="flex h-screen relative">
          <div className="m-auto w-full bg-[#192A32] sm:w-[415px] h-full sm:h-[650px] sm:rounded-[43px] flex justify-center items-center bg-opacity-70">
            <div className="w-[415px] h-[222px] bg-[#192A32] relative flex flex-col  items-center justify-center">
              <div className="flex flex-col  items-center ">
                <h1 className="text-[#ACC2CD] text-md">YOU WIN!</h1>
                <div className="flex my-6">
                  <div className="relative h-10 w-10">
                    <div className="absolute left-1/2 w-[7px] h-9 -ml-1  transform -rotate-45 bg-[#32C4C3] rounded-md"></div>
                    <div className="absolute left-1/2 w-[7px] h-9 -ml-1  transform rotate-45 bg-[#32C4C3] rounded-md"></div>
                  </div>
                  <h1 className=" text-[#F2B237] font-bold text-3xl ml-4">
                    TAKES THE ROUND
                  </h1>
                </div>
                <div className="flex">
                  <Link to="/">
                    <div className="w-[113px] h-[33px] bg-[#F2B237] text-[#192A32]  rounded-lg font-bold text-base mx-6 flex justify-center items-center">
                      QUIT
                    </div>
                  </Link>
                  <div
                    className="w-[113px] h-[33px] bg-[#31C4BE] text-[#192A32] rounded-lg font-bold text-base mx-6 flex justify-center items-center cursor-pointer"
                    onClick={handleClickRefresh}
                  >
                    PLAY AGAIN
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : props.winner === 4 ? (
        <div className="flex h-screen relative">
          <div className="m-auto w-full bg-[#192A32] sm:w-[415px] h-full sm:h-[650px] sm:rounded-[43px] flex justify-center items-center bg-opacity-70">
            <div className="w-[415px] h-[222px] bg-[#192A32] relative flex flex-col  items-center justify-center">
              <div className="flex flex-col  items-center ">
                <h1 className="text-[#ACC2CD] text-md">PC WIN!</h1>
                <div className="flex my-6">
                  <div className="w-[33px] h-[33px] border-[7px] border-[#F7B336] rounded-full"></div>
                  <h1 className=" text-[#F2B237] font-bold text-3xl ml-4">
                    TAKES THE ROUND
                  </h1>
                </div>
                <div className="flex">
                  <Link to="/">
                    <div className="w-[113px] h-[33px] bg-[#F2B237] text-[#192A32]  rounded-lg font-bold text-base mx-6 flex justify-center items-center">
                      QUIT
                    </div>
                  </Link>
                  <div
                    className="w-[113px] h-[33px] bg-[#31C4BE] text-[#192A32] rounded-lg font-bold text-base mx-6 flex justify-center items-center cursor-pointer"
                    onClick={handleClickRefresh}
                  >
                    PLAY AGAIN
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : props.winner === 5 ? (
        <div className="flex h-screen relative">
          <div className="m-auto w-full bg-[#192A32] sm:w-[415px] h-full sm:h-[650px] sm:rounded-[43px] flex justify-center items-center bg-opacity-70">
            <div className="w-[415px] h-[222px] bg-[#192A32] relative flex flex-col  items-center justify-center">
              <div className="flex flex-col  items-center ">
                <h1 className="text-[#ACC2CD] text-md mb-8">DRAW</h1>
                <div className="flex">
                  <Link to="/">
                    <div className="w-[113px] h-[33px] bg-[#F2B237] text-[#192A32]  rounded-lg font-bold text-base mx-6 flex justify-center items-center">
                      QUIT
                    </div>
                  </Link>
                  <div
                    className="w-[113px] h-[33px] bg-[#31C4BE] text-[#192A32] rounded-lg font-bold text-base mx-6 flex justify-center items-center cursor-pointer"
                    onClick={handleClickRefresh}
                  >
                    PLAY AGAIN
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : props.winner === 6 ? (
        <div className="flex h-screen relative">
          <div className="m-auto w-full bg-[#192A32] sm:w-[415px] h-full sm:h-[650px] sm:rounded-[43px] flex justify-center items-center bg-opacity-70">
            <div className="w-[415px] h-[222px] bg-[#192A32] relative flex flex-col  items-center justify-center">
              <div className="flex flex-col  items-center ">
                <h1 className="text-[#F2B237] text-md mb-8 font-bold text-[28px]">Do you want to quit?</h1>
                <div className="flex">
                  <Link to="/">
                    <div className="w-[113px] h-[33px] bg-[#F2B237] text-[#192A32]  rounded-lg font-bold text-base mx-6 flex justify-center items-center">
                      QUIT
                    </div>
                  </Link>
                  <div
                    className="w-[113px] h-[33px] bg-[#31C4BE] text-[#192A32] rounded-lg font-bold text-base mx-6 flex justify-center items-center cursor-pointer"
                    onClick={handleClickRefresh}
                  >
                    PLAY AGAIN
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default WinnerShow;
