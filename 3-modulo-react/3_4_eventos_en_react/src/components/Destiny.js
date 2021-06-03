//import CityImage from "./CityImage";
import React from "react";

class Destiny extends React.Component {
  constructor(props) {
    super(props);
    // this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  //   let myCity = "";
  onChangeHandler(ev) {
    //  this.myCity = ev.target.value;
    alert(`Tu destino es viajar a ${ev.currentTarget.value}`);
  }
  //   this.forceUpdate();
  render() {
    return (
      <div className="Destiny">
        <select onChange={this.onChangeHandler}>
          <option value="Buenos Aires">Buenos Aires</option>
          <option value="Sydney">Sydney</option>
          <option value="Praga">Praga</option>
          <option value="Boston">Boston</option>
          <option value="Tokio">Tokio</option>
        </select>
        {/*    <CityImage city={this.myCity} />*/}
      </div>
    );
  }
}

export default Destiny;
