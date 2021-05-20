"use strict";

////////2_07 BUCLES

let movies = ["whiplash", "interestelar", "the greatest showman"];

movies.push("dooonie");

console.log(movies);

//Ejercicio 7: a story of adalabers

const arrayAdalabers = [
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
  {
    name: "Rosa",
    age: 39,
    job: "cineasta",
  },
];

function countAdalabers(students) {
  return students.length;
}

function theYoungest(students) {
  console.log(students);
  let youngestName = "";
  let youngestAge = 100;
  //  debugger;
  //Aquí creamos un array llamado students
  for (const student of students) {
    //queremos comparar la edad de cada una
    if (youngestAge < student.age) {
      console.log(student);
      youngestAge = student.age;
      youngestName = student.name;
    }

    console.log(youngestAge, youngestName);
  }
}

console.log(theYoungest(arrayAdalabers));
