'use strict'

/**
 * la tabla de multiplicar introducida por pantalla
 */

var nu1 = parseInt(prompt('Ingresa un numero para crear la tabla', 0));

console.log('La tabla del: '+nu1);
document.write('<h2>La tabla del: '+nu1+'</h2>');
for(var i = 1; i <= 10; i++){
  console.log('La tabla del: '+nu1+ 'x' +i+'='+(nu1*i));
  document.write('<p>La tabla del: '+nu1+ 'x' +i+'='+(nu1*i)+'</p>');
}
var nu2 = 1;
for(var x = nu2; x <= 10; x ++){
  
  document.write('<h2>La tabla del: '+x+'</h2>');
  for(var i = 1; i <= 10; i++){
    console.log('La tabla del: '+x+ 'x' +i+'='+(x*i));
    document.write('<p>La tabla del: '+x+ 'x' +i+'='+(x*i)+'</p>');
  }

}