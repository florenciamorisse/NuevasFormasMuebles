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

  // Si el mail se envió con éxito:
header("Location: contacto.html?exito=1");
exit();


  // if (mail($destinatario, $asunto, $contenido, $headers)) {
  //   $mensaje_exito = "¡Gracias por contactarnos! Te responderemos pronto.";
  // } else {
  //   $mensaje_exito = "Hubo un error al enviar el mensaje. Por favor, intentá más tarde.";
  // }

  // if (mail($destinatario, $asunto, $contenido, $headers)) {
  //   echo "<script>
  //     alert('Mensaje enviado correctamente.');
  //     window.location.href = 'index.html';
  //   </script>";
  // } else {
  //   echo "<script>
  //     alert('Error al enviar el mensaje. Intente nuevamente.');
  //     window.history.back();
  //   </script>";
  // }
}
?>
