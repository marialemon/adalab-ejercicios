"use strict";

const buttonElement = document.querySelector(".form__button");
const selectElement = document.querySelector(".js-select");
const ulElement = document.querySelector(".recipes-list");
let recipesList = [];

function renderRecipes() {
  //limpiamos la ul para que no se acumulen las cosas en HTML
  ulElement.innerHTML = "";
  //hacemos un ForEach para recorrer las recetas
  recipesList.forEach((recipe) => {
    ulElement.innerHTML += `<li id="${recipe.idMeal}">${recipe.strMeal}</li>`;
  });

  //haciendo un For of sería así:
  //for (const recipe of recipesList) {
  //  ulElement.innerHTML += `<li id="${recipe.idMeal}">${recipe.strMeal}</li>`;
  // }
}

//Función manejadora
function conectToApi(country) {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`;
  //  console.log(url);

  //El fetch recoje los datos y los convierte en json
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      recipesList = data.meals;
      renderRecipes();
      setLocalStorage();
      //  console.log(data);
    });
}

//Setters y getters

function setLocalStorage() {
  //setItem recibe siempre dos parámetros en STRING, los que recibe y los que metes
  localStorage.setItem("localList", JSON.stringify(recipesList));
}

function getLocalStorage() {
  //hay que volver convertirlo de STRING a lo que sea que fuese en un principio, en este caso un formato JSON
  let list = JSON.parse(localStorage.getItem("localList"));
  console.log(list);

  //si sale null...
  if (list != null) {
    return list;
  } else {
    return (list = []);
  }
}

//Handler

function handlerClick(ev) {
  //Utilizar PreventDefault para que no se recargue la página sola
  //solo cuando utilizamos input submit
  ev.preventDefault();
  conectToApi(selectElement.value);
}

buttonElement.addEventListener("click", handlerClick);

console.log("Cargo la página y llamo a getLocalStorage");
getLocalStorage();

///////////////////////////
//////////////////////////

//EJERCICIO 4

/////////////////////////
////////////////////////

const inputElementName = document.querySelector(".js-input");
const inputElementSurname = document.querySelector(".js-input2");
const pElement = document.querySelector(".js-p");
const formElement = document.querySelector(".form");
const inputObject = {};

function handleEvent(ev) {
  const eventTarget = ev.target;
}

function renderResult() {
  pElement.innerHTML = `Valor del input: ${inputElementName.value} ${inputElementSurname.value}`;

  // console.log(inputArray);
}

function setLocalStorage2() {
  //setItem recibe siempre dos parámetros en STRING, los que recibe y los que metes
  localStorage.setItem("localList2", JSON.stringify(inputObject));
}

function getLocalStorage2() {
  //hay que volver convertirlo de STRING a lo que sea que fuese en un principio, en este caso un formato JSON
  let list = JSON.parse(localStorage.getItem("localList2"));
  console.log(list);
}

function handleInput(ev) {
  //inputArray.push(ev.target.value);
  const inputName = ev.target.name;
  const inputValue = ev.target.value;
  console.log(inputName, inputValue);

  //inputObject.surname = inputValue;
  //inputObject['surname'] = inputValue;
  inputObject[inputName] = inputValue;
  console.log(inputObject);

  /*inputObject = {
    name: 'asf',
    surname: 'asdfsd'
  }*/
  renderResult();
  setLocalStorage2();
}

formElement.addEventListener("keyup", handleInput);

console.log("Ejercicio 4");
setLocalStorage2();
