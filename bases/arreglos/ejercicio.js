'use strict'

/**
 * 1. Pida 6 numeros por pantalla y los meta en un array
 * 2.tiene que mostrar el array en el cuerpo de la pagina y en la consola
 * 3.Ordenar el arreglo
 * 4. invertir su orden 
 * 5.mostrar cuantos elemetps tiene el array
 * 6.Buscar un valor introducido por el usuario que nos diga si lo encuentra y su indice
 */

//creamos la variable para el usuario
var nu1 = parseInt(prompt('Ingresa la longitud del array', 0)); 

var numeros = new Array();
var contador = 0;

do {
  var nu2 = parseInt(prompt('Ingresa un numero', 0)); 
  numeros.push(nu2);

  contador++;
  
} while (contador != nu1);


console.log(numeros); 


document.write('<h2>Este es mi idea de Array</h2>');
document.write('<ul>');
for(let numero of numeros){
  
  document.write('<li>'+numero+'</li>');
}
document.write('</ul>');


document.write('<h2>Ordenar el array:</h2>');
document.write(numeros.sort());
console.log(numeros.sort());


document.write('<h2>Invertir el array:</h2>');
document.write(numeros.reverse());
console.log(numeros.reverse());

document.write('<h2>conteo del array:</h2>');
document.write(numeros.length());
console.log(numeros.length());





