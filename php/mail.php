<?php 
    error_reporting(0); 

    $mail = "postcard@castillohurdes.com"; 
    $nombre = $_POST['source']; 
    $message = $_POST['message']; 
    $para = $_POST['email'];
    $nPostal = $_POST['postcard'];

    $header = 'From: ' . $mail . "\r\n"; 
    $header .= "X-Mailer: PHP/" . phpversion() . " \r\n"; 
    $header .= "Mime-Version: 1.0 \r\n"; 
    $header .= "Content-Type: text/plain"; 

    $mensaje = "Este mensaje fue enviado por " . $nombre . " \r\n"; 
    $mensaje .= "El contenido es: ". $message . " \r\n";
    $mensaje .= "Enviado el " . date('d/m/Y', time()); 

    $asunto = $nombre . ' sends you a postcard'; 

    if (mail($para, $asunto, $mensaje,$headers,"-f".$mail)) {
        echo ("The email was send.");
    } else {
        echo ('<span style="color:#FF0000">Error: We can not sent the email.</span><br>');
    }

    echo ("<a href='javascript:history.back(1)'>Back to postcard</a>");

   
?>