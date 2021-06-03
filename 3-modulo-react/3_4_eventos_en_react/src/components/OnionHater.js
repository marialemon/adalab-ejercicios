import React from "react";

class OnionHater extends React.Component {
  constructor(props) {
    super(props);

    //Este es el valor inicial, false
    this.isHating = false;
    this.text = "";

    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(ev) {
    if (ev.target.value.includes("cebolla")) {
      ev.target.style.backgroundColor = "red";
    } else {
      ev.target.style.backgroundColor = "";
    }

    this.forceUpdate();
  }

  render() {
    return (
      <div className="OnionHater">
        <textarea onKeyUp={this.handleKeyUp}></textarea>
      </div>
    );
  }
}

export default OnionHater;
