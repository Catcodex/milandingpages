let menuVisible = false;
//funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById('nav').classList ='';
        menuVisible = false;
    }else{
        document.getElementById('nav').classList = 'responsive';
        menuVisible = true;
    }   
}

function seleccionar(){
    //oculta el menu cuando se seleccionar el menu
    document.getElementById('nav').classList = '';
    menuVisible = false;
}
//funcion que aplica a las animaciones de habilidades

function efectoHabilidades(){
    var skills = document.getElementById('skills');
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName('progreso');
        habilidades[0].classList.add('javascript');
        habilidades[1].classList.add('html');
        habilidades[2].classList.add('css');
        habilidades[3].classList.add('photoshop');
        habilidades[4].classList.add('react');
        habilidades[5].classList.add('node');
        habilidades[6].classList.add('agil');
        habilidades[7].classList.add('comunicacion');
        habilidades[8].classList.add('creatividad');
        habilidades[9].classList.add('dedicacion');
        habilidades[10].classList.add('linux');
        habilidades[11].classList.add('versatility');
    }
}
//detecto el scroling para aplicar las animaciones de la barra habilidades
window.onscroll = function(){
    efectoHabilidades();
}

