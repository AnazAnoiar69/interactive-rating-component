import React, { createContext, useContext, useRef, useState } from "react";
import RatingButton from "./RatingButton";
import RatingList from "./RatingList";
import { RateContext } from "./Ratings";


const rates = [
    { id: "star-1", value: 1 },
    { id: "star-2", value: 2 },
    { id: "star-3", value: 3 },
    { id: "star-4", value: 4 },
    { id: "star-5", value: 5 },
  ];

function RatingForm() {
  const [ isDone, setIsDone, data, setData ] = useContext(RateContext);
  const ratingStar = useRef();

  function clickHandle(id, value) {
    setData(value);
    id === ratingStar.current.id && selectedHandle(ratingStar.current);
    
  }

  function selectedHandle(ele) {
    ele.classList.toggle("border-orange-400");
    ele.classList.toggle("text-orange-400");
  }


  return (
    <>
      <div className="wrapper pt-6 flex flex-col h-fit">
        <ul className="py-2 flex justify-between">
        {rates.map((rate) => (
          <li key={rate.id} className="cursor-pointer" value={rate.value} onClick={() => clickHandle(rate.id, rate.value)}>
            <button
              ref={ratingStar}
              id={rate.id}
              className="bg-gray-700 rounded-full w-9 h-9 sm:w-12 sm:h-12 border border-transparent flex justify-center items-center hover:bg-orange-600 text-gray-400 hover:text-white focus:bg-orange-600 focus:text-white"
            >
              <span >{rate.value}</span>
            </button>
          </li>
        ))} 
          {/* <RatingList rateValue={rateValue} setRateValue={setRateValue()}/>
          <RatingButton rateValue={rateValue} setRateValue={setRateValue()}/> */}
        </ul>
        <RatingButton/>
      </div>
    </>
  );
}

export default RatingForm;
