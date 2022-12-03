

var numero1 = parseInt(prompt("Ingresa un numero 1", 0));
var numero2 = parseInt(prompt("Ingresa un otro numero 2", 0));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
  numero1 = parseInt(prompt("Ingresa un numero 1", 0));
  numero2 = parseInt(prompt("Ingresa un otro numero 2", 0));
}
  

if(numero1 == numero2){
  alert("El numero: "+numero1+" Es igual al numero: "+numero2);
}else if(numero1 > numero2){
  alert("El numero: "+numero1+" Es mayor al numero: "+numero2);
  console.log("El numero: "+numero1+" Es mayor al numero: "+numero2);
}else if(numero1 < numero2){
  alert("El numero: "+numero1+" es menor al numero: "+numero2);
  console.log("El numero: "+numero1+" es menor al numero: "+numero2);
}else{
  alert("Introdusca un numero")
}