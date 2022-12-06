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

var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");


var valor;
for(valor in todosLosDiv) {
    if(typeof todosLosDiv[valor].textContent == 'string'){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDiv[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
};
seccion.append(hr);

//como conseguir elementos por sus clase css
var divs = document.getElementsByClassName('rojo');
var divsA = document.getElementsByClassName('amarillo');
divsA[0].style.background = "blue";
console.log(divsA)
var color;
for(color of divs){
    color.style.background = 'green';

}
console.log(divs);

//queryselector
var id = document.querySelector('#encabezado');
console.log(id);

var claseR = document.querySelector('.rojo');
console.log(claseR);
