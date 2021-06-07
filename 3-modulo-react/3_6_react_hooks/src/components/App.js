import React, { useState } from "react";
import "../stylesheets/App.css";

function App() {
  const [number, setNumber] = useState(20);
  const generateAge = () => number + 1;

  const handleAge = () => {
    setNumber(generateAge());
  };

  const [present, setPresent] = useState(1);
  const generatePresent = () => present + 1;

  const handlePresent = () => {
    setPresent(generatePresent());
  };

  return (
    <>
      <div className="App">
        <h1>Hoy tengo {number} años de edad</h1>
        <button onClick={handleAge}>Hazme más viejo</button>
      </div>

      <div className="App">
        <h1>Tengo {present} regalos</h1>
        <button onClick={handlePresent}>Dame regalos</button>
      </div>
    </>
  );
}

export default App;
