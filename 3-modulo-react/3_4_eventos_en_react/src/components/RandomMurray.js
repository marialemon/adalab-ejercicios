import React from "react";

const getRandomInteger = (max, min) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const MIN_SIZE = 200;
const MAX_SIZE = 400;

class RandomMurray extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.forceUpdate();
  }

  render() {
    const randomMurray = getRandomInteger(MAX_SIZE, MIN_SIZE);

    return (
      <img
        src={`http://www.fillmurray.com/200/${randomMurray}`}
        alt="Random murray"
        onClick={this.handleClick}
      />
    );
  }
}

export default RandomMurray;
