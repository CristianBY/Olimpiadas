<?php
    session_start();
    require('selectGame.html');
    controlSelectGame($_SESSION['Game']);

    function controlSelectGame($numeroDeJuego){
        switch ($numeroDeJuego) {
            case 0:
                header('../Games/Juego-quien/script/javas.js'); // Juego ¿Quién es quién?
                break;
            case 1:
                header('../Games/lanzamiento/lanzamiento.html'); // Juego Lanzamiento
                break;
            case 2:
                header('../Games/trivial/index.php'); // Juego Trivial
                break;
            case 3:
                header('../Games/apuesta/index.html'); // Juego Apuestas
                break;
            case 4:
                header('../Games/pesas/prueba1.html'); // Juego Pesas
                break;
        }
    }
?>