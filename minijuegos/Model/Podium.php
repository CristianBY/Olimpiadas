<?php 
require ('User.php');


class Podium{
    private $ten = array();

    
    public function setTen(){
        $conn = BaseDatos::connectDB();
        $query = "SELECT * from users ORDER BY puntuaction DESC LIMIT 10;";
        $usuarios = $conn->query($query);
        
        foreach ($usuarios as $usuario) {
            $user = new User($usuario['nameGroup'],$usuario['course'],$usuario['puntuaction']);
            $user ->setId($usuario['id']);
            array_push($this->ten,$usuario);
                     
            
        }
        

    }
    public function getTen(){
        return $this->ten;
    }



} 


?>