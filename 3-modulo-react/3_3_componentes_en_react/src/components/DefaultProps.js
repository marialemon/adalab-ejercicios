import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/App.css";

class DefaultProps extends React.Component {
  render() {
    const items = [
      {
        name: "Cereales con chocolate",
        description: "Cereales rellenos de chocolate",
        quantity: 2,
        category: "Cereales",
        price: 5,
      },
      {
        name: "Hamburguesa con queso",
        description: "Hamburguesa rica y saludable",
        quantity: 1,
        category: "Fast-food",
        price: 15,
      },
      {
        name: "Agua mineral",

        quantity: 2,
        category: "Bebida",
        price: 5,
      },
    ];

    return (
      <>
        {/* con este map iteramos el array de items */}
        {items.map((item) => {
          // cada return retorna un li
          return (
            <li>
              <h2 key={item.name}>Nombre: {item.name}</h2>
              <p key="0">
                Descripción: {item.description || this.props.defaultDescription}
              </p>
              <p key={item.quantity.toString()}>Cantidad: {item.quantity}</p>
              <p key={item.category}>Categoría: {item.category}</p>
              <p key={item.price.toString()}>Precio: {item.price}</p>
            </li>
          );
          // el map retorna un array de li, es decir, un listado de HTML
        })}
      </>
    );
  }
}

DefaultProps.defaultProps = {
  defaultDescription: "No hay descripción",
};

DefaultProps.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default DefaultProps;
