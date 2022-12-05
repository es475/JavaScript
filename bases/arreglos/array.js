'use strict'

//arrays arreglo, matris
var nombre = 'Victor Robles';
var nombres = ['Victor Robles', 'Juan Lopez', 'Manolo Garcia', 'Jose Martin'];

var lenguajes = new Array('php','js','go','java', 'c#');

console.log(nombres);
console.log(nombres[1]);
console.log(nombres[2]);
console.log(lenguajes);

var elemento = parseInt(prompt('Que elemento estas buscando?', 0));
if(elemento >= nombres.length){
    alert("Introduce el numero correcto menor que: "+nombres.length)

}else{
    alert('El usuario seleccionado es: '+nombres[elemento]);

}
document.write("<h2>Lenguajes de programacion del 2018</h2>");
document.write('<ul>');
for(var i = 0; i < lenguajes.length; i++){
    document.write('<li>'+lenguajes[i]+'</li>')
}
document.write('</ul>');

document.write("<h2>Lenguajes de programacion del 2019</h2>");
document.write('<ul>');

lenguajes.forEach((elemento, index) =>{
    /* console.log(arr); */
    document.write('<li>'+index+' - '+elemento+'</li>');
});
document.write('</ul>');