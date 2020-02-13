<?php 
include("functions.php" ); 


$respuestas = getAnswers($_POST['id']);//array
$pregunta = getQuestion($_POST['id']);//String


$enviado = array();
array_push($enviado,$respuestas);
array_push($enviado,$pregunta);

echo json_encode($enviado);
echo "prueba";









?>
