<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$mailheader = "From:".$name."<".$email.">/r/n";

$recipient = "info@visitkeyodhoo.com";

mail($recipient, $subject, $message, $mailheader)
or die("message not sent, email is required");

echo '

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank you</title>
    <link rel="stylesheet" href="contact-style.css">
</head>
<body>
    <div class="container">
        <h1>Thank You for contacting us</h1>
        <p>We will get back to you soon</p>
        <p>Have a great day</p>

       <div id="home"> <a href="contact.php"> Go to Home page</a></div>
    </div>
</body>
</html>
'
?>