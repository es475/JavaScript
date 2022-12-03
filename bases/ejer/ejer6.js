'use strict'

/**
 * Diga que un numero es par o impar
 * Ventana prompt
 * si no es valido que nos pida de nuevo el numero
 */

var nu1 = parseInt(prompt('Ingresa un numero', 0));

while(nu1 <= 0 || isNaN(nu1)){
  nu1 = parseInt(prompt('Ingresa un numero', 0));

}


if(nu1 % 2 != 0){
  console.log('Es impar: '+nu1);
} else if(nu1 % 2 == 0){
  console.log('Es par: '+nu1);
}else{
  alert('Ingresa un Numero Valido');
} 