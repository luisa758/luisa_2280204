function validarInfo(numeroDocumento) {
    var texto= document.getElementById(numeroDocumento);
    if( texto.value === ""){
        alert("ingrese el numero de documento");
    }else{alert("se registro con exito");
}
}