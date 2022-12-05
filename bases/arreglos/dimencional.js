'use strict'

/**
 * Array dentro de mas array
 */

var categorias = ['Acción', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran Torino'];

var cine = [categorias, peliculas];
peliculas.push('Batman');

/* console.log(cine[0][0]);
console.log(cine[1][1]); */
var elemt = '';

do{

var elemt = prompt('Ingresa una pelicula a este menu!!');
peliculas.push(elemt);

}while(elemt != 'ACABAR');
    


console.log(peliculas);


