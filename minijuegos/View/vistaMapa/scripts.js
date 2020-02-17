$(document).ready(function() {
    movimientoMario();
});

function movimientoMario() {

    var juego = parseInt(sessionStorage.getItem('mijuego'));
    switch (juego) {
        case 0:
            $("#mario").css({ top: "22%" });
            $("#mario").animate({ top: "10%" }, 2600);
            $("#mario").animate({ left: "20%" }, 2100);
            sessionStorage.setItem('mijuego', 1);
            setTimeout(() => {
                window.location.replace("../../Games/quien/index.html");
            }, 6000);

            break;
        case 1:
            $("#mario").css({ left: "20%" });
            $("#mario").animate({ top: "50%", }, 2100);
            sessionStorage.setItem('mijuego', 2);
            setTimeout(() => {
                window.location.replace("../../Games/lanzamiento/lanzamiento.html");
            }, 1000);
            break;
        case 2:
            $("#mario").css({ top: "50%", left: "20%" });
            $("#mario").animate({ left: "50%", }, 2100);
            sessionStorage.setItem('mijuego', 3);
            setTimeout(() => {
                window.location.replace("../../Games/trivial/view/index.html");
            }, 2000);
            break;
        case 3:
            $("#mario").css({ top: "50%", left: "50%" });
            $("#mario").animate({ top: "10%", }, 2100);
            sessionStorage.setItem('mijuego', 4);
            setTimeout(() => {
                window.location.replace("../../Games/apuesta/index.html");
            }, 2000);
            break;
        case 4:
            $("#mario").css({ top: "10%", left: "50%" });
            $("#mario").animate({ left: "70%", }, 2100);
            sessionStorage.setItem('mijuego', 5);
            setTimeout(() => {
                window.location.replace("../../Games/pesas/prueba1.html");
            }, 2000);
            break;
        case 5:
            $("#mario").css({ top: "10%", left: "70%" });
            $("#mario").animate({ left: "85%", }, 3100);
            sessionStorage.setItem('mijuego', 0);
            setTimeout(() => {
                window.location.replace("http://http://ec2-34-205-30-97.compute-1.amazonaws.com/Olimpiadas/minijuegos/View/puntuaction.html");
            }, 2000);

        default:
            break;
    }


}