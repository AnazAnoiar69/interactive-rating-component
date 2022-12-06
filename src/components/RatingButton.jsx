import React, { useContext } from "react";
import { RateContext } from "./Ratings";

function RatingButton() {
  const [ isDone, setIsDone, data ] = useContext(RateContext);

  return (
    <>
      <div className="wrapper flex pt-6">
      <button className="py-3 transition rounded-full bg-orange-600 flex-grow uppercase font-semibold 600 shadow-lg hover:shadow-orange-600/50" onClick={() => {setIsDone(!isDone)}}>
        Submit
      </button>
      </div>
    </> 
  );
}

export default RatingButton;
