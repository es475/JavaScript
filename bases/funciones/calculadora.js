'use strict'

//Se define las variables dinamicas
/* var nu1 = parseInt(prompt('Ingresa un numero!', 0));
var nu2 = parseInt(prompt('Ingresa otro numero!', 0)); */

//Defino la funcion calculadora
//parametros opcionales
function calculadora(nu1, nu2, mostrar = false){
    //instrucciones a ejecutar

    if(mostrar == false){

        console.log('La suma: '+(nu1+nu2));
        console.log('La resta: '+(nu1-nu2));
        console.log('La multiplicacion: '+(nu1*nu2));
        console.log('La division: '+(nu1/nu2));
        console.log(mostrar);
        console.log('******************************');
    }else{
        document.write('La suma: '+(nu1+nu2)+'<br/>');
        document.write('La resta: '+(nu1-nu2)+'<br/>');
        document.write('La multiplicacion: '+(nu1*nu2)+'<br/>');
        document.write('La division: '+(nu1/nu2)+'<br/>');
        document.write(mostrar+'<br/>');
        document.write('******************************');
    }
   
    //return 'Hola soy la calculadora';
}
//llamada de la function
/* calculadora(10, 5);
calculadora(4, 2); */
 calculadora(5, 5);
 calculadora(5, 2, true);

/* ciclo for con funcion calculadora
for(var i = 1; i <= 10; i++){
    console.log(i);
    calculadora(i, 8);
}
 */