<?php
require 'db_config.php'; //Esta incluyendo de forma obligatoria el db config

$post = $_POST;//se reciben todos los datos llamados por el metodo post

$sql = "INSERT INTO items (title,description)
VALUES ('".$post['title']."','".$post['description']."')";//se genera una setencia sql para insertar datos en los campos

$stm=$db->prepare($sql);
$stm->execute();//llamar la sentencia sql en la carpeta db config para su realización

$sql = "SELECT * FROM items Order by id desc LIMIT 1";//sentencia sql para que se muestren los datos de manere decendente
$stm=$db->prepare($sql);
$stm->execute();

$result=$stm->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($result);//mostrar en pantalla el resultado
?>