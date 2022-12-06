'use strict'

/**
 * Array dentro de mas array
 */

var categorias = ['Acción', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran Torino'];

//SORT(), ORDENAR UN ARREGLO
//DAR LA VUELTA A UN ARRAY REVERSE()

var cine = [categorias, peliculas];
peliculas.push('Batman');

/* console.log(cine[0][0]);
console.log(cine[1][1]); */
var elemt = '';

do{

var elemt = prompt('Ingresa una pelicula a este menu!!');
peliculas.push(elemt);

}while(elemt != 'ACABAR');
    
/* peliculas.pop(); */
/* peliculas[0] = undefined; */

console.log(peliculas);

var indice = peliculas.indexOf('Gran Torino');

if(indice > -1){
  peliculas.splice(indice, 1);
}

var peliculas_string = peliculas.join(); 

// TRANFORMAR UN TEXTO EN ARRAY
var cadena = "tex1, tex2, tex3";
var cadena_array = cadena.split(', ');
console.log(cadena_array);

//



