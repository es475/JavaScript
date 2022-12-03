'use strict'

//Funciones entre funciones

function porConsola(nu1, nu2){
    console.log('La suma: '+(nu1+nu2));
    console.log('La resta: '+(nu1-nu2));
    console.log('La multiplicacion: '+(nu1*nu2));
    console.log('La division: '+(nu1/nu2));
    console.log('******************************');
}

function porPantalla(nu1,nu2){
    document.write('La suma: '+(nu1+nu2)+'<br/>');
        document.write('La resta: '+(nu1-nu2)+'<br/>');
        document.write('La multiplicacion: '+(nu1*nu2)+'<br/>');
        document.write('La division: '+(nu1/nu2)+'<br/>');
        document.write('******************************');
}

function calculadora(nu1, nu2, mostrar = false){
    if(mostrar == false){
        porConsola(nu1, nu2);
    }else{
        porPantalla(nu1, nu2);
    }

    return true;
}

calculadora(5, 2);
calculadora(5, 7, true);
