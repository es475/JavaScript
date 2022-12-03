'use strict'

//funciones anonimas callback
//* es una funcio que no tiene nombre

var pelicula = function(nombre){
    return "La pelicula es: "+nombre;
}

//funcion con anonimo y callback

function sumame(nu1, nu2, sumaYmuestra, sumaPorDos){
    var sumar = nu1 + nu2;

    sumaYmuestra(sumar);

    sumaPorDos(sumar)

   /*  return console.log(sumar); */
   return sumar;
}

sumame(5, 7, function(dato){
  console.log('La suma es: '+dato);
}, function(dato){
  console.log('La suma por 2 es: '+(dato*2));
});

/* console.log(sumame(4, 5)); */
