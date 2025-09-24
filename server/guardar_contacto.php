<?php
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $correo = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    $sql = "INSERT INTO mensajes (nombre, correo, mensaje) 
            VALUES ('$nombre', '$correo', '$mensaje')";

    if ($conn->query($sql) === TRUE) {
        echo "ok"; // Respuesta para JavaScript
    } else {
        echo "Error: " . $conn->error;
    }

    $conn->close();
}
?>
