'use strict'

//localstorage guardar informacion en el navegador.
if(typeof(Storage) !== 'undefined'){
   console.log('LocalStorage Disponible'); 
}else{
    console.log('LocalStorage No Disponible'); 

}


//guardar dato en localstorage
localStorage.setItem('title', 'Curso de JS en Mexico');

//recuperar elemento
/* document.write(localStorage.getItem('title')); */
document.querySelector('#peliculas').innerHTML = localStorage.getItem('title');

console.log(localStorage.getItem('title'));

//guardar objetos
var usuario = {
    nombre: 'Esteban',
    email: 'eagarcia@gmail.com',
    web: 'eagarcia.com'

};



localStorage.setItem('Datos', JSON.stringify(usuario));

//recuperar un JSON
/* console.log(localStorage.getItem('Datos')); */
var user = JSON.parse(localStorage.getItem('Datos'));

console.log(user);

document.querySelector('#datos').append(user.nombre+' - '+user.web);

//borrar el localstorage
/* localStorage.removeItem('Datos'); */
localStorage.clear();


//combertir




