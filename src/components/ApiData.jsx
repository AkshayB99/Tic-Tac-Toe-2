import React, { useEffect, useState } from "react";
import axios from "axios";

function ApiData() {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(
    parseInt(localStorage.getItem("currentIndex")) || 1
  ); // starting index
  const [isError, setIsError] = useState("");

  const getElement = async (slip_id) => {
    const apiUrl = `https://api.adviceslip.com/advice/${slip_id}`;
    try {
      const res = await axios.get(apiUrl);
      setData(res.data);
    } catch (err) {
      setIsError(err);
    }
  };

  useEffect(() => {
    // Initial fetch
    getElement(currentIndex);

    // Setup interval to fetch every minute
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 60000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  // Save currentIndex to localStorage on change
  useEffect(() => {
    localStorage.setItem("currentIndex", currentIndex.toString());
  }, [currentIndex]);

  return (
    <div className="absolute lg:bottom-6 lg:left-24">
      <div>
        <div className="w-[290px] h-[282px] bg-[#192A32] rounded-3xl flex flex-col justify-center items-center">
          <div>
            {data.slip ? (
              <>
                <p className="text-[#31C4BE] text-[26px] font-semibold text-center">
                  Quote #{data.slip.id}
                </p>
                <p className="text-[#F2B237] text-[24px] font-medium text-center">
                  "{data.slip.advice}"
                </p>
              </>
            ) : (
              <p>No slip data available</p>
            )}
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApiData;
