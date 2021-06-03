import React from "react";

class TextInput extends React.Component {
  render() {
    return (
      <form className="TextInput">
        <textarea onKeyUp={this.props.translateText} />
      </form>
    );
  }
}

export default TextInput;
