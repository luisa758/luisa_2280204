"use strict"

/* operadores logicos */
/* &&...y
   ||...o
   !=...negacion
   xor..o exclusivo */

   /* si el aprendiz tiene jovenes en accion o sisben 
   puede acceder al susbsidio de transporte
   si no tiene jovenes en accion 
   tampoco puede acceder al subsidio de transporte */
   var jovenAccion = true;
   var sisbenUsuario = true;

   if (jovenAccion === true ^ sisbenUsuario === true) {
       console.log("usted puede acceder al beneficio de transporte");
   }
   else {
       console.log("no puede acceder al subsidio de transporte");
   }