'use strict'

/**
 * Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
 * 
 */

var nu1 = parseInt(prompt('Introdusca un numero:', 0));
var nu2 = parseInt(prompt('Introdusca otro numero:', 0));


document.write("<h1>De "+nu1+ " a "+nu2+" estan estos numeros</h1>");
for(var i = nu1; i <= nu2; i++){
  document.write("<p>Los numeros son: "+i+"</p>");
  console.log(i);
}