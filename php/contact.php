<?php 
    error_reporting(0); 

    $mail = $_POST['email']; 
    $nombre = $_POST['name']; 
    $message = $_POST['message']; 
    $phone = $_POST['phone'];
    $emailPractica = "multimediaurjc2017@gmail.com"; 

    $header = 'From: ' . $mail . "\r\n"; 
    $header .= "X-Mailer: PHP/" . phpversion() . " \r\n"; 
    $header .= "Mime-Version: 1.0 \r\n"; 
    $header .= "Content-Type: text/plain"; 

    $mensaje = "Este mensaje fue enviado por " . $nombre . " \r\n"; 
    $mensaje .= "Su teléfono es: " . $phone . "\r\n";
    $mensaje .= "El email es: " . $mail ."\r\n";
    $mensaje .= "El contenido enviado es: ". $message . " \r\n"; 
    $mensaje .= "Enviado el " . date('d/m/Y', time()); 

    $asunto = $nombre . ' sends you a postcard'; 

    if (mail($emailPractica, $asunto, $mensaje,$headers,"-f".$mail)) {
        echo ("The email was send.");
    } else {
        echo ('<span style="color:#FF0000">Error: We can not sent the email.</span><br>');
    }

    echo ("<a href='javascript:history.back(1)'>Back to contact</a>");

?> 