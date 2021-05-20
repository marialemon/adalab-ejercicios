"use strict";

//INDEX OF busca la posición (el index) del dato que quieras

const adalabers = [
  {
    name: "María",
    age: 24,
    job: "diseñadora",
  },
  {
    name: "Maca",
    age: 33,
    job: "fisioterapeuta",
  },
  {
    name: "Pati",
    age: 30,
    job: "todoterreno",
  },
];

const numbers = [14, 24, 64, 50, 230, 0, 8, 90];

const index = numbers.indexOf(64);
const index2 = numbers.indexOf(8);

//Cuando tengo un array de objetos tengo que DESCARTAR el uso de indexOf
//porque no es capaz de entrar al valor dentro del objeto
const index3 = adalabers.indexOf(33);

console.log(index, index2, index3);

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 50) {
    console.log(`Posición usando FOR: ${i}`);
  }
}

//FINDINDEX (MÁS UTILIZADA)

const nombreBuscado = "María";

const adalaberMaria = adalabers.findIndex(
  (adalaber) => adalaber.name.toLowerCase() === nombreBuscado.toLowerCase()
);

console.log(`Adalaber ${nombreBuscado} ${adalaberMaria}`);
console.log(adalabers);

//FIND, me devuelve solo un elemento, el primero que encuentre que cumpla esa condición

const adalaberInfo = adalabers.find((adalaber) => adalaber.age === 24);

console.log(`Estudiante ${adalaberInfo.name}`);

//FILTER

const arrayFilter = adalabers.filter((adalaber) => adalaber.age === 24);

console.log(`Estudiante ${arrayFilter.name}`);

//MAP
