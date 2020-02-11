<?php
    session_start();
    require("../View/vistaIndex.html");
    require("../Model/Usuario.php");
    $user = new User($_POST['nameGroup'],$_POST['course']);
    $validation = $user->verificarUsuario(); // Verificación de usuario en la base de datos

    if (isset($_POST['enviar'])){
        if ($validation){
            $_SESSION['userLogIn'] = $user;
            header('Location: ../index.php');
        } else {
            header('Location: ../Controller/selectionController.php');
        }    
    }
    if (isset($_POST['verPuntuacion'])){
        header('Location: Controller/puntuacionController.php');
    }    
?>