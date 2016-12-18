<?php session_start();
//require_once "../php/returnOrder.php";

if($_SESSION['auth'] !== 'realAdmin'){header( 'Location: ./enter.php' );}
?><!DOCTYPE HTML>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="keywords" content="чик-чирик">
		<meta name="author" content="SanMal">
		<meta name="description" content="Развивающие игрушки для детей">
		<!--link(href="data:image/x-icon;base64,AAABAAEAEBAQAAEABAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAGr/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEREQAAAAAREREREQAAAREREREREAARERERERERABEREREREREBEREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREQEREREREREQARERERERERAAERERERERAAABERERERAAAAABEREQAAD4HwAA4AcAAMADAACAAQAAgAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIABAACAAQAAwAMAAOAHAAD4HwAA", rel="icon", type="image/x-icon")-->
		<!--link(el="shorcut icon" href="../favicon.ico" type="image/x-icon")-->
		<!--link(rel="icon" href="../favicon.ico" type="image/x-icon")-->
		<title>CHIKCHIRIK</title>
		<link rel="stylesheet" href="../css/main.css">
	</head>
	<body>
		<section class="page1-desktop section wrapOrders">
			<div class="blockButtonAuthorization">
				<div class="exitButton js_showSession">показать</div>
				<select name="countColum" class="countColums js_countColums">
					<option value="10">10</option>
					<option value="20">20</option>
					<option value="30">30</option>
					<option value="50">50</option>
				</select>
				<!--.exitButton.js_saveSession сохранить-->
				<div class="exitButton marginLeftAuto js_exitSession">Выйти</div>
			</div>
			<div class="tableOrders">
				<div class="tableOrders_cell ceil1">id</div>
				<div class="tableOrders_cell ceil2">Имя клиента</div>
				<div class="tableOrders_cell ceil3">эл.почта</div>
				<div class="tableOrders_cell ceil4">номер телефона</div>
				<div class="tableOrders_cell ceil5">способ оплаты</div>
				<div class="tableOrders_cell ceil6">способ доставки</div>
				<div class="tableOrders_cell ceil7">дата заказа</div>
				<div class="tableOrders_cell ceil8">статус</div>
				<div class="tableOrders_cell">Изменить статус</div>
			</div>
			<!--:php-->
			<!--    foreach($stmt as $key => $value){-->
			<!--        echo "<div class=\"tableOrders\">-->
			<!--        <div class=\"tableOrders_cell ceil1\">".$value['id']."</div>-->
			<!--        <div class=\"tableOrders_cell ceil2\">".$value['name']."</div>-->
			<!--        <div class=\"tableOrders_cell ceil3\">".$value['email']."</div>-->
			<!--        <div class=\"tableOrders_cell ceil4\">".$value['telephone']."</div>-->
			<!--        <div class=\"tableOrders_cell ceil5\">".$value['typePay']."</div>-->
			<!--        <div class=\"tableOrders_cell ceil6\">".$value['typeDelivery']."</div>-->
			<!--         <div class=\"tableOrders_cell ceil7\">".$value['dateOrder']."</div>-->
			<!--         <div class=\"tableOrders_cell ceil8\">".$value['status']."</div>-->
			<!--         <select name=\"selectOrder\" class=\"selectOrder\">-->
			<!--         <option value=\"wait send\">Ожидает отправки</option>-->
			<!--         <option value=\"sent alredy\">Отправлен</option>-->
			<!--         </select>-->
			<!--         </div>";-->
			<!--    }-->
			
			
		</section>
		<footer class="footer">
			<div class="footer-text1">© 2016 chikchirik tm</div>
			<div class="footer-text2"><a href="http://kzmr.com.ua/" target="_blank">
					<div class="footer-text2_ExtraBold">KZMR</div></a><a href="http://kzmr.com.ua/" target="_blank">
					<div class="footer-text2_MullerRegular">Prod.</div></a></div>
		</footer>
	</body>
	<script src="../js/jquery.js" type="text/javascript"></script>
	<script type="text/javascript">var ord = 1;</script>
	<script src="../js/authorization.js" type="text/javascript"></script>
</html>