$(document).ready(function() {
    if (sessionStorage['trivialPreguntas'] == null) {
        sessionStorage.setItem('trivialPreguntas', 0);
        alert("Existe" + sessionStorage['trivialPreguntas'])

    } else {
        sessionStorage['trivialPreguntas']++;

        alert("No existe" + sessionStorage['trivialPreguntas'])

    }
    //Obtenemos un número aleatorio de 1 a 10

    var aleatorio = getRandomArbitrary(10, 1);


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

                }, 3000);

            }
        })
    })
})


//Función que comprueba que sea correcto;
function isCorrect(respuesta, correcta) {
    respuestaSelector = "#" + respuesta;

    if (respuesta == correcta) {

        $(respuestaSelector).toggle();
        $(respuestaSelector).css("background-color", "green")
        setTimeout(function() {
            window.location.href = "index.html";
        }, 2000);


    } else {
        $(respuestaSelector).toggle();
        $(respuestaSelector).css("background-color", "red")
        setTimeout(function() {
            window.location.href = "index.html";
        }, 2000);
    }
}

function getRandomArbitrary(min, max) {
    var numero = Math.random() * (max - min) + min;
    return Math.ceil(numero);
}