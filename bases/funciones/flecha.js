'use strict'

//funciones de flecha

function sumame(nu1, nu2, sumaYmuestra, sumaPorDos){
    var sumar = nu1 + nu2;

    sumaYmuestra(sumar);

    sumaPorDos(sumar)

   /*  return console.log(sumar); */
   return sumar;
}

sumame(5, 7, dato => {
  console.log('La suma es: '+dato);
}, dato => {
  console.log('La suma por 2 es: '+(dato*2));
});