<?
session_start();
require_once('../lib/PHPMailer-master/PHPMailerAutoload.php');
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

function sendMail($email,$name,$Subject,$text){
    $mail = new PHPMailer;
    //$mail->SMTPDebug = 3;                               // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'leather2m@gmail.com';                 // SMTP username
    $mail->Password = 'malvex1987';                           // SMTP password
    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465;                                    // TCP port to connect to
    $mail->CharSet = 'utf-8';
    $mail->setFrom('pizzaItaliano@example.com', 'заказ пиццерии');
    $mail->addAddress($email, $name);     // Add a recipient

    $mail->Subject = $Subject;
    $mail->Body    = $text;

    if(!$mail->send()) {
        echo 'Проблема с обработкой заказа. Повторите заказ';
    } else {
        $_SESSION=[];
        echo 'Ваш заказ принят!';
    }
}

function clean($value = "") {//функция проверки вводимых данных
    $value = trim($value);
    $value = stripslashes($value);
    $value = strip_tags($value);
    $value = htmlspecialchars($value);

    return $value;
};

$nameClient=clean($_POST['nameClient']);
$phoneClient=clean($_POST['phoneClient']);
$emailClient=clean($_POST['adresClient']);



sendMail($emailMy,$name,$Subject,$text);

// ' имя клиента <b>'.$nameClient.' </b> тел <b>'.$phoneClient.'</b> адресс <b>'.$adressClient.'<br>'.