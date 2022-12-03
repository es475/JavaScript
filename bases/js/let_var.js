'use stric'

//prueba con let y var
var numero = 40;
console.log(numero); // vale 40

if(true){
  var numero = 50;
  console.log(numero); //vale 50
}

console.log(numero); //vale 50

//prueba con let
let numero1 = 40;
console.log(numero1); // vale 40

if(true){
  let numero1 = 50;
  console.log(numero1); //vale 50
}

console.log(numero1); //vale 40

var texto = 'Prueba con var';
console.log(texto); // valor =

if(true){
  let texto = 'prueba con let';
  console.log(texto);//let
}
console.log(texto); // var