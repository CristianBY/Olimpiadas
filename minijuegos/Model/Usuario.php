<?php 
require_once ('BaseDatos.php');
class Usuario{
    //Atributos
    private $name;
    private $surnames;
    private $course;
    private $id;
    private $puntuaction;

    //Constructor para inicio juego
    function __construct($name,$surnames, $course)
    {
        $this->name = $name;
        $this->surnames = $surnames;
        $this->course = $course;
        
    }

    //Setters
    function setCourse($course){
        $this->course = $course;

    }

    function setName($name){
        $this->name = $name;
    }

    //Set del id que lo extraemos de la bd y con los datos del propio usuario y luego se lo asignamos al atributo
    public function setId(){
 
        $conn = BaseDatos::connectDB();
        $id = "SELECT id from users where firstName = '".$this->name . "' and surnames = '" . $this->surnames . "'";
        $resultado = $conn->query($id);
        foreach($resultado as $r){
             $id = $r['id'];
        }
        $this->id = $id;
        $conn = BaseDatos::closeConnection();

        
    }   

    function setSurnames($surnames){
        $this->surnames = $surnames;
    }
    public function setPuntuaction($puntuacion){
        $this->puntuaction = $puntuacion;

    }


    //Getters 
   public function getPunctuation(){
       return $this->puntuaction;
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


    //Metodos contra la base de datos
    public  function verificarUsuario()
    {

        $conn = BaseDatos::connectDB();
        $id = "SELECT id from users where firstName = '".$this->name . "' and surnames = '" . $this->surnames . "'";
        
        $resultado = $conn->query($id);
        
            if($resultado>0){
                echo "el usuario ya ha jugado"; 
            }else{
                echo "El usuario no existe";
            }
            $conn = BaseDatos::closeConnection();

   
    }

    public function insertUser(){
        $conn = BaseDatos::connectDB();
        $insert = "INSERT INTO users (firstName, surnames,course) values ('".$this->name."','".$this->surnames."','".$this->course."');";
        try {
            $conn ->exec($insert);


        } catch (PDOException $e) {
            echo $e->getMessage();
        }
        $conn = BaseDatos::closeConnection();
           
       }

       public function insertPunctuation(){
        $conn = BaseDatos::connectDB();
        $insert = "INSERT INTO puntuaciones (id, puntuacion) values ('".$this->id."','".$this->puntuaction."');";
        try {
            $conn ->exec($insert);


        } catch (PDOException $e) {
            echo $e->getMessage();
        }
        $conn = BaseDatos::closeConnection();
           

       }

       


}


?>