class CityImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cities = {
      Sydney: "http://path-to-sydney-image.jpg",
      Praga: "http://path-to-praga-image.jpg",
      Boston: "http://path-to-boston-image.jpg",
      Tokio: "http://path-to-tokio-image.jpg",
    };

    return (
      <div className="CityImage">
        <img src={cities[this.props.city]} />
      </div>
    );
  }
}

export default CityImage;
