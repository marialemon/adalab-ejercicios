import React from "react";

class CitySelector extends React.Component {
  constructor(props) {
    super(props);

    this.selectedCity = "Madrid";
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.selectedCity = e.currentTarget.value;
    this.forceUpdate();
  }

  render() {
    return (
      <div className="CitySelector">
        <select onClick={this.handleClick}>
          <option value="Buenos Aires">Buenos Aires</option>
          <option value="Sydney">Sydney</option>
          <option value="Praga">Praga</option>
          <option value="Boston">Boston</option>
          <option value="Tokio">Tokio</option>
          <option value="Madrid">Madrid</option>
        </select>
      </div>
    );
  }
}

export default CitySelector;
