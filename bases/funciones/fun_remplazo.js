'use strict'

//Transformacion de text 
var nu1 = 444;
var text = " Bienvenido al curso de curso JavaScript de Victor Robles ";
var text1 = "Es muy bueno el curso";

var busqueda = text.replace('curso', 'cursos');
  console.log(busqueda);
  var busqueda = text.slice(14, 22);
  console.log(busqueda);
  var busqueda = text.split(' ');
  console.log(busqueda);
  var busqueda = text.trim(' ');
  console.log(busqueda);