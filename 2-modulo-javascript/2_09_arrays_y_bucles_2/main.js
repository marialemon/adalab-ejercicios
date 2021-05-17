"use strict";

//Ejercicio 1

console.log("2.08 Arrays y bucles: EJERCICIO 1");

const arr = [];

function get100Numbers() {
  for (let i = 0; i < 100; i++) {
    arr.push(i);
  }
  console.log(arr);
}

get100Numbers();

//Ejercicio 2

console.log("2.08 Arrays y bucles: EJERCICIO 2");

const arr1 = [];

function getReversed100Numbers() {
  for (let i = 0; i < 100; i++) {
    arr1.push(i);
  }
  arr1.reverse();
  console.log(arr1);
}

getReversed100Numbers();

//Ejercicio 3

console.log("2.08 Arrays y bucles: EJERCICIO 3: APARTADO 1");

const lostNumbers = [4, 8, 15, 16, 23, 31, 42];

const lostNumbersEven = [];

const lostNumbersOdd = [];

function bestLostNumber() {
  for (let i = 0, par = 0, impar = 0; i != 100; ++i)
    switch (lostNumbers[i] % 2) {
      case 0: // Par.
        lostNumbersEven[par++] = lostNumbers[i];
        break;
      case 1: // Impar.
        lostNumbersOdd[impar++] = lostNumbers[i];
        break;
    }
  console.log(lostNumbersEven);
  console.log(lostNumbersOdd);
}

bestLostNumber();

console.log("2.08 Arrays y bucles: EJERCICIO 3: APARTADO 2");

const lostNumbersMultiple = [];

function multipleNumber() {
  //Crear un segundo array (mul) en el que se incluyen los números que se extraen del primer array
  for (let i = 0, mul = 0; i < lostNumbers.length; i++)
    if (lostNumbers[i] % 3 === 0) {
      lostNumbersMultiple[mul++] = lostNumbers[i];
    }
  console.log(lostNumbersMultiple);
}

multipleNumber();

console.log("2.08 Arrays y bucles: EJERCICIO 3: APARTADO 3");

let concat = lostNumbersEven.concat(lostNumbersMultiple);

console.log(concat);

//Ejercicio 4

console.log("2.08 Arrays y bucles: EJERCICIO 4");

//Pintar el listado de tareas

const ulToDoList = document.querySelector(".js-todolist");
const tasks = [
  {
    name: "Recoger setas en el campo",
    completed: true,
  },
  {
    name: "Comprar pilas",
    completed: true,
  },
  {
    name: "Poner una lavadora de blancos",
    completed: true,
  },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
  },
];

function paintTasks() {
  let html = "";
  let className = "";
  let checked = "";
  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];
    if (tasks[i].completed === true) {
      className = "crossout";
      checked = "checked";
    } else {
      className = "";
      checked = "";
    }
    html += `<li class= "${className}">`;
    html += `<input class="js-checkbox" type="checkbox" value="${i}">`;
    html += `${task.name}"</li>`;
  }
  ulToDoList.innerHTML = html;
  listenClick();
}

function listenClick() {
  const checkboxElements = document.querySelectorAll(".js-checkbox");
  for (let i = 0; i < checkboxElements.length; i++) {
    checkboxElements[i].addEventListener("change", handlerCheck);
  }
}

function handlerCheck(e) {
  console.log(e.target.value);
  const clicked = e.target.value;
  tasks[clicked].completed = !tasks[clicked].completed;
  paintTasks();
}

paintTasks();
