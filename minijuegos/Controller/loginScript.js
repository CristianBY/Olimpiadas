$(document).ready(function() {

    $("#puntuacion").click(function() {

        window.location.replace("puntuaction.html");

    });
    $("#entrar").click(function() {

        $.ajax({
            type: "POST",
            url: "../Controller/loginController.php",
            data: {
                nameGroup: $("#nameGroup").val(),
                course: $(".course").val()
            },
            success: function(response) {

                if (response == "ERROR") { // Devuelve mensaje de usuario ya registrado
                    $("#text").prepend("<p class='error'>Nombre de grupo existente inserte otro</p>");
                } else { // En el caso de introducir bien un nombre
                    var json = JSON.parse(response);
                    sessionStorage.setItem("misesion", json.nameGroup + "," + json.course);
                    sessionStorage.setItem("mijuego", 0);
                    sessionStorage.setItem('miPuntuaction', 0);
                    window.location.replace("vistaMapa/selectGame.html");
                }

            },


        });

    });

    setInterval(function() {
        $("#efectoBlink").toggleClass("parpadeo");
    }, 400);


});