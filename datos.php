<?php
session_start();
$nombre = $_SESSION['nombre'];
    echo json_encode($nombre);
?>