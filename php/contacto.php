<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger los datos del formulario
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // Validar que los campos no estén vacíos
    if (empty($name) || empty($email) || empty($phone) || empty($message)) {
        echo "Por favor, completa todos los campos.";
        exit;
    }

    // Definir el nombre del archivo donde guardar los mensajes
    $file = 'contact_messages.txt';

    // Formatear el mensaje a guardar
    $content = "Nombre: $name\n";
    $content .= "Email: $email\n";
    $content .= "Teléfono: $phone\n";
    $content .= "Mensaje:\n$message\n";
    $content .= "-------------------------\n";

    // Guardar el mensaje en el archivo
    if (file_put_contents($file, $content, FILE_APPEND)) {
        echo "Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.";
    } else {
        echo "Hubo un error al guardar tu mensaje. Inténtalo de nuevo más tarde.";
    }
}
?>
