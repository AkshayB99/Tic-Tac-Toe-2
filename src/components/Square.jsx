import React from "react";

function Square(props) {
  function O() {
    return (
      <div className="w-[54px] h-[54px] border-[12px] border-[#F7B336] rounded-full"></div>
    );
  }

  function X() {
    return (
      <div className="relative h-16 w-16">
        <div className="absolute left-1/2 w-3 h-16 -ml-1  transform -rotate-45 bg-[#32C4C3] rounded-md"></div>
        <div className="absolute left-1/2 w-3 h-16 -ml-1  transform rotate-45 bg-[#32C4C3] rounded-md"></div>
      </div>
    );
  }
  return (
    <div
      className="w-[86px] h-[86px] m-2 bg-[#1F3540] rounded-[10px] shadow-lg shadow-gray-900 flex justify-center items-center"
      {...props}
    >
      {props.x ? X() : props.o ? O() : ""}
    </div>
  );
}

export default Square;