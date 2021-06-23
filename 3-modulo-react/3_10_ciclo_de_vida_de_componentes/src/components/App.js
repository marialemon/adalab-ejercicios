import { Link, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Counter from "./Counter";
import Relax from "./Relax";

import localStorage from "../services/localStorage";

function App() {
  const [userInput, setUserInput] = useState("");

  //leer del localStorage

  //solo podemos tener un useEffect y dentro de él podemos tener tantas cosas como queramos
  useEffect(() => {
    //guardamos en una variable lo que está en localStorage
    const userInput = localStorage.get("userInput");
    //si existe este valor... asignaselo a mi estado setUserInput
    if (userInput) {
      setUserInput(userInput);
    }
  });

  const handleInput = (ev) => {
    setUserInput(ev.target.value);
    //cuando mi componente se monta, se guarda en localStorage
    localStorage.set("userInput", userInput);
  };

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Counter</Link>
            </li>
            <li>
              <Link to="/relax">Relax</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <input type="text" onChange={handleInput} value={userInput} />
        <p>{userInput}</p>

        <Switch>
          <Route exact path="/" component={Counter} />
          <Route path="/relax" component={Relax} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
