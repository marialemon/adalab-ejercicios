"use strict";

////////2_01 INTRO A LA PROGRAMACIÓN

//Ejercicio 2

let address = "Calle Falsa 123";
address = "Calle Verdadera 456";

console.log(address);

//Ejercicio 4

const h2 = document.querySelector(".js-h2");

const li = document.querySelector(".js-li");

h2.innerHTML += li.innerHTML;

////////2_02 INTRO A LA PROGRAMACIÓN 2

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

////////2_05 EVENTOS

/*

const formElement = document.querySelector(".js-form");
const nameInput = document.querySelector(".js-name");
const pText = document.querySelector(".js-result");
const submitButton = document.querySelector(".js-submit");


function handlerInput() {
  const inputValue = nameInput.value;
  pText.innerHTML += inputValue + "!";
  console.log(inputValue);
}

submitButton.addEventListener("change", handlerInput);
//nameInput.addEventListener("keyup", handlerInput);
//submitButton.addEventListener("click", handlerInput);


const handlerForm = (e) => {
  console.log(e);
  console.log(e.target);
  console.log(e.target.value);
  pText.innerHTML = e.target.value;
};

formElement.addEventListener("change", handlerForm);

*/

// EJERCICIO 8

const strawberry = document.querySelector(".fruit-strawberry");
const banana = document.querySelector(".fruit-banana");
const kiwi = document.querySelector(".fruit-kiwi");
const button = document.querySelector(".js-button");

function handleFruitClick(event) {
  // Asignamos a una constante el elemento
  // sobre el que pusimos el `listener`
  // para trabajar cómodamente con él
  const selectedFruit = event.currentTarget;
  // const selectedFruit = event.target;

  selectedFruit.classList.toggle("fruit--selected");
}

strawberry.addEventListener("click", handleFruitClick);
banana.addEventListener("click", handleFruitClick);
kiwi.addEventListener("click", handleFruitClick);
button.addEventListener("click", handleFruitClick);

//Ejercicio 9

const ulTeachers = document.querySelector(".teachers");

function addClass(event) {
  const selectedTeacher = event.target;
  selectedTeacher.parentElement.classList.toggle("teacher--selected");
}

ulTeachers.addEventListener("click", addClass);

////////2_06 OBJETOS

////////2_07 BUCLES

let movies = ["whiplash", "interestelar", "the greatest showman"];
movies[2].push("dooonie");

console.log(movies);

////////2_08 ARRAYS Y BUCLES 2
