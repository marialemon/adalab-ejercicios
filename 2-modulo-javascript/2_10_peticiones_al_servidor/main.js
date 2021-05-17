"use strict";

const nickName = document.querySelector(".js-nickName");

function paintNickName(nickNa) {
  nickName.innerHTML = nickNa;
}

fetch("./file.json")
  .then((response) => response.json())
  .then((data) => {
    //  console.log(data.configEntities.identityStore.nickname);

    const nick = data.configEntities.identityStore.nickname;

    paintNickName(nick);
  });

console.log("Página principal");

//Ejercicio 2: Chihuahuas

console.log("EJERCICIO 2: Chihuahuas");

const imgChihuahua = document.querySelector(".js-chihuahuaImg");

fetch("https://dog.ceo/api/breed/chihuahua/images/random")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.message);
    imgChihuahua.innerHTML = `<img src="${data.message}" width="200px"/>`;
  });

//Ejercicio 6: La raza del perro

//Pintar el listado de razas
//Pintar una imagen de cada raza

const breedList = document.querySelector(".js-breedList");
const listArrayBreed = [];

fetch("https://dog.ceo/api/breeds/list/all")
  .then((response) => response.json())
  .then((data) => {
    //  console.log(data);
    for (const breed in data.message) {
      listArrayBreed.push(breed);
      breedList.innerHTML += `<li>${breed}</li>`;

      //para pintar una imagen, hay que hacer otra nueva petición
      //hay que sustituir una parte de la url por la parte de la imagen de la raza correspondiente
      //tenemos esta url "https://dog.ceo/api/breed/cairn/images/random"
      //hay que modificarla como vemos más abajo
      let url = `https://dog.ceo/api/breed/${breed}/images/random`;
      //    console.log(url);

      //hacer un fetch para conseguir la ruta de la imagen que queremos pintar
      fetch(url)
        .then((result) => result.json())
        .then((dataImg) => {
          //     console.log(dataImg.message);
          breedList.innerHTML += `<li><img src="${dataImg.message}" width="150px"/></li>`;
        });
    }
  });
