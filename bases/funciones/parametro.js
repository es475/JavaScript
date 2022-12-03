'use strict'

//Parametros de funciones rest y spread

function listaFrutas(fruta1, fruta2, ...resto_frutas){
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    console.log(resto_frutas);
}
listaFrutas("Naranja", "Manzana", "Sandia", "Pera", "Melon", "Coco");


var frutas = ["Naranja", "Manzana"]
listaFrutas( ...frutas, "Sandia", "Pera", "Melon", "Coco");