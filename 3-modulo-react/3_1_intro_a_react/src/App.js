import React from "react";
import "./stylesheets/App.css";
import MediaList from "./components/MediaList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MediaList />
      </div>
    );
  }
}

export default App;
