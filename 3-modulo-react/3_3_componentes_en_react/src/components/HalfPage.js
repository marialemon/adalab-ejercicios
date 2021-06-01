import React from "react";
import "../stylesheets/HalfPage.css";

class HalfPage extends React.Component {
  render() {
    return (
      <section className="HalfPage">
        {this.props.h1}
        {this.props.h2}
        {this.props.p}
      </section>
    );
  }
}

export default HalfPage;
