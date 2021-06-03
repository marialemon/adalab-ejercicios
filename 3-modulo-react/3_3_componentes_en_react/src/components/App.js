import React from "react";
import "../stylesheets/App.css";
import HalfPage from "./HalfPage";
import Students from "./Students";
import DefaultProps from "./DefaultProps";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>Pintar listados con React:</h1>

        <section className="Ejercicio num1">
          <h2>Ejercicio 1:</h2>
          <Students />
        </section>
        <br />
        <hr />
        <br />

        <section className="Ejercicio num2">
          <h2>Ejercicio 2:</h2>
          <br />
          <div className="HalfPage-section">
            <HalfPage>
              <h1>Esto es un h1</h1>
              <p>Estoy en la izquierda</p>
            </HalfPage>
            <HalfPage>
              <h2>Esto es un h2</h2>
              <p>Estoy en la derecha</p>
            </HalfPage>
            <HalfPage
              h1={<h1>Esto es un h1</h1>}
              children={<p>Estoy en la derecha</p>}
            />
            <HalfPage
              h2={<h2>Esto es un h2</h2>}
              children={<p>Estoy en la izquierda</p>}
            />
          </div>
        </section>

        <br />
        <hr />
        <br />
        <section className="Ejercicio num3">
          <h2>Ejercicio 3:</h2>
          <br />

          <DefaultProps />
        </section>
      </>
    );
  }
}

export default App;
