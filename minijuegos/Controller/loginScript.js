$(document).ready(function() {
    
    $("#puntuacion").click(function() {

        window.location.replace("http://http://ec2-34-205-30-97.compute-1.amazonaws.com/Olimpiadas/minijuegos/View/puntuaction.html");

    });
    $("#entrar").click(function() {

        $.ajax({
            type: "POST",
            url: "../Controller/loginController.php",
            data: {
                nameGroup: $("#nameGroup").val(),
                course: $(".course").val()
            },
            dataType: "json",
            success: function(response) {
                if (response == "ERROR") {
                    $("#text").prepend("<p class='error'>Nombre de grupo existente inserte otro</p>");
                } else {
                    sessionStorage.setItem("misesion", response.nameGroup + "," + response.course);
                    sessionStorage.setItem("mijuego", 0);
                    sessionStorage.setItem('miPuntuaction', 0);
                    window.location.replace("http://http://ec2-34-205-30-97.compute-1.amazonaws.com/Olimpiadas/minijuegos/View/vistaMapa/selectGame.html");
                }

            },


        });

    });

    setInterval(function() {
        $("#efectoBlink").toggleClass("parpadeo");
    }, 400);


});