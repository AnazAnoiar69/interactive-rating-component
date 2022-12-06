import React, { createContext, useContext, useState } from "react";
import star from "../assets/images/icon-star.svg";
import icon from "../assets/images/illustration-thank-you.svg";
import RatingForm from "./RatingForm";

export const RateContext = createContext();

function Ratings() {
  const [isDone, setisDone] = useState(false);
  const [data, setData] = useState(5);

  return (
    <div className="sm:w-3/4 md:w-2/4 lg:w-2/5 xl:w-1/3 p-2 sm:p-8 bg-top bg-gradient-to-t from-gray-900 to-gray-800 rounded-3xl flex flex-col text-white">
      <RateContext.Provider value={[isDone, setisDone, data, setData]}>
        {!isDone ? <RatingsContainer1 /> : <RatingsContainer2 />}
      </RateContext.Provider>
    </div>
  );
}

function RatingsContainer1() {
  return (
    <>
      <div className="wrapper p-6">
        <div className="star-icon flex w-9 h-9 rounded-full p-3 bg-gray-700">
          <img className="" src={star} alt="..." />
        </div>
        <h1 className="text-2xl py-6">How did we do?</h1>
        <p className="text-gray-400 text-sm">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        {/* <RatingList /> */}
        <RatingForm />
      </div>
    </>
  );
}

function RatingsContainer2() {
  const [isDone, setIsDone, data] = useContext(RateContext);

  return (
    <>
      <div className="wrapper p-6 lg:p-2 text-center">
        <div className="ty-icon flex justify-center py-4">
          <img className="w-3/5 sm:w-2/4" src={icon} alt="..." />
        </div>
        <div className="flex justify-center py-4">
          <span className="py-2 px-4 bg-gray-600 rounded-full text-xs text-gray-400">
            You selected <span className="text-orange-400 glow">{data}</span> out of
            5
          </span>
        </div>
        <h1 className="text-2xl py-4">Thank You!</h1>
        <p className="text-gray-400 text-xs">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
        <div className="toggle w-fit text-start text-gray-500 pt-4 hover:text-white text-xs">
          <button
            onClick={() => {
              setIsDone(!isDone);
            }}
          >
            <h1 className="glow transition">Rate again</h1>
          </button>
        </div>
      </div>
    </>
  );
}

export default Ratings;
