'use strict'

var fecha = new Date();

var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();
var min = fecha.getMinutes();

var textoHora =`
      El Año es: ${year}
      El mes es: ${mes}
      El dia es: ${dia}
      La hora es: ${hora}
      La minutis es: ${min}
`;

console.log(textoHora);
console.log(Math.ceil(Math.random()*1000));