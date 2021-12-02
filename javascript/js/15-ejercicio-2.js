"use strict"

console.log("contando caracteres");
console.log("   ");

var texto = " Este es un texto con mas de 50 caracteres He aprendido que el valor no es la ausencia de miedo, sino el triunfo sobre él. El hombre valiente no es el que no siente miedo, sino el que lo domina - Nelson Mandela";


console.log("el texto que usted ingreso es: " + texto);
console.log("   ");
console.log("numero de caracteres: "+texto.length);
console.log("   ");
 if (texto.length>50){
     console.log("advertencia: ha excedido el numero de caracteres");
 }

 console.log(" ")

 console.log("busqueda de coincidencia");
 console.log("   ");
var libros = ["Boulevard","Cain","Strange","Lucifer","El Rey","Deseo","Eterno"];
var Nombrelibro="Strange";
console.log("El libro buscado es: "+ Nombrelibro);
if(libros.includes(Nombrelibro)){
    console.log("El libro se encontro");
}else {
    console.log("El libro no se encontro");
}


console.log("   ");
console.log("listado de aprendices")
console.log("   ");
var Aprendices=["Yolanda Bermeo","Alejandra Cardozo","Felipe Mendez","Luisa Ramirez","Sebastian Rendon","Estiven Becerra" ];
for(i=1;i<Aprendices.length;i++){
    console.log(i+" "+ Aprendices[i] )
}
