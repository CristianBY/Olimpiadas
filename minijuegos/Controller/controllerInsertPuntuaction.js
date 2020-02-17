$(document).ready(function() {
    if (sessionStorage.misesion != null) {
        alert()
        $.ajax({
            type: "POST",
            url: "../Controller/controllerInsertPuntuaction.php",
            data: {
                nameGroup: sessionStorage.misesion.split(",")[0],
                course: sessionStorage.misesion.split(",")[1],
                puntuaction: sessionStorage.mipuntuaction

            },

            success: function(response) {

            }
        });
    }
});
s