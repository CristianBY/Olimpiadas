$(document).ready(function () {
    
    $("#puntuacion").click(function () { 
    
        window.location.replace("http://localhost/Olimpiadas/minijuegos/View/puntuacion.php");
        
    });
    $("#entrar").click(function () { 
        
        $.ajax({
            type: "POST",
            url: "../Controller/loginController.php",
            data: {
                nameGroup: $("#nameGroup").val(),
                course: $(".course").val()
            },
            dataType: "json",
            success: function (response) {
                if (response == "ERROR"){
                    $("#text").prepend("<p class='error'>Nombre de grupo existente inserte otro</p>");
                } else {
                    sessionStorage.setItem("misesion",response.nameGroup);
                    sessionStorage.setItem("mijuego",0);
                    window.location.replace("http://localhost/Olimpiadas/minijuegos/View/vistaMapa/selectGame.html");
                }

            },


        });

    });

	setInterval(function(){
		$("#efectoBlink").toggleClass("parpadeo");
	},400);


});