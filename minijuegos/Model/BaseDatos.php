<?php
abstract class BaseDatos
{

    private static $server = 'localhost';
    private static $dataBase = 'olimpiadas';
    private static $user = 'olimpiadas';
    private static $pass = 'abc123.';
    private static $port = 3306;

    public static function connectDB()
    {
        try {
            $connection = new PDO("mysql:host=" . self::$server . ";dbname=" . self::$dataBase . ";port=" . self::$port . ";charset=utf8", self::$user, self::$pass);
        } catch (PDOException $e) {
            echo "No se ha podido establecer conexión con el servidor de bases de datos.<br>";
            die("Error: " . $e->getMessage());
        }
        return $connection;
    }


    
    public static function closeConnection(){
        $conn = BaseDatos::connectDB();
        $conn = null;
        return $conn;
    }
    
}
