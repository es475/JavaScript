'use strict'

//eventos
/**
 * eventos del raton
 */
window.addEventListener('load', () => {
  function cambiarColor(){
    console.log('Me has dado click');
    var bg = boton.style.background;
    if(bg == "green"){
      boton.style.background = "red";
    }else{
      boton.style.background = "green";
    }
    boton.style.padding = "10px";
    boton.style.border = "1px solid #ccc"
    return true;
  }
  
  
  var boton = document.querySelector('#boton');
  
  boton.addEventListener('click', function(){
   cambiarColor();
   this.style.border = "10px solid black";
  });
  
  boton.style.color = "white";
  //mouse over
  boton.addEventListener('mouseover', function(){
    boton.style.background = "#ccc";
  }); 
  
  //mouse 
  boton.addEventListener('mouseout', function(){
    boton.style.background = "black";
  }); 
  
  //focus
  var input = document.querySelector("#nombre");
  
  input.addEventListener('focus', function(){
    console.log("[focus] Estas dentro del input");
  });
  //blur
  input.addEventListener('blur', function(){
    console.log("[blur] Estas fuera del input");
  });
  
  //keydown
  input.addEventListener('keydown', function(event){
    console.log("[keydown] Plunsando esta tecla", String.fromCharCode(event.keyCode));
  });
  //keypress
  input.addEventListener('keypress', function(event){
    console.log("[keypress] Tecla pulsada", String.fromCharCode(event.keyCode));
  });
  
  //keyup
  input.addEventListener('keyup', function(event){
    console.log("[keyup] Tecla soltada", String.fromCharCode(event.keyCode));
  });
}); //fin load

