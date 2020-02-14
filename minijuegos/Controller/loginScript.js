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
                course: $("#course").val()
            },
            dataType: "json",
            success: function (response) {
                if (response){
                    sessionStorage.setItem("misesion",response.nameGroup);
                } else {
                    $("form").append("<p>Nombre de grupo existente</p>");
                }

            },


        });

    });


});