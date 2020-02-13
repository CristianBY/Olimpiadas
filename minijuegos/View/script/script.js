$(document).ready(function () {
$.ajax({
        type: "post",
        url: "controllerPodio.php",
        data: "data",
        dataType: "dataType",
        success: function (response) {
            
        }
    });
});