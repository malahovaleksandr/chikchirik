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

$pdo = new PDO($dsn, $user, $pass);//подключаемся в БД

$sql = "UPDATE data_orders SET status= :status WHERE id= :ID";

$stmt = $pdo->prepare($sql);
$stmt->bindParam(':status', $_POST['status']);
$stmt->bindParam(':ID', $_POST['id']);
$stmt->execute();

//echo $_POST['status'];
//echo 'обновил';
//echo $_POST['id'];

