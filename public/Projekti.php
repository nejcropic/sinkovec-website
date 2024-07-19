<?php
$errors = [];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get POST data and sanitize
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $job = filter_input(INPUT_POST, 'job', FILTER_SANITIZE_STRING);
    $phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

    // Validate form fields
    if (empty($name)) {
        $errors[] = 'Ime ni vnešeno';
    }

    if (empty($email)) {
        $errors[] = 'E-naslov ni vnešen';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'E-naslov ni pravilen';
    }

    if (empty($job)) {
        $errors[] = 'Storitev ni izbrana';
    }

    if (empty($phone)) {
        $errors[] = 'Telefonska številka ni izbrana';
    }

    if (empty($message)) {
        $errors[] = 'Opis je prazen';
    }

    // If no errors, send email
    if (empty($errors)) {
        $recipient = "joze.sinkovec@hotmail.com";
        $headers = "From: $name <$email>\r\n";
        $headers .= "Reply-To: $email\r\n";
        $subject = "New Contact Form Submission";
        $emailContent = "Ime: $name\n";
        $emailContent .= "E-naslov: $email\n";
        $emailContent .= "Storitev: $job\n";
        $emailContent .= "Telefonska številka: $phone\n";
        $emailContent .= "Sporočilo:\n$message\n";

        // Send email and check for success
        if (mail($recipient, $subject, $emailContent, $headers)) {
            // Redirect after successful email send
            header("Location: /index.html");
            exit;
        } else {
            echo "Failed to send email. Please try again later.";
        }
    } else {
        // Display errors
        echo "The form contains the following errors:<br>";
        foreach ($errors as $error) {
            echo "- $error<br>";
        }
    }
} else {
    // Not a POST request, display a 403 forbidden error
    header("HTTP/1.1 403 Forbidden");
    echo "You are not allowed to access this page.";
}
?>
