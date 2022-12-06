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

function mostrarArray(elementos, textoCustom = ""){

  document.write('<h2>Este es mi idea de Array'+textoCustom+'</h2>');
  document.write('<ul>');
  for(let elemento of elementos){
    
    document.write('<li>'+elemento+'</li>');
  }
  document.write('</ul>');
}
/* arreglo mostrado por pantalla */
mostrarArray(numeros);

/* document.write('<h2>Ordenar el array:</h2>');
document.write(numeros.sort());
console.log(numeros.sort()); */

numeros.sort(function(a, b) { return a-b});
mostrarArray(numeros, 'Ordenados');


/* document.write('<h2>Invertir el array:</h2>');
document.write(numeros.reverse());
console.log(numeros.reverse()); */

numeros.reverse();
mostrarArray(numeros, 'Al reves');



document.write('<h2>Conteo del array: '+numeros.length+'</h2>');
/* console.log(numeros); */



/**
 * buscar un elemento
 */

var buscar = parseInt(prompt('Ingresa el numero a buscar: ',0));

var buscas = numeros.find(num => num == buscar);

if(buscas == true){

  document.write('<h2>El Numero que buscas es: '+buscas+'</h2>');
}else{
  document.write('<h2>No se encontro ese Numero en el array: '+buscar+'</h2>');

}


