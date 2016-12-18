<?
session_start();
require_once('../lib/PHPMailer-master/PHPMailerAutoload.php');
include_once "config.php";
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
    $mail->setFrom('chikchirik@example.com', 'заказ коробочки Чикчирик');
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
$phoneClient=clean($_POST['telClient']);
$emailClient=clean($_POST['mailClient']);
$typePay=$_POST['typePuy'];
if($typePay=='cash')$typePay='Наличными курьеру';
if($typePay=='cod')$typePay='Наложенным платежем';
if($typePay=='card')$typePay=' Оплата картой';
$typeDelivery=$_POST['typeDelivery'];
if($typeDelivery=='curier')$typeDelivery='Курьером по Киеву';
if($typeDelivery=='newPost')$typeDelivery='Новая почта';
if($typeDelivery=='pickUp')$typeDelivery=' Самовывоз';
//заносим данные в сессию для вывода данных если оплатит картой 
$_SESSION['nameClient']=$nameClient;
$_SESSION['telClient']=$phoneClient;
$_SESSION['mailClient']=$emailClient;
$_SESSION['typeDelivery']=$typeDelivery;


$emailMy='pro100boy@gmail.com';
$name='chikchirik';
$Subject='order';
$text='Имя клиента: '.$nameClient.' ;  телефон клиента: '.$phoneClient.' ;  email клиента: '.$emailClient.' ; тип оплаты: '.$typePay.' ; тип доставки: '.$typeDelivery.' ;';

sendMail($emailMy,$name,$Subject,$text);

//--------------------------------------------------------------------
//добавляем данные в БД
$host=DB_LOCAL;
//настройки для подключения на локальном сервере
$db=DB_local;
$user=DB_LOGIN_local;
$pass=DB_PASS_local;
//настройки для подключения на сервере на сайте
//$db=DB;
//$user=DB_LOGIN;
//$pass=DB_PASS;
$date=date("d m Y G i");

$dsn = "mysql:dbname=$db;host=$host";// подключение к БД mysql

$pdo = new PDO($dsn, $user, $pass);//подключаемся в БД

$sql = "INSERT INTO data_orders(
            name,
            telephone,
            email,
            typeDelivery,
            typePay,
            status,
            dateOrder
            ) VALUES (
            :name_client, 
            :telephone_client, 
            :email_client, 
            :typeDelivery_client,
            :typePay_client,
             :status_client,
             :date_client
            )";

$stmt = $pdo->prepare($sql);

//проверяем и очищаем данные от не нужных символов
$status_order='в ожидании отправки';

$stmt->bindParam(':name_client', $nameClient, PDO::PARAM_STR);
$stmt->bindParam(':telephone_client', $phoneClient, PDO::PARAM_STR);
$stmt->bindParam(':email_client', $emailClient, PDO::PARAM_STR);
$stmt->bindParam(':typeDelivery_client', $typeDelivery, PDO::PARAM_STR);
$stmt->bindParam(':typePay_client', $typePay, PDO::PARAM_STR);
$stmt->bindParam(':status_client', $status_order, PDO::PARAM_STR);
$stmt->bindParam(':date_client', $date, PDO::PARAM_STR);

$stmt->execute();
