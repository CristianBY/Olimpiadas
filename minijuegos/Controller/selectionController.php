<?php
   
    controlSelectGame($_POST['numeroDeJuego']);
    
    function controlSelectGame($numeroDeJuego){
        switch ($numeroDeJuego) {
            case 0:
                header('Location: ../Games/quien/index.html'); // Juego ¿Quién es quién?
                break;
            case 1:
                header('Location: ../Games/lanzamiento/lanzamiento.html'); // Juego Lanzamiento
                break;
            case 2:
                header('Location: ../Games/trivial/index.php'); // Juego Trivial
                break;
            case 3:
                header('Location: ../Games/apuesta/index.html'); // Juego Apuestas
                break;
            case 4:
                header('Location: ../Games/pesas/prueba1.html'); // Juego Pesas
                break;
        }
    }
?>