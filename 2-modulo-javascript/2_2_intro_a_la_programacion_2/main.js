"use strict";

//Ejercicio 4

let bill = 128;
let peoplebill = 126 / 8;
let anaBill = peoplebill + 2;

console.log(anaBill);

//Ejercicio 5

const yearHours = 365 * 24;
let age = 24;

console.log(yearHours * age);

//Ejercicio 8

const firstDogImage =
  "https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg";
const firstDogName = "Dina";

const secondDogImage =
  "https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg";
const secondDogName = "Luna";

const thirdDogImage =
  "https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg";
const thirdDogName = "Lana";

const ul = document.querySelector(".js-list");

ul.innerHTML = `<li class="js-listItem"><img src="${firstDogImage}" class="dog" width="200px"> ${firstDogName}</li>
<li class="js-listItem">${secondDogImage} ${secondDogName}</li>
<li class="js-listItem">${thirdDogImage} ${thirdDogName}</li>`;
