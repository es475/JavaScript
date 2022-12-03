'use strict'

/**
 * Calculadora
 * Pida dos numeros si uno esta mal nos vuelva a pedir
 * En el cuerpo de la pagina, en una alert() y por la consola
 * restar,sumar multiplicar y dividir 
 */

var nu1 = parseInt(prompt('Ingrese un Numero', 0));
var nu2 = parseInt(prompt('Ingrese otro Numero', 0));

while(nu1 <= 0 || nu2 <= 0 || isNaN(nu1) || isNaN(nu2)){
  nu1 = parseInt(prompt('Ingrese un Numero', 0));
  nu2 =parseInt(prompt('Ingrese otro Numero', 0));
}

/* var suma = nu1 + nu2;
var resta = nu1 - nu2;
var multi = nu1 * nu2;
var divid = nu1 / nu2; */
var resultado = "La suma es: "+(nu1+nu2)+"<br/>"+
              "La resta es: "+(nu1-nu2)+"<br/>"+
              "La Multiplicacion es: "+(nu1*nu2)+"<br/>"+
              "La division es: "+(nu1/nu2)+"<br/>";


  document.write(resultado);       

 alert('Esta es la suma: '+(nu1+nu2));
console.log('Esta es la suma: '+(nu1+nu2));
alert('Esta es la resta: '+(nu1-nu2));
console.log('Esta es la resta: '+(nu1-nu2));
alert('Esta es la multiplicacion es: '+(nu1*nu2));
console.log('Esta esla multiplicacion es: '+(nu1*nu2));
alert('Esta es la division: '+(nu1/nu2));
console.log('Esta es la divicion: '+(nu1/nu2)); 

