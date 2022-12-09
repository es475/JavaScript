'use strict'

var form = document.querySelector('#formPelicula');

form.addEventListener('submit', function(){
  /* console.log('entra'); */
   var peli = document.querySelector('#addpelicula').value;
   if(peli.length >= 1 ){
     localStorage.setItem(peli, peli );

   }
});

var ul = document.querySelector('#peliculaStorage');
for(var i in localStorage){
  
  if(typeof localStorage[i] == 'string'){ 
    var li = document.createElement('li');
    li.append(localStorage[i]);
    ul.append(li);
    
  } 
}

var formu = document.querySelector('#formBorrarPelicula');

formu.addEventListener('submit', function(){
  /* console.log('entra'); */
   var peli = document.querySelector('#borraPelicula').value;
   if(peli.length >= 1 ){
     localStorage.removeItem(peli, peli );

   }
});