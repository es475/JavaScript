'use strict'

// JSON - JavaScript Object Notacion

//* load
/* window.addEventListener('load', () =>{
  console.log('Estamos en el dom'); */

  var pelicula = {
    title: 'Batman vs Superman',
    year: 2017,
    pais: 'Estados Unidos'
  };

  var peliculas = [{title: 'La verdad duele', year: '2016', pais: 'Francia'},
                    pelicula];
  
  /* pelicula.title = 'Batman Begins'; */
var caja_pelicula = document.querySelector('#peliculas');

  var peli;
  for(peli in peliculas){
    var p = document.createElement('p');
    p.append(peliculas[peli].title +' - '+peliculas[peli].year+' - '+peliculas[peli].pais);
    p.append();
    caja_pelicula.append(p);
  }
  /* console.log(pelicula); */

/* }); */