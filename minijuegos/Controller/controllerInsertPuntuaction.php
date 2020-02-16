<?php 
require ('../Model/User.php');
$usuario = new User($_POST['nameGroup'],$_POST['course'],$_POST['puntuaction']);
$usuario ->insertUser();
echo json_encode($datos);


?>