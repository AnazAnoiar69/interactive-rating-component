import React, { useEffect, useRef, useState } from "react";

function RatingList() {
    const ratingStar = useRef();
    const [rateValue, setRateValue] = useState(0);
    
    function clickHandle(id, value) {
        setRateValue(value);
        id === ratingStar.current.id && selectedHandle(ratingStar.current);

        return value
      }
    
      function selectedHandle(ele) {
        ele.classList.toggle("border-orange-400");
        ele.classList.toggle("text-orange-400");
        console.log(rateValue);
      }
    
  return (
    <>
      <div className="flex justify-between p-4">
        {rates.map((rate) => (
          <li key={rate.id} className="cursor-pointer" value={rate.value} onClick={() => clickHandle(rate.id, rate.value)}>
            <div
              ref={ratingStar}
              id={rate.id}
              className="bg-gray-600 rounded-full w-12 h-12 border flex justify-center items-center hover:border-orange-400 hover:text-orange-400"
            >
              <span>{rate.value}</span>
            </div>
          </li>
        ))}
      </div>
    </>
  );
}

function RatingStar(props) {


  
  return <></>;
}

export default RatingList;
