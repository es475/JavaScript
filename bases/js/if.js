'use strict'

//condicionales IF
// si a es igual a b entonces has algo

/* var edad2 = 31;
//si pasa esto
if(edad1 > edad2) {
  //ejecuta esto.
  console.log('Edad uno es mayor que edad2');
}else{
  console.log('La edad uno es inferior');
} */
var edad = 70;
var nombre = 'David Suarez';

/*
  //Operadores
  Mayor: >
  Menor: <
  Mayor o Igual: >=
  Menor o Igual: <=
  Igual: ==
  Identico: ===
  Distinto: !=
*/

if(edad >= 18){
       console.log('Hola '+ nombre + ' Eres mayor de edad ' + edad);

       if(edad <= 33){
          console.log('todavia eres mileneas');
        }else if(edad >= 70){
         console.log('Eres Anciano');
       }else{
         console.log('Ya no eres mileneal');
       }
}else{
  console.log('Hola '+nombre+' Eres menor de edad '+edad);
}
/*
//*operadores logicos
and(y) : &&
or(o): ||
negacion: !
*/

var year = 2018;
//negacion
  if(year != 2016){
     console.log('El Año no es 2016, realmente es: '+year);
  }
//and
if(year >= 2000 && year <= 2020 && year != 2018) {
  console.log('Estamos en la era actual.');
}else{
  console.log('Estamos en la era post moderna');
}
