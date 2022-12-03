'use strict'

/**
 * Hacer un programa para mostrar todos los numeros impares
 */

var nu1 = parseInt(prompt('Ingresa un numero', 0));
var nu2 = parseInt(prompt('Ingresa un numero', 0));


document.write("<h2>Los Impares de "+nu1+" a "+nu2+"</h2>");
for(var i = nu1; i < nu2; i++){
  if(i % 2 != 0){
    document.write('<p>Los Impares son: '+i+'</p>');

  }
}

/* var nu3 = parseInt(prompt('Ingresa un Numero', 0));
var nu4 = parseInt(prompt('Ingresa otro Numero', 0)); */

while(nu1 < nu2){
   nu1++;

   if(nu1%2!=0){
    console.log('El '+nu1+ 'Es impar');
   }
}
