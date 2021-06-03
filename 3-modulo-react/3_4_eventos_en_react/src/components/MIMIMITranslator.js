import React from "react";

class MIMIMITranslator extends React.Component {
  constructor(props) {
    super(props);
  }

  replaceVowels(txt) {
    let newStr = txt.replace(/aeou/gi, "i");
    return newStr;
  }

  render() {
    const txt = this.props.translateText;
    return (
      <div className="MIMIMITranslator">
        <p>{this.replaceVowels(txt)}</p>
      </div>
    );
  }
}

export default MIMIMITranslator;
