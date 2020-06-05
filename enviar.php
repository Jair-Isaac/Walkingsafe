<?php
$destino = "jazdez364.t@gmail.com";
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];

$asunto = "Contacto de mi Blog";
$contenido = "De: $nombre \n";
$contenido.= "Correo: $correo \n";
$contenido.= "De: $mensaje \n";
?>
