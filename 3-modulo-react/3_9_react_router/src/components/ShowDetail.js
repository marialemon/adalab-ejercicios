import React from "react";

class ShowDetail extends React.Component {
  // ...
  render() {
    return (
      <main>
        <p>{this.props.name}</p>
        <p>{this.props.language}</p>
        <p>{this.props.age}</p>
      </main>
    );
  }
}

export default ShowDetail;
