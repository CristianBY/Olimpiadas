$(document).ready(function () {
    movimientoMario();    
});

function movimientoMario(){
    
    var juego= sessionStorage.getItem('mijuego');

    if(juego == 0){
        $("#mario").css({top: "22%"});
        $("#mario").animate({top: "10%"}, 2600);
        $("#mario").animate({left: "20%"}, 2100);
        sessionStorage.setItem('mijuego',1);
        setTimeout(() => {
            window.location.replace("../../Games/quien/index.html");
        }, 6000);
    }else if(juego==1){
        $("#mario").css({left: "20%"});
        $("#mario").animate({top: "50%",}, 2100);
        sessionStorage.setItem('mijuego',2);
        setTimeout(() => {
            window.location.replace("../../Games/lanzamiento/lanzamiento.html");
        }, 1000);
    }else if(juego==2){
        $("#mario").css({top: "50%", left: "20%"});
        $("#mario").animate({left: "50%",}, 2100);
        sessionStorage.setItem('mijuego',3);
        setTimeout(() => {
            window.location.replace("../../Games/trivial/index.php");
        }, 2000);
    }else if(juego==3){
        $("#mario").css({top: "50%", left: "50%"});
        $("#mario").animate({top: "10%",}, 2100);
        sessionStorage.setItem('mijuego',4);
        setTimeout(() => {
            window.location.replace("../../Games/apuesta/index.html");
        }, 2000);    
    }else if(juego==4){
        $("#mario").css({top: "10%", left: "50%"});
        $("#mario").animate({left: "70%",}, 2100);
        sessionStorage.setItem('mijuego',5);
        setTimeout(() => {
            window.location.replace("../../Games/pesas/prueba1.html");
        }, 2000);
    }else if(juego==5){
        $("#mario").css({top: "10%", left: "70%"});
        $("#mario").animate({left: "85%",}, 3100);
        sessionStorage.setItem('mijuego',0);
    }
}

function winner(){
    $()
}