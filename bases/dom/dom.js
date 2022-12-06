'use strict'

//documen object model
/* .innerHTML */
function cambiaColor(color){
    caja.style.background = color;
}

/* var caja = document.getElementById('micaja'); */
var caja = document.querySelector('#micaja');
caja.innerHTML = "!Texto desde js¡";
caja.style.background = 'red';
caja.style.padding = '20px';
caja.style.color = 'white';
caja.className = 'hola';
console.log(caja);

//como conseguir elementos por sus etiquetas
var todosLosDiv = document.getElementsByTagName('div');

console.log(todosLosDiv);
/* .textContent */
var content = todosLosDiv[2];
content.innerHTML = "!otros texto de divs";
content.style.background = 'red';

console.log(content);


todosLosDiv.forEach((element, indice) => {
    var parrafo = document.createElement('p');
    var texto = document.createTextNode(element);
    parrafo.appendChild(texto);
});



//como conseguir elementos por sus clase css

