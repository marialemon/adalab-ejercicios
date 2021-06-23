import React, { useState } from "react";
import "../App.css";
import Preview from "./Preview";
import Form from "./Form";

function App() {
  const [email, setEmail] = useState("");
  const [color, setColor] = useState("green");

  const handleEmail = (ev) => {
    setEmail(ev.currentTarget.value);
  };

  const handleForm = (ev) => {
    ev.preventDefault();
  };

  const handleButton = (ev) => {
    setEmail("");
    //color por defecto cuando pulsamos reset, rojo
    setColor("red");
  };

  const handleColor = (ev) => {
    //seleccionamos el valor de la option seleccionada
    setColor(ev.currentTarget.value);
  };

  return (
    <>
      <h1>Formularios en React</h1>

      <form onSubmit={handleForm}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          onChange={handleEmail}
          value={email}
        />
        <button onClick={handleButton}>Reset</button>

        <select value={color} onChange={handleColor}>
          <option value="green">Verde</option>
          <option value="blue">Azul</option>
          <option value="red">Rojo</option>
        </select>

        <label>Verde</label>
        <input
          type="radio"
          name="color"
          value="green"
          checked={color === "green"}
          onChange={handleColor}
        />
        <label>Azul</label>
        <input
          type="radio"
          name="color"
          value="blue"
          checked={color === "blue"}
          onChange={handleColor}
        />
        <label>Rojo</label>
        <input
          type="radio"
          name="color"
          value="red"
          checked={color === "red"}
          onChange={handleColor}
        />
      </form>

      <p>Tu email es: {email}</p>
      <p>Tu color es: {color}</p>

      <Form></Form>
    </>
  );
}

export default App;
