$(document).ready(function() {
    if (sessionStorage['NumberQuestion'] == null) {
        sessionStorage.setItem('NumberQuestion', JSON.stringify([0]));
    } else {
        if (JSON.parse(sessionStorage.NumberQuestion).length > 3) {

            window.location.href = "../../../View/vistaMapa/selectGame.html";

        }
    }
    //Obtenemos un número aleatorio de 1 a 10

    var aleatorio = getRandomArbitrary(10, 1);
    while (JSON.parse(sessionStorage.NumberQuestion).includes(aleatorio)) {
        aleatorio = getRandomArbitrary(10, 1);

    }
    var preguntas = JSON.parse(sessionStorage.NumberQuestion);
    preguntas.push(aleatorio);
    sessionStorage.NumberQuestion = JSON.stringify(preguntas);


    //Creamos petición de preguntas y posibles respuestas a servidor
    $.ajax({
        url: "../controller/preguntaRespuesta.php",
        type: 'post',
        datatype: 'json',
        data: { id: aleatorio },
        success: function(response) {

            var json = JSON.parse(response);
            $("#pregunta").text(json[1]);
            $("#A").text(json[0].respuesta1);
            $("#B").text(json[0].respuesta2);
            $("#C").text(json[0].respuesta3);
            $("#D").text(json[0].respuesta4);

        }
    })


    //Creamos evento al pulsar botón
    $(".btn").click(function() {
        $(this).css("background-color", "yellow");
        var boton = $(this);

        var eleccion = setInterval(function() { boton.toggle() }, 200);

        var respuesta = $(this).attr("id");
        //Hacemos petición al servidor para comprobar respuestas.
        $.ajax({
            url: "../controller/correcta.php",
            type: 'post',
            datatype: 'json',
            data: { id: aleatorio },
            success: function(response) {
                var correcta = response.replace(/['"]+/g, '');
                setTimeout(function() {
                    isCorrect(respuesta, correcta);
                    clearInterval(eleccion);

                }, 3000)



            }
        })
    })
})


//Función que comprueba que sea correcto;
function isCorrect(respuesta, correcta) {
    respuestaSelector = "#" + respuesta;

    if (respuesta == correcta) {

        $(respuestaSelector).toggle();
        $(respuestaSelector).css("background-color", "green");
        sessionStorage.miPuntuaction = parseInt(sessionStorage.miPuntuaction) + 500;//meter puntuación
        $(".respuesta").text("La respuesta es correcta. Has obtenido 500ptos")
        setTimeout(function() {
            window.location.href = "index.html";
        }, 2000);


    } else {
        $(respuestaSelector).toggle();
        $(respuestaSelector).css("background-color", "red")
        $(".respuesta").text("La respuesta es inccorrecta.");

        setTimeout(function() {
            window.location.href = "index.html";
        }, 2000);
    }
}

function getRandomArbitrary(min, max) {
    var numero = Math.random() * (max - min) + min;
    return Math.ceil(numero);
}