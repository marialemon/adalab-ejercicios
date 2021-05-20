"use strict";

////////2_05 EVENTOS

//Ejercicio 2

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

formElement.addEventListener("keyup", handlerForm);

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

//EJERCICIO 12 BONUS

/*

const listElement = document.querySelector(".js-list");

function handleListItem(ev) {
  console.log(`El target es el elemento clickado`, ev.target);
  console.log(`El id del <li/> clickado es:`, ev.target.id);
  console.log(`El current target es el elemento escuchado`, ev.CurrentTarget);
}

listElement.addEventListener("click", handleListItem);
*/
//Versión 2

const itemElements = document.querySelectorAll(".js-item");

function handleItem(ev) {
  console.log(`El current target siempre va a ser el li`, ev.currentTarget);
}

for (const item of itemElements) {
  item.addEventListener("click", handleItem);
}

const bodyElement = document.querySelector(".body");

function handleBodyScroll() {
  console.log("Scrolleando", window.scrollY);
  const currentScroll = window.scrollY;

  if (currentScroll > 150) {
    bodyElement.classList.remove("purple");
    bodyElement.classList.add("red");
  } else {
    bodyElement.classList.remove("red");
    bodyElement.classList.add("purple");
  }
}

window.addEventListener("scroll", handleBodyScroll);
