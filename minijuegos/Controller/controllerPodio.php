<?php 
require ('../Model/Podium.php');
$podio = new Podium();
$podio->setTen();
$lista = $podio->getTen();
echo json_encode($lista);

?>