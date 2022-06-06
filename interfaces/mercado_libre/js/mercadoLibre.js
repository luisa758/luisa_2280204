class automovil{
    constructor(marca,modelo,version,year,precio,kilometraje,ciudad,imagen){
        this.marca=marca;
        this.modelo=modelo;
        this.version=version;
        this.year=year;
        this.precio=precio;
        this.kilometraje=kilometraje;
        this.ciudad=ciudad;
        this.imagen=imagen;
    }
}

let car1= new automovil("Mazda","cx-5","Grand Touring","2020","115000000","38","Bogota","img/mazda.jpeg");
let car2= new automovil("Mazda","cx-30","Grand Touring","2020","115000000","38","Bogota","img/mazda1.jpeg");
let car3= new automovil("Mazda","cx-3 2.0","Grand Touring","2020","115000000","38","Bogota","img/mazda2.jpeg");
let car4= new automovil("Toyota","prado","txl","2015","185000000","115","Bogota","img/toyotaPrado.png");
let car5= new automovil("Toyota","corolla","cross se-g hibrido","2015","130000000","12","Bogota","img/toyota2.jpeg");
let car6= new automovil("Toyota","4runner","limited automatica","2015","183000000","135","Bogota","img/toyota1.jpeg");
let car7= new automovil("Suzuki ","Vitara ","All Grip 1.4","2020","89000000","23","Bogota","img/suzuki.jpeg");
let car8= new automovil("Suzuki ","Vitara ","2wd at at gl","2023","85900000","1","Bogota","img/suzuki1.jpeg");
let car9= new automovil("Suzuki ","Vitara ","All Grip sport","2022","104000000","4.5","Bogota","img/suzuki2.jpeg");

function Busqueda(car){
    let contenedorPrincipal=document.getElementById("contenidoPrincipal");
    let contimg= document.createElement("div");
     contenedorPrincipal.appendChild(contimg);
     contimg.setAttribute("class","contenido");

    let img= document.createElement("img");
    img.setAttribute("src", car.imagen);
    img.setAttribute("class","img");
    contimg.appendChild(img);

    let valorcar= document.createElement("label");

    let precioFormat = new Intl.NumberFormat('es-ES', {}).format(car.precio);

    let textValorCar= document.createTextNode("$" + precioFormat);
    valorcar.appendChild(textValorCar);
    valorcar.setAttribute("class","precio");
    contimg.appendChild(valorcar);

    let descripcion= document.createElement("label");
    let textdesccar=document.createTextNode(car.marca+" " +car.modelo+" "+ car.version);
    descripcion.appendChild(textdesccar);
    descripcion.setAttribute("class","descripcion");

    contimg.appendChild(descripcion);

    let yearcar=document.createElement("label");
    let textyear=document.createTextNode(car.year);
    yearcar.appendChild(textyear);
    yearcar.setAttribute("class","year");
    contimg.appendChild(yearcar);

    let kilometrajecar=document.createElement("label");
    let textkilometraje=document.createTextNode(car.kilometraje+" kilometros");
    kilometrajecar.appendChild(textkilometraje);
    kilometrajecar.setAttribute("class","kilometraje");
    contimg.appendChild(kilometrajecar);

    let city=document.createElement("label");
    let textcity=document.createTextNode(car.ciudad);
    city.appendChild(textcity);
    city.setAttribute("class","ciudad");
    contimg.appendChild(city);

}

window.addEventListener("keydown",function(event){
    let Busq=document.getElementById("textBuscador").value;
    if(event.key=="Enter"){
        console.log(Busq);
        cleanwindow();
        if(Busq=="mazda"){
            Busqueda(car1); 
            Busqueda(car2); 
            Busqueda(car3);          
        }
        else if(Busq=="toyota"){
            Busqueda(car4);
            Busqueda(car5);
            Busqueda(car6);
        }
        
        else if(Busq=="suzuki"){
            Busqueda(car7);
            Busqueda(car8);
            Busqueda(car9);
        }
        else{
            alert("sin coincidencias");
        }
    }
})
function cleanwindow(){
    document.getElementById("contenidoPrincipal").innerHTML="";
}