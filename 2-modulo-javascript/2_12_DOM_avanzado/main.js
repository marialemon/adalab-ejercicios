"use strict";

const selectElement = document.querySelector(".js-select");
const formElement = document.querySelector(".js-form");

const inputElementName = document.querySelector(".js-inputName");
const inputElementSurname = document.querySelector(".js-inputSurname");
const inputElementTel = document.querySelector(".js-inputTel");

const userList = [
  {
    id: "123",
    name: "Juana",
    surname: "Flores",
    tel: 123456,
  },
  {
    id: "456",
    name: "Paquita",
    surname: "Salas",
    tel: 666666,
  },
  {
    id: "789",
    name: "Concha",
    surname: "Velasco",
    tel: 456789,
  },
];
console.log(userList);

function addSelectOption() {
  for (const user of userList) {
    const optionElement = document.createElement("option");
    selectElement.appendChild(optionElement);
    const textElement = document.createTextNode(user.name);
    optionElement.appendChild(textElement);

    //  optionElement.value = user.name

    //setAttribute tiene dos valores: el atributo y el valor de dentro
    optionElement.setAttribute("value", user.name);

    //dataset permite crear un atributo INVENTADO, que lo único que tendrá es información para el programador
    optionElement.dataset.idUser = user.id;
  }
}
addSelectOption();

function handlerSelect(ev) {
  const selectValue = ev.target.value;

  let acc = 0;
  for (let i = 0; i < userList.length; i++) {
    const selectDatasetId = ev.target[i].dataset.idUser;
    acc += 1;

    console.log(selectValue, selectDatasetId, acc);
  }
}

selectElement.addEventListener("change", handlerSelect);
