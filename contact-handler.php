<?php
    if (isset($_POST['submit'])) {
        $name = $_POST['name'];
        $mailFrom = $_POST['email'];
        $message = $_POST['inquiry'];

        $mailTo = "sshussaini96@gmail.com";
        $headers = "From: ".$mailFrom;
        $txt = "You have received an email from ".$name.".\n\n".$message;

        mail($mailTo, $txt, $headers);
        header("Location: index.html?mailsend")
    }
?>