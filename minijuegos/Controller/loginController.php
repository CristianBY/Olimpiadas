<?php
    session_start();
    require("../View/vistaIndex.html");
    require("../Model/Usuario.php");
    $user = new User($_POST['nameGroup'],$_POST['course']);
    $validation = $user->verificarUsuario(); // Verificación de usuario en la base de datos

    if (isset($_POST['enviar'])){
        if ($validation){ // Login correcto
            $_SESSION['userLogIn'] = $user; // inicialización de usuario para login correcto
            $_SESSION['Game'] = 0; // inicialización para selección de juego
            $_SESSION['puntuaciones'] = 0; // inicialización de puntuaciones
            header('Location: ../index.php');
        } else { // Mal logueado
            header('Location: ../Controller/selectionController.php');
        }    
    }
    if (isset($_POST['verPuntuacion'])){ // Redirección a ventana de puntuaciones
        header('Location: Controller/puntuacionController.php');
    }    
?>