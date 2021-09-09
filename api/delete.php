<?php
require 'db_config.php';//Esta incluyendo de forma obligatoria el db config
$id = $_POST["id"];//llamar el metodo post y agregar el id de quien lo obtenga

$sql = "DELETE FROM items WHERE id = '".$id."'";//sentencia para eliminar los datos

$stm=$db->prepare($sql);//llamr a la base de datos
$stm->execute();//ejecutar acción

echo json_encode([$id]);
?>