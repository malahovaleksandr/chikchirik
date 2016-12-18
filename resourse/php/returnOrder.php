<?php
include_once "config.php";
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


$dsn = "mysql:dbname=$db;host=$host";// подключение к БД mysql
$count='DESC LIMIT '.$_POST['count'];

$pdo = new PDO($dsn, $user, $pass);//подключаемся в БД

$sql = "SELECT * FROM data_orders ORDER BY id ".$count;

$stmt = $pdo->query($sql)->fetchAll(PDO::FETCH_ASSOC);

//foreach ($stmt as $val){
//}
echo json_encode($stmt);
//echo $count;



