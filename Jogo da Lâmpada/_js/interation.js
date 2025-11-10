var lampada = document.querySelector("#lampada")

var partido = false

lampada.addEventListener("mouseenter", Activar)
function Activar(){
    if(!partido){
        lampada.src="_img/On.jpg"    
    }
}

lampada.addEventListener("mouseleave", Desativar)
function Desativar(){
    if(!partido){
        lampada.src="_img/Off.jpg"
    }
}

lampada.addEventListener("click", Partir)
function Partir(){
    lampada.src="_img/Broken.jpg"
    partido=true
}  

