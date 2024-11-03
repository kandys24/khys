<?php

header('Access-Control-Allow-Origin: http://localhost:3000');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST, GET, OPTIONS'); // Adjust as needed
header('Access-Control-Allow-Headers: Content-Type'); // Adjust as needed

require 'vendor/autoload.php'; // Path to PHPMailerAutoload.php
use PHPMailer\PHPMailer\PHPMailer;

// Check if request method is POST
if($_SERVER['REQUEST_METHOD'] === 'GET') {
  
    // Extract data from formData
    $email = $_GET['email'];
    $subject = $_GET['subject'];
    $message = $_GET['message'];

    $transporter = new PHPMailer;
    $transporter->isSMTP();
    $transporter->Host = 'mail.transpc.ao'; // SMTP server address
    $transporter->Port = 465; // Use the port
    $transporter->SMTPSecure = 'ssl'; // Set to 'ssl' if using SSL
    $transporter->SMTPAuth = true;
    $transporter->Username = 'operacoes@transpc.ao';
    $transporter->Password = 'operacoestest123*';

    // Compose the email
    $transporter->setFrom($email);
    $transporter->addAddress('operacoes@transpc.ao');
    $transporter->Subject = $subject;
    $transporter->Body = $message;

    // Send the email
    try {
        if ($transporter->send()) {
            echo json_encode('Email sent successfully!');
        } else {
            echo json_encode($transporter->ErrorInfo);
        }
    } catch (Exception $e) {
        echo json_encode(['error' => $e->getMessage()]);
    }
} else {
    echo json_encode(['error' => 'Invalid request method']);
}