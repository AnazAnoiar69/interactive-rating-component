import { useState } from "react";
import "./App.css";
import Ratings from "./components/Ratings";
import Scratch from "./components/Scratch";

function App() {

  return (
    <div className="App">
      <div className="wrapper px-8 min-h-screen bg-[#121417] flex justify-center items-center">
        <Ratings/>
        {/* <Scratch/> */}
      </div>
    </div>
  );
}

export default App;
