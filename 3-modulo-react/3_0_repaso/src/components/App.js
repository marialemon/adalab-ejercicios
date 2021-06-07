//import React, { useState } from "react";

//esta data se puede utilizar como una constante
import data from "../data/data.json";
import "../stylesheets/App.css";
import ClubList from "./ClubList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Clubes</h1>
      </header>
      <main>
        <ClubList list={data}></ClubList>
        <h2>Clubes favoritos</h2>
      </main>
    </div>
  );
}

export default App;
