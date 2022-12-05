'use strict'

//Plantillas

var nombre = prompt("METE TU NOMBRE");
var apellidos = prompt("METE TUS APELLIDOS");

var text = 'Mi Nombre es: '+nombre+' Mis apellidos son: '+ apellidos; 

document.write(text);

var text1 = `
   <h2>Hola que tal</h2>
   <h3>Mi nombre es: ${nombre}</h3>
   <h3>Mis apellidos son: ${apellidos}</h3>
`;

document.write(text1);