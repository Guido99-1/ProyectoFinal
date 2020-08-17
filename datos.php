<?php
session_start();
$articulo = $_SESSION['nombre'];
$subtotal = $_SESSION['subtotal'];
require("Connection.php");

$data = array();
$obj = new stdObject();
$obj->nombre = $articulo;
$obj->subtotal = $subtotal;
$data[] = $articu;
echo json_encode($articulo);
?>