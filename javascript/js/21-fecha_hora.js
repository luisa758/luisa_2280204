"use strict"

/*imprimir fecha y hora del navegador */
var currentTime = new Date();
console.log(currentTime);

/*desglosando fechas y horas */
var anyo = currentTime.getFullYear();
console.log("Año: " + anyo);

var mes = currentTime.getMonth();
console.log("Mes: " + (mes + 1));

var diasemana = currentTime.getDay();
console.log("Día: " + diasemana);

var dia = currentTime.getDate();
console.log("Día: " + dia);

var hora = currentTime.getHours();
console.log("Hora: " + hora);

var minutos = currentTime.getMinutes();
console.log("Minutos: " + minutos);

var milisegundos = currentTime.getUTCMilliseconds();
console.log("Milisegundos: " + milisegundos);

var time = currentTime.getTime();
console.log("Los milisegundos que han transcurrido desde 1970: " + time);

/*cambiar el dia de la semana por texto */
var Adiasemana = new Array();
Adiasemana[0] = "Domingo";
Adiasemana[1] = "Lunes";
Adiasemana[2] = "Martes";
Adiasemana[3] = "Miercoles";
Adiasemana[4] = "Jueves"; 
Adiasemana[5] = "Viernes";
Adiasemana[6] = "Sabados";
console.log("Día de la semana es: " + Adiasemana [diasemana]);

/*fecha: jueves, 2 de diciembre del año 2021 */
var Ames = new Array();
Ames[0] = "Enero";
Ames[1] = "Febrero";
Ames[2] = "Marzo";
Ames[3] = "Abril";
Ames[4] = "Mayo"; 
Ames[5] = "Junio";
Ames[6] = "Julio";
Ames[7] = "Agosto";
Ames[8] = "Septiembre";
Ames[9] = "Octubre";
Ames[10] = "Nobiembre";
Ames[11] = "Diciembre";

console.log("Día de la semana es: " + Adiasemana [diasemana]);
console.log("Fecha: " + Adiasemana [diasemana] + " " + dia + " de " + Ames [mes] + " del año " + anyo);

var fechafutura = new Date("August 7, 2022")
/* obtengo los segundos transcurridos hasta el dia de hoy  */
var mscurrent = currentTime.getTime();
var msfechafutura = currentTime.getTime();
console.log(mscurrent, msfechafutura);
var diffmsfechafutura = (msfechafutura - mscurrent);
console.log(diffmsfechafutura);