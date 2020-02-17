<?php
    require_once("../Model/User.php");
    //$user = new User($_POST['nameGroup'],$_POST['course']);
    $user = new User($_POST['nameGroup'],$_POST['course'],0);
    $validation = $user->verificarUsuario(); // Verificación de usuario en la base de datos

    if (!$validation){ // Login correcto
        $usuario = ["nameGroup"=>$_POST['nameGroup'],"course"=>$_POST['course']];
        echo json_encode($usuario);
    } else{
        echo "ERROR";
    } 
       
?>