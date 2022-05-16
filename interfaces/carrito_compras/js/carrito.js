"use stricct"

function pruebaSuma() {
    let cantidadLibros = document.getElementById("cantidadLibros").innerHTML;
    if(cantidadLibros>0 && cantidadLibros>15){

    cantidadLibros = Number(cantidadLibros) + 1;
    document.getElementById("cantidadLibros").innerHTML = cantidadLibros;
    modificarTotal();
}else {
    alert("solo puede comprar de 1 a 15 libros")
}
}

function pruebaSuma() {
    let cantidadLibros = document.getElementById("cantidadLibros").innerHTML;
    if(cantidadLibros>0 && cantidadLibros>15){

    cantidadLibros = Number(cantidadLibros) - 1;
    document.getElementById("cantidadLibros").innerHTML = cantidadLibros;
    modificarTotal();
}else {
    alert("solo puede comprar de 1 a 15 libros")
}
function modificarTotal()