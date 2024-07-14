<?php
$errors = [];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get POST data
    $name = isset($_POST['name']) ? strip_tags(trim($_POST['name'])) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $job = isset($_POST['job']) ? trim($_POST['job']) : '';
    $phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
    $message = isset($_POST['message']) ? strip_tags(trim($_POST['message'])) : '';

    // Validate form fields
    if (empty($name)) {
        $errors[] = 'Ime ni vnešeno';
    }

    if (empty($email)) {
        $errors[] = 'E-naslov ni vnešen';
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
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
        // Recipient email address (replace with your own)
        $recipient = "joze.sinkovec@hotmail.com";

        // Additional headers
        $headers = "From: $name <$email>";

        // Subject and email content
        $subject = "New Contact Form Submission";
        $emailContent = "Ime: $name\n";
        $emailContent .= "E-naslov: $email\n";
        $emailContent .= "Storitev: $job\n";
        $emailContent .= "Telefonska številka: $phone\n";
        $emailContent .= "Sporočilo:\n$message\n";

        // Send email
        if (mail($recipient, $subject, $emailContent, $headers)) {
            echo "Email sent successfully!";
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
