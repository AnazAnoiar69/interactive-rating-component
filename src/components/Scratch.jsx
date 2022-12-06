import React, { createContext, useContext, useState } from "react";

function Scratch() {
  return (
    <div className="text-white">
      <h1 className="text-2xl">Scratch</h1>
      <Blank1 />
    </div>
  );
}

const NameContext = createContext();

function Blank1() {
  const [name, setName] = useState("Anaz");

  return (
    <>
      <div>Blank1</div>
      <NameContext.Provider value={[name, setName]}>
        <Component1 />
      </NameContext.Provider>
    </>
  );
}
function Component1() {
  return (
    <>
      <div>Component1</div>
      <Component2 />
    </>
  );
}
function Component2() {
    const [ name, setName ] = useContext(NameContext);
  return (
    <>
      <div>Component2</div>
      <div>{name}</div>
      <button onClick={() => setName("Abu") }>Change</button>
      
    </>
  );
}

export default Scratch;
