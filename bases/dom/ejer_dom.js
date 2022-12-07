'use stric'

window.addEventListener('load', () => {
 console.log('Dom Cargado!!');

   var formulario = document.querySelector('#formulario');
   var box_dashed = document.querySelector('.dashed');
   box_dashed.style.display = 'none';
   
   formulario.addEventListener('submit', function(){
     console.log('event submit capturado');
     
     var nombre   = document.querySelector('#campo_nombre').value;
     var apellidos = document.querySelector('#campo_apellidos').value;
     var edad     = parseInt(document.querySelector('#campo_edad').value);

     if(nombre.trim() == null || nombre.length == 0){
      alert('El nombre no es valido');
      document.querySelector('#error_nombre').innerHTML = 'El nombre no es valido';
      return false;
    }else{
       document.querySelector('#error_nombre').style.display = "none";

     }

     if(apellidos.trim() == null || apellidos.length == 0){
      alert('El apellidos no es valido');
      return false;
     }

     if(edad == null || edad < 0 || isNaN(edad) ){
      alert('La edad no es valido');
      return false;
     }
     
     box_dashed.style.display = 'block';

     var p_nombre = document.querySelector('#p_nombre span');
     var p_apellido = document.querySelector('#p_apellido span');
     var p_edad = document.querySelector('#p_edad span');
     
     p_nombre.innerHTML = nombre;
     p_apellido.innerHTML = apellidos;
     p_edad.innerHTML = edad;
     /* var datos_user = [nombre, apellidos, edad];
     var user;
     for( user in datos_user){
       var parrafo = document.createElement('p');
         parrafo.append(datos_user[user]);
        parrafo.append(apellidos);
         parrafo.append(edad);  
         box_dashed.append(parrafo);
      
     } */
       

   });



});