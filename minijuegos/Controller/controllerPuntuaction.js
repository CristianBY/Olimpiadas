$(document).ready(function() {


    $.ajax({
        type: "post",
        url: "../Controller/controllerPodio.php",
        dataType: "json",
        success: function(response) {
            var position = 1;
            response.forEach(element => {
                $("table").append("<tr>");
                $("tr:last").append("<td>");
                $("td:last").text(position);
                $("tr:last").append("<td>");
                $("td:last").text(element.nameGroup)
                $("tr:last").append("<td>");
                $("td:last").text(element.puntuaction)
                position++;
            });



        }
    });
});