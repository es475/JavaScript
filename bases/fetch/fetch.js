'use strict'

console.log('listo');
//fetch y peticiones a rest
var dato = document.querySelector('#users');
var profesor = document.querySelector('#profe');
var bauch1 = document.querySelector('#bauch');

/* var usuarios = []; */
/*   usuarios = data;
  console.log(usuarios); */


//capturar los datos se convierten a json
getUsuarios()
  .then(data => data.json())
  .then(data => {
    listaUsuarios(data);
    return getInfo();

    
  })
  .then(data => {
    profesor.innerHTML = data;
    console.log(data);
    return getBauch();
  })
  .then(data => data.json())
  .then(bauch => {
    nostrarBauch(bauch);
 
  })
  .catch(error =>{
    alert('Error en las Peticiones: '+ error);
   console.log(error+' fff');
  });

  function getUsuarios(){
    return fetch('https://jsonplaceholder.typicode.com/users');
  }
  function getBauch(){
    return fetch('https://jsonplaceholder.typicode.com/users/2');
  }

  function getInfo(){
   
    var profesor = {
      nombre: 'Esteban',
      apellido: 'Garcia',
      url: 'https://google.com'
    };
    return new Promise((resolve, reject) => {
      var profesorS = '';
      setTimeout(function(){
       profesorS = JSON.stringify(profesor);

       if(typeof profesorS != 'string' || profesorS == '') return reject('error 1');
       
         return resolve(profesorS);

    },3000)
      


    })


  }

  function listaUsuarios(usuarios){
    usuarios.map((data, i) =>{
      let nombre = document.createElement('h3');
      let email = document.createElement('p');
     nombre.innerHTML = i +' - '+ data.name + " - " + data.username;
     email.innerHTML = data.email;


     dato.appendChild(nombre);
     dato.appendChild(email);

    document.querySelector('.loading').style.display = 'none';
    });
  }

  function nostrarBauch(bauch){
     console.log(bauch); 
      let nombre = document.createElement('h4');
      let email = document.createElement('p');
      /* let avatar =document.createElement('img'); */
     nombre.innerHTML = ' - '+ bauch.name + " - " + bauch.username;
     email.innerHTML = bauch.email;
   /*   avatar.src = bauch.avatar;

     avatar.width = '100'; */



     bauch1.appendChild(nombre);
     bauch1.appendChild(email);
    /*  bauch.appendChild(avatar); */

    document.querySelector('#bauch .loading').style.display = 'none';
    
  }