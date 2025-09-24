<?php
$servername = "localhost";
$username = "root"; // XAMPP por defecto
$password = "";     // XAMPP normalmente vacío
$dbname = "portafolio";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
  die("Conexión fallida: " . $conn->connect_error);
}
?>
