<?php
require_once('BaseDatos.php');
class User
{
    //Atributos
    private $nameGroup;    
    private $id;
    private $puntuaction;
    private $course;

    //Constructor para inicio juego
    function __construct($nameGroup,$course)
    {
        $this->nameGroup = $nameGroup;
        $this->course = $course;
    }

    //Setters
    function setCourse($course)
    {
        $this->course = $course;
    }

    function setNameGroup($nameGroup)
    {
        $this->nameGroup = $nameGroup;
    }

    //Set del id que lo extraemos de la bd y con los datos del propio usuario y luego se lo asignamos al atributo
    public function setId($id)
    {
        $this->id = $id;
    }



    //Getters 
    public function getPunctuation()
    {
        return $this->puntuaction;
    }
    function getCourse()
    {
        return $this->course;
    }
    function getId()
    {
        return $this->id;
    }

    function getNameGroup()
    {
        return $this->nameGroup;
    }



    //Metodos contra la base de datos
    public  function verificarUsuario()
    {
        $answer = null;
        $conn = BaseDatos::connectDB();
        $id = "SELECT id from users where nameGroup = \"" . $this->nameGroup . "\";";

        $resultado = $conn->query($id);

        if ($resultado->fetchColumn() > 0) {
            $answer = true;
        } else {
            $answer = false;
        }
        $conn = BaseDatos::closeConnection();
        return $answer;
    }

    public function insertUser()
    {
        $conn = BaseDatos::connectDB();
        $insert = "INSERT INTO users (nameGroup, course, puntuaction) values ('" . $this->nameGroup . "','" . $this->course . "','" . $this->puntuaction . "');";
        try {
            $conn->exec($insert);
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
        $conn = BaseDatos::closeConnection();
    }
}
