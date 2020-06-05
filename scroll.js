function apareceScroll() {
    var html = document.getElementsByTagName("html")[0];
    var elementoAparece = document.getElementsByClassName("galeria-port");
    
    document.addEventListener("wheel", function(){
        var topVent = html.scrollTop;
        for (var i=0; i < elementoAparece.length; i++){
            var topelemAparece = elementoAparece[i].offsetTop;
            if(topVent > topelemAparece - 400){
                elementoAparece[i].style.opacity = 1;
            }
        }
    })
}

apareceScroll();

function apareceScroll1() {
    var html = document.getElementsByTagName("html")[0];
    var elementoAparece = document.getElementsByClassName("contenedor-sobre-nosotros");
    
    document.addEventListener("wheel", function(){
        var topVent = html.scrollTop;
        for (var i=0; i < elementoAparece.length; i++){
            var topelemAparece = elementoAparece[i].offsetTop;
            if(topVent > topelemAparece - 400){
                elementoAparece[i].style.opacity = 1;
            }
        }
    })
}

apareceScroll1();

function apareceScroll2() {
    var html = document.getElementsByTagName("html")[0];
    var elementoAparece = document.getElementsByClassName("cards");
    
    document.addEventListener("wheel", function(){
        var topVent = html.scrollTop;
        for (var i=0; i < elementoAparece.length; i++){
            var topelemAparece = elementoAparece[i].offsetTop;
            if(topVent > topelemAparece - 400){
                elementoAparece[i].style.opacity = 1;
            }
        }
    })
}

apareceScroll2();

function apareceScroll3() {
    var html = document.getElementsByTagName("html")[0];
    var elementoAparece = document.getElementsByClassName("servicio-cont");
    
    document.addEventListener("wheel", function(){
        var topVent = html.scrollTop;
        for (var i=0; i < elementoAparece.length; i++){
            var topelemAparece = elementoAparece[i].offsetTop;
            if(topVent > topelemAparece - 400){
                elementoAparece[i].style.opacity = 1;
            }
        }
    })
}

apareceScroll3();

function apareceScroll4() {
    var html = document.getElementsByTagName("html")[0];
    var elementoAparece = document.getElementsByClassName("adentro");
    
    document.addEventListener("wheel", function(){
        var topVent = html.scrollTop;
        for (var i=0; i < elementoAparece.length; i++){
            var topelemAparece = elementoAparece[i].offsetTop;
            if(topVent > topelemAparece - 400){
                elementoAparece[i].style.opacity = 1;
            }
        }
    })
}

apareceScroll4();

function apareceScroll5() {
    var html = document.getElementsByTagName("html")[0];
    var elementoAparece = document.getElementsByClassName("contenedor-sobre-nosotros2");
    
    document.addEventListener("wheel", function(){
        var topVent = html.scrollTop;
        for (var i=0; i < elementoAparece.length; i++){
            var topelemAparece = elementoAparece[i].offsetTop;
            if(topVent > topelemAparece - 400){
                elementoAparece[i].style.opacity = 1;
            }
        }
    })
}

apareceScroll5();

function apareceScroll6() {
    var html = document.getElementsByTagName("html")[0];
    var elementoAparece = document.getElementsByClassName("logo");
    
    document.addEventListener("wheel", function(){
        var topVent = html.scrollTop;
        for (var i=0; i < elementoAparece.length; i++){
            var topelemAparece = elementoAparece[i].offsetTop;
            if(topVent > topelemAparece - 400){
                elementoAparece[i].style.opacity = 1;
            }
        }
    })
}

apareceScroll6();