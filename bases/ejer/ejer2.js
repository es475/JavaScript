'use strict'

/*
Utilizar un bucle, mostrar la suma y la media de los numeros ingresados
hasta introducir un numero negativo y ahi mostar el resultado
*/

var suma = 0;
var contador = 0;


do{
  var numero = parseInt(prompt('Ingresa un numero y termina la secuencia con un negativo', 0));

  if(isNaN(numero)){
    numero = 0;

  }else if(numero >= 0){
    suma += numero; 
    
    contador++;
  }
  console.log(suma);
  console.log(contador);

  var media = suma / contador;
  console.log(media);

}while(numero >= 0);

alert("La suma de todos los numero es: "+suma);
/* alert("La media de la suma es: "+(suma/contador)); */
alert("La media de la suma es: "+media);