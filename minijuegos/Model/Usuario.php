<?php 
require_once ('BaseDatos.php');
class Usuario{


    private $name;
    private $surnames;
    private $course;
    private $id;

    function __construct($name,$surnames, $course)
    {
        $this->name = $name;
        $this->surnames = $surnames;
        $this->course = $course;
        
    }

    function setCourse($course){
        $this->course = $course;

    }

    function setName($name){
        $this->name = $name;
    }

    function setId($id){
        $this->id = $id;
    }

    function setSurnames($surnames){
        $this->surnames = $surnames;
    }

    function getCourse(){
        return $this ->course;
    }
    function getId(){
        return $this ->id;
    }

    function getName(){
        return $this ->name;
    }

    function getSurnames(){
        return $this ->surnames;
    }
    public static function verificarUsuario()
    {

        $conn = BaseDatos::connectDB();
        $contraseña = "SELECT id from users where firstName = '" .  self::$name . "' and surname = '" . self::$surnames . "'";
        $resultado = $conn->query($contraseña);
        
            if($resultado>0){
                echo "el usuario ya ha jugado";
            }else{
                echo "El usuario no existe";
            }
            
   
    }



}


?>