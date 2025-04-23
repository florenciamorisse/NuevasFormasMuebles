<?php 

$nombre = $_POST['name'];  
$email = $_POST['email'];
$mensaje = $_POST['message'];

$destinatario = "contacto@nuevasformasmuebles.com.ar";
$asunto = 'Envío desde la web';

$cuerpo = '
<html>
  <head>
    <title>Contacto web</title>
  </head>
  <body>
    <h1>Solicitud de contacto</h1>
    <p>
      <b>Nombre:</b> '.$nombre.' <br>				
      <b>Email:</b> '.$email.' <br>
      <b>Mensaje:</b> '.$mensaje.' <br>
    </p>
  </body>
</html>
';

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: $nombre <$email>\r\n";

mail($destinatario, $asunto, $cuerpo, $headers);

// Redirige con parámetro para mostrar mensaje de éxito
header("Location: index.html?exito=1");
exit();


// header("Location: http://www.nuevasformasmuebles.com.ar");

// $var=

// 	$nombre = $_POST['name'];  
// 	$email = $_POST['email'];
// 	$mensaje = $_POST['message'];

// 	$destinatario= "contacto@nuevasformasmuebles.com.ar";
// 	$asunto = 'Envío desde la web';
// 	$cuerpo= '
// 		<html>
// 			<head>
// 				<title> Prueba de envío de correo</title>
// 			</head>
// 			<body>
// 				<h1>Solicitud de contacto</h1>
// 				<p>
// 					<b>Nombre:</b> '.$nombre .' <br>				
// 					<b>Email:</b> '.$email.' <br>
// 					<b>Mensaje:</b> '.$mensaje .' <br>
// 				</p>
// 			</body>
// 		</html>
// 	';

	

// 	$headers = "MIME-vERSION:1.0\r\n";
// 	$headers .= "Content-Type: text/html; charset=UTF-8\r\n";



// 	$headers .= "FROM: $nombre <$email>\r\n";
// 	mail( $destinatario , $asunto, $cuerpo, $headers);



	
?>

