<?php 
include("../../Model/BaseDatos.php" );
    function getQuestion($numero){
        $conn = BaseDatos::connectDB();
        $query = "SELECT pregunta FROM preguntas where id =".$numero.";";
        $preguntas = $conn->query($query);
        foreach($preguntas as $pregunta) {
           $pregunta = $pregunta['pregunta'];
        }  
        return $pregunta;
 
    }

    function getAnswers($numero){
        $conn = BaseDatos::connectDB();
        $query = "SELECT respuesta1, respuesta2, respuesta3, respuesta4 FROM respuestas where id =".$numero.";";
        $consulta = $conn->query($query);
        $respuesta =[];
        foreach($consulta as $respuesta) {
            $respuesta.array_push($respuesta['respuesta1']);
            $respuesta.array_push($respuesta['respuesta2']);
            $respuesta.array_push($respuesta['respuesta3']);
            $respuesta.array_push($respuesta['respuesta4']);
         }  
         return $respuesta;
        
    }

    function getAnswer($numero){
        $conn = BaseDatos::connectDB();
        $query = "SELECT correcta FROM correcta where id =".$numero.";";
        $consulta = $conn->query($query);
        foreach($consulta as $row) {
            $respuesta = $row['correcta'];
         }  

        return $respuesta;
    }
