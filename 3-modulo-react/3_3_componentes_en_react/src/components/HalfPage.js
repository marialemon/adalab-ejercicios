import React from "react";
import "../stylesheets/HalfPage.css";

class HalfPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="HalfPage">
        {this.props.h1}
        {this.props.h2}
        {this.props.children}
      </section>
    );
  }
}

export default HalfPage;
