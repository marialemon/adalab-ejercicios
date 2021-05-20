"use strict";

//Ejercicio 10

function getBoxWidth(borderBox, width, padding, borderSize) {
  //Si es borderBox if
  //ancho - padding - borderSize
  //Si no es borderBox (es contentBox) else
  //ancho + padding + borderSize

  if (borderBox === true) {
    const totalWidth = width - padding - borderSize;
    console.log(
      `El ancho del contenido es ${totalWidth} y el ancho total de la caja es ${width}`
    );
  } else {
    const totalWidth = width + padding + borderSize;
    console.log(
      `El ancho del contenido es ${width} y el ancho total de la caja es ${totalWidth}`
    );
  }
}

getBoxWidth(true, 100, 10, 3);
getBoxWidth(false, 100, 10, 3);
