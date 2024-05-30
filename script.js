let menuVisible = false;
//Funcion que oculata la barra o muestra

function mostrarOcultar(){
    if(menuVisible){
        document.getElementById("nav").classList="";
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;

    }
 }
 function seleccionar(){

    document.getElementById("nav").classList = "";
    menuVisible = false;
 }

 //funcion para aplicar animaciones
 function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");

    }
 
 }

 window.onscroll = function(){
    efectoHabilidades();
 }
