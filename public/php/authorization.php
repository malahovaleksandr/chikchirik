<?php
session_start();
include "config.php";
//функция для очистки сессии и выход из прав админа
if($_POST['exitSession']=='exit9'){
    $_SESSION['auth']='not';
    //echo $_SESSION['auth'];
    echo 'exitAdmin';

}
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

$login=$_POST['login'];
$login=stripslashes($login);
$login = htmlspecialchars($login);
$Pass=$_POST['password'];
$Pass=stripslashes($Pass);
$Pass = htmlspecialchars($Pass);
//логин и пароль для входа
//$login = $pdo->quote($login);

$stmt = $pdo->prepare("SELECT * FROM admin WHERE login = :login");//проверяем вБД есть ли строка с таким логином
$stmt->bindParam(':login', $login);
$stmt->execute();

//$stmt = $pdo->query($sql);
$res = $stmt->FETCH(PDO::FETCH_BOTH);
if(isset($res['password'])){
    if($res['password']==$Pass) {// проверяем совпадение пароля
        echo 'authorizaionOK';
        $_SESSION['auth'] = 'realAdmin';
    }

}

