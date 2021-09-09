<?php
    //definir variables para su conexión con la base de datos en esta caso en php my admin
    $db=NULL;
    $hostname = 'localhost';
    $database = 'trabajo';
    $username = 'root';
    $password = "";
    $dsn = "mysql:host=$hostname;dbname=$database;charset=UTF8";//declarar la conexion de la base de datos
    try 
    {
        $db = new PDO($dsn, $username, $password, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);//capturando los datos
    } catch (PDOException $e) //en caso de que no funciones mostrar el error
    {
        echo 'Excepción capturada: ', $e->getMessage(), self::$dsn, "\n";//captura de la excepción
    }
?>