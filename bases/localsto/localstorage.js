'use strict'

//LocalStorage


if(typeof(Storage) !== 'undefined'){
   console.log('LocalSrorage');
}else{
   console.log('No disponible');

}

//guardar un dato en localstore
localStorage.setItem('data','Hola mundo estoy en locaSorage');

//recuperar datos del localsgtorage
document.querySelector("#peliculas").innerHTML= localStorage.getItem('data');

//como guardar objetos
var usuario = {
   nombre: 'Esteban',
   email: 'eagarciarhotmail.es',
   web: 'forwarz.com'
}

localStorage.setItem('user', JSON.stringify(usuario));

//recuperar del local storage
 var js = JSON.parse(localStorage.getItem('user'));
 console.log(js);
 document.querySelector('#datos').append(js.nombre+' - '+js.web);

 //borar elementos del localst
/*  localStorage.removeItem('user'); */
 localStorage.clear();
