<?php
// Verificamos que los datos hayan sido enviados
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = htmlspecialchars($_POST["name"]);
  $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
  $mensaje = htmlspecialchars($_POST["message"]);

  $destinatario = "nuevasformas.muebles@gmail.com"; 
  $asunto = "Nuevo mensaje de contacto de $nombre";
  $contenido = "Nombre: $nombre\n";
  $contenido .= "Email: $email\n";
  $contenido .= "Mensaje:\n$mensaje\n";
  $headers = "From: $email";

  if (mail($destinatario, $asunto, $contenido, $headers)) {
    echo "<script>
      alert('Mensaje enviado correctamente.');
      window.location.href = 'index.html';
    </script>";
  } else {
    echo "<script>
      alert('Error al enviar el mensaje. Intente nuevamente.');
      window.history.back();
    </script>";
  }
}
?>
