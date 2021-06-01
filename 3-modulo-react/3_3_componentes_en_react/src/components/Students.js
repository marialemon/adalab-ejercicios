import React from "react";
import "../stylesheets/App.css";

class Students extends React.Component {
  render() {
    const students = [
      {
        promo: "A",
        name: "Sofía",
        age: 20,
      },
      {
        promo: "B",
        name: "María",
        age: 21,
      },
      {
        promo: "A",
        name: "Lucía",
        age: 22,
      },
    ];

    const adalabersPromoA = students.filter((student) => student.promo === "A");

    return (
      <div>
        <ul>
          {/* con este map iteramos iteramos el array de items */}
          {students.map((student) => {
            // cada return retorna un li

            return (
              <li className="listItem">
                <h3>Nombre: {student.name}</h3>
                <p>Edad: {student.age}</p>
                <p>Promo: {student.promo}</p>
              </li>
            );

            // el map retorna un array de li, es decir, un listado de HTML
          })}
        </ul>
        <br />
        <hr />
        <br />
        <ul>
          {/* con este map iteramos iteramos el array de items */}
          {adalabersPromoA.map((student) => {
            // cada return retorna un li

            return (
              <li className="listItem">
                <h3>Nombre: {student.name}</h3>
                <p>Edad: {student.age}</p>
                <p>Promo: {student.promo}</p>
              </li>
            );

            // el map retorna un array de li, es decir, un listado de HTML
          })}
        </ul>
      </div>
    );
  }
}

export default Students;
