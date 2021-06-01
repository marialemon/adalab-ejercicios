import React from "react";
import "./stylesheets/MediaCard.css";

class MediaCard extends React.Component {
  render() {
    const dates = {
      date1: "alkjfhlskjhf",
      date2: "enero",
      date3: "febrero",
    };

    return (
      <article className="MediaCard">
        <div className="MediaCard__title-wrapper">
          <img src={this.props.img} width="70px" />
          <h3>{this.props.name}</h3>
          <small>{this.props.date}</small>
        </div>
        <p>{this.props.text}</p>

        <p>
          {this.props.likes}
          <span>{this.props.heart ? "🧡" : "🖤"}</span>
        </p>
      </article>
    );
  }
}

export default MediaCard;
