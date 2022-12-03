'use strict'

/*
//Programa que pida dos numeros y que nos diga cual es mayor, menor y si son iguales.
*/

var num1 = Number(prompt("Ingresa un numero", 0));
var num2 = Number(prompt("Ingresa el un segundo numero", 0));

/* Number(num1);
Number(num2); */


if(num1 > num2){
    console.log("El numero: "+num1+" es mayor que el numero: "+num2);
}
if(num2 < num1){
    console.log("El numero: "+num2+" es nemor que el numero: "+num1);
}else if(num1 == num2){
    console.log("El numero 1: "+num1+" es igual la numero 2: "+num2);

}

