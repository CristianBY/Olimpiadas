<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<h1>PUNTUACIONES</h1>
    <table>
        <tr>
            <td>Posición</td>
            <td>Nombre</td>
            <td>Puntuación</td>
        </tr>
<?php 
require ('../Controller/controllerPodio.php');
$index = 1;
foreach ($lista as $usuario) {   
    ?>

       <tr>
            <td><?php echo $index ?></td>
            <td><?php echo $usuario[1]?></td>
            <td><?php echo $usuario[3]?></td>
        </tr> 
       
<?php 
$index++;
}?>
    </table>
</body>
</html>