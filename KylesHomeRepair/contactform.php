<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];
    $from = "Kyleshomerepair.com";
    
    $mailTo = "c.clan@christopherlynnclan.com";
    $headers = "From: ".$from; 
    $txt = "You have recieved an e-mail from ".$name." at ".$mailFrom.".\n\n".$message;
    
    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.html?mailsend");
}