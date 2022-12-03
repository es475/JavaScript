'use strict'

/**
 * Muestre todos los numeros divisores por un prompt
 */

var nu1 = parseInt(prompt('Ingresa un numero', 1));

for(var i = 1; i <= nu1; i++){

  if(nu1 % i == 0){
    console.log('Divisores '+ i);
  }
}