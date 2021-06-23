const sum = (a, b) => {
  return a + b;
};

sum(3, 8);
console.log(sum(3, 8));

const fs = require("fs");

const myObject = {
  user: "Mari Carmen",
  email: "mari@gmail.com",
  age: 28,
};
console.log(myObject);

const leerFichero = () => {
  fs.readFile("output.txt", "utf8", (mensajeError, fileContents) => {
    if (mensajeError) {
      console.log(mensajeError);
    } else {
      console.log(fileContents);
      const objLeido = JSON.parse(fileContents);
      console.log(objLeido.user);
    }
  });
};

const llamarCuandoAcabe = (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Ya esta guardado.");

    leerFichero();
  }
};

fs.writeFile("output.txt", JSON.stringify(myObject), llamarCuandoAcabe);
console.log("FIN");
