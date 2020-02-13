$(document).ready(function () {
    
    $("#puntuacion").click(function () { 
    
        window.location.replace("http://localhost/Olimpiadas/minijuegos/View/puntuacion.php");
        
    });
    $("#entrar").click(function () { 
        
        window.location.replace("http://localhost/Olimpiadas/minijuegos/Controller/loginController.php");
        $.ajax({
            type: "POST",
            url: "loginController.php",
            dataType: "json",
            success: function (response) {
                response
            }
        });
    });


});