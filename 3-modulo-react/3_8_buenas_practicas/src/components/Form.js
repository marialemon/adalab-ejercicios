import React, { useState } from "react";
import Preview from "./Preview";

function Form(props) {
  const handleInput = (ev) => {
    props.handleInput(ev.currentTarget.id, ev.currentTarget.name);
  };

  return (
    <>
      <h2>Ejercicio 3</h2>
      <form>
        <label htmlFor="email">Nombre</label>
        <input
          type="checkbox"
          name="email"
          id="email"
          onChange={handleInput}
          value={props.name}
        />

        <label htmlFor="email">Idioma</label>
        <input
          type="checkbox"
          name="email"
          id="email"
          onChange={handleInput}
          value={props.name}
        />

        <label htmlFor="email">Género</label>
        <input
          type="checkbox"
          name="gender"
          id="gender1"
          onChange={handleInput}
          value={props.name}
        />
      </form>
    </>
  );
}

export default Form;
