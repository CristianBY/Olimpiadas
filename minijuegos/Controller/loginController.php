<?php
    require_once("../Model/User.php");
    $user = new User($_POST['nameGroup'],$_POST['course']);
    $validation = $user->verificarUsuario(); // Verificación de usuario en la base de datos

    if ($validation){ // Login correcto
        $usuario = ["name"=>$_POST['nameGroup'],"course"=>$_POST['course']];
        json_encode($usuario);
        header('Location: cambiar por direccion correcta');
    } else { // Mal logueado
        header('Location: ../View/vistaIndex.html');  
    }    
       
?>