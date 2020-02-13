$(document).ready(function() {
    
    //Obtenemos un número aleatorio de 1 a 10
    var aleatorio = getRandomArbitrary(10, 1);
    

    //Creamos petición de preguntas y posibles respuestas a servidor
    $.ajax({
        url: "../../controller/preguntaRespuesta.php",
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
        $(this).css("background-color", "red");
        var respuesta = $(this).attr("id");
        //Hacemos petición al servidor para comprobar respuestas.
        $.ajax({
            url: "../Games/trivial/controller/correcta.php",
            type: 'post',
            datatype: 'json',
            data: { id: aleatorio },
            success: function(response) {
                var correcta = response.replace(/['"]+/g, '');
                isCorrect(respuesta, correcta);

            }
        })
    })
})


//Función que comprueba que sea correcto;
function isCorrect(respuesta, correcta) {
    if (respuesta == correcta) {
        alert("ACERTADOddd");
        window.location.href = "index.html";
    } else(alert("ERRROOOOR ,INUTIL"))
}

function getRandomArbitrary(min, max) {
    var numero = Math.random() * (max - min) + min;
    return Math.ceil(numero);
}