import { useState, useEffect } from "react";
import Square from "./Square";
import WinnerShow from "./WinnerShow";

const defaultSquares = () => new Array(9).fill(null);

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function Choice1() {
  const [squares, setSquares] = useState(defaultSquares());
  const [winner, setWinner] = useState();
  const [makeComputerMove, setMakeComputerMove] = useState(false);

  let userScore = parseInt(localStorage.getItem("userScore"));
  let cpuScore = parseInt(localStorage.getItem("cpuScore"));
  let tieScore = parseInt(localStorage.getItem("tieScore"));

  function handleSquareClick(index) {
    const isPlayerTurn =
      squares.filter((square) => square !== null).length % 2 === 0;
    if (isPlayerTurn && squares[index] === null && !winner) {
      setSquares((prevSquares) => {
        const newSquares = [...prevSquares];
        newSquares[index] = "X";
        return newSquares;
      });
      setMakeComputerMove(true);
    }
  }

  const linesThatAre = (a, b, c) => {
    return lines.filter((squareIndexes) => {
      const squareValues = squareIndexes.map((index) => squares[index]);
      return (
        JSON.stringify([a, b, c].sort()) === JSON.stringify(squareValues.sort())
      );
    });
  };

  const putComputerAt = (index) => {
    setSquares((prevSquares) => {
      const newSquares = [...prevSquares];
      newSquares[index] = "O";
      return newSquares;
    });
  };

  const handleComputerMove = () => {
    const isComputerTurn =
      squares.filter((square) => square !== null).length % 2 === 1;

    const emptyIndexes = squares
      .map((square, index) => (square === null ? index : null))
      .filter((val) => val !== null);

    if (isComputerTurn) {
      const winingLines = linesThatAre("X", "X", null);
      if (winingLines.length > 0) {
        const winIndex = winingLines[0].filter(
          (index) => squares[index] === null
        )[0];
        putComputerAt(winIndex);
        setMakeComputerMove(false);
        return;
      }

      const linesToBlock = linesThatAre("O", "O", null);
      if (linesToBlock.length > 0) {
        const blockIndex = linesToBlock[0].filter(
          (index) => squares[index] === null
        )[0];
        putComputerAt(blockIndex);
        setMakeComputerMove(false);
        return;
      }

      const linesToContinue = linesThatAre("X", null, null);
      if (linesToContinue.length > 0) {
        putComputerAt(
          linesToContinue[0].filter((index) => squares[index] === null)[0]
        );
        setMakeComputerMove(false);
        return;
      }

      const randomIndex =
        emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
      putComputerAt(randomIndex);
      setMakeComputerMove(false);
    }
  };

  useEffect(() => {
    const playerWon = linesThatAre("X", "X", "X").length > 0;
    const computerWon = linesThatAre("O", "O", "O").length > 0;

    if (playerWon) {
      setWinner(3);
      localStorage.removeItem("userScore");
      userScore = userScore + 1;
      localStorage.setItem("userScore", userScore.toString());
    } else if (computerWon) {
      setWinner(4);
      localStorage.removeItem("cpuScore");
      cpuScore = cpuScore + 1;
      localStorage.setItem("cpuScore", cpuScore.toString());
    }

    const areAllSquaresFilled = squares.every((squ) => squ !== null);
    if (areAllSquaresFilled) {
      setWinner(5);
      localStorage.removeItem("tieScore");
      tieScore = tieScore + 1;
      localStorage.setItem("tieScore", tieScore.toString());
    }
  }, [handleComputerMove, squares]);

  useEffect(() => {
    if (makeComputerMove) {
      handleComputerMove();
    }
  }, [makeComputerMove, squares]);

  function showUserScore() {
    userScore = parseInt(localStorage.getItem("userScore"));
    return userScore / 2;
  }

  function showTieScore() {
    tieScore = parseInt(localStorage.getItem("tieScore"));
    return tieScore / 2;
  }

  function showCpuScore() {
    cpuScore = parseInt(localStorage.getItem("cpuScore"));
    return cpuScore / 2;
  }

  const handleRefresh = () => {
    setWinner(6);
  };

  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div className="m-auto bg-[#192A32] w-full sm:w-[415px] h-full sm:h-[650px] sm:rounded-[43px] flex justify-center absolute">
          <div className="sm:mt-[30%] mt-[50%] w-full">
            {/* icons */}
            <div className="flex mx-14 justify-between">
              <div className="flex">
                <div className="relative h-10 w-10">
                  <div className="absolute left-1/2  w-[6px] h-8 -ml-1  transform -rotate-45 rounded-md bg-[#32C4C3]"></div>
                  <div className="absolute left-1/2 w-[6px] h-8 -ml-1  transform rotate-45  rounded-md bg-[#32C4C3]"></div>
                </div>
                <div className="w-[28px] h-[28px] border-[6px] rounded-full border-[#F7B336] mt-[2px]"></div>
              </div>
              <div>
                <div className="w-[86px] h-[39px] bg-[#1F3540] rounded-lg shadow-md shadow-gray-900 flex justify-center items-center text-[#A8BEC9] font-bold mb-4">
                  <div className="relative h-5 w-5 ">
                    <div className="absolute left-1/2  w-[4px] h-5 -ml-1  transform -rotate-45 bg-[#ACC2CD]"></div>
                    <div className="absolute left-1/2 w-[4px] h-5 -ml-1  transform rotate-45 bg-[#ACC2CD]"></div>
                  </div>
                  TURN
                </div>
              </div>
              <div>
                <div
                  className="w-[32px] h-[32px] bg-[#A7BDC8] rounded-md"
                  onClick={handleRefresh}
                >
                  <img src="./Images/retry.png" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 grid-rows-3 h-3 gap-y-28 gap-x-4 mx-8">
              {squares.map((square, index) => (
                <Square
                  key={index}
                  x={square === "X" ? 1 : 0}
                  o={square === "O" ? 1 : 0}
                  onClick={() => handleSquareClick(index)}
                />
              ))}
            </div>
            {/* bottom btn  */}
            <div className="absolute inset-x-0 bottom-[72px] flex justify-between mx-10">
              <div>
                <div className="w-[86px] h-[49px] bg-[#31C4BE] rounded-md flex flex-col justify-center items-center">
                  <p className="font-medium text-[13px]">X (YOU)</p>
                  <p className="font-bold text-md">{showUserScore()}</p>
                </div>
              </div>
              <div>
                <div className="w-[86px] h-[49px] bg-[#A8BEC9] rounded-md flex flex-col justify-center items-center">
                  <p className="font-medium text-[13px]">TIES</p>
                  <p className="font-bold text-md">{showTieScore()}</p>
                </div>
              </div>
              <div>
                <div className="w-[86px] h-[49px] bg-[#F2B237] rounded-md flex flex-col justify-center items-center">
                  <p className="font-medium text-[13px]">O (CPU)</p>
                  <p className="font-bold text-md">{showCpuScore()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {winner === 3 ? (
            <WinnerShow winner={winner} />
          ) : winner === 4 ? (
            <WinnerShow winner={winner} />
          ) : winner === 5 ? (
            <WinnerShow winner={winner} />
          ) : winner === 6 ? (
            <WinnerShow winner={winner} />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default Choice1;
