console.log("operador condicional");
"use strict"

console.log("condicional simple");
var edad = 18;
if (edad >= 18) {
    console.log("bienvenido. dirijase a la mesa de votación");
}

console.log("condicional compuesto");
var personas =60;
console.log("el numero de personas es de:" + personas);
if(personas<=20){
    console.log("use el ambiente 1");
}
else if(personas>20 && personas<=40){
    console.log("use el ambiente 2");
}
else if(personas>40 && personas<=100){
    console.log("use el bioauditorio");
}
else if(personas>100){
    console.log("no hay ningun ambiente con capacidad para todas las personas");
}
else{
    console.log("a surgido un error");
}
console.log("condicional anidado");
/* sistema para determinar el descuento del usuario*/
/*si el usuario es menor a 10 años o mayor a 70 años tiene 
un descuento sobre el valor del tiquete del 10% 
si el destino es cartagena tiene descuento adicional del 10% 
si la aerolinea es latam a dicho destino, estos usuarios
tiene descuento adicional del 10%*/
var edadUsuario = 71;
var aerolineaUsuario = "latam";
var destinoUsuario = "san Andres";
var valorTiquete = 250000;
var descuento = .10;
var valordescuento = (valorTiquete * .10);

if(edadUsuario <= 10 || edadUsuario >=70){
    valorTiquete = (valorTiquete - (valorTiquete - valordescuento));

    if(destinoUsuario === "cartagena"){
    valorTiquete = (valorTiquete - (valorTiquete *- valordescuento));

    if(aerolineaUsuario === "latam"){
        valorTiquete = (valorTiquete - valordescuento);
    }
  }
}
console.log("valor del tiquete: $" + valorTiquete);