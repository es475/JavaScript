'use strict'

//load
/**
 * setInterval
 * setTimeout
 */

window.addEventListener('load', () => {

  //timer
  function intervalo(){

    var tiempo = setInterval(function(){
  
      var encabezado =  document.querySelector("h1");
  
        console.log("Set interval ejecutado");
       
  
        if( encabezado.style.fontSize == '50px'){
          encabezado.style.fontSize = "35px";
        }else{
          encabezado.style.fontSize = "50px";
        }
  
    }, 1000);

    return tiempo;
  }

  var tiempo = intervalo();

  var stop = document.querySelector("#stop");
  
  stop.addEventListener("click", function(){
    alert('Has Parado el intervalo en bucle');
    clearInterval(tiempo);
  })
  
  var iniciar = document.querySelector("#iniciar");

  iniciar.addEventListener('click', function(){
    alert('Has inicado el intervalo en bucle');
    intervalo();
  })

});