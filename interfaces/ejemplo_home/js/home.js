"use strict"

let idRoca = document.getElementById("idRoca");
let idMegan = document.getElementById("idMegan");
let idAdam = document.getElementById("idAdam");

idRoca.addEventListener("click",()=> {
    idRoca.classList.remove("div-roca");
    idRoca.classList.add("div-roca-hidden");
    idMegan.classList.remove("div-megan-hidden");
    idMegan.classList.add("div-megan");
});
idMegan.addEventListener("click",()=>{
    idMegan.classList.remove("div-megan");
    idMegan.classList.add("div-megan-hidden");
    idRoca.classList.remove("div-roca-hidden");
    idRoca.classList.add("div-roca");
});

