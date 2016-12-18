<?php session_start();?><!DOCTYPE HTML>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
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
			<form method="POST" action="" class="block__authorithation">
				<input type="text" name="login" placeholder="Логин" class="textInput js_inputLogin">
				<input type="password" name="passwordAdmin" placeholder="Пароль" class="textInput js_inputPassAdmin">
				<div class="authorithation_buttonEnter js_enterAuthorizationButton">ВОЙТИ</div>
			</form>
		</section>
		<footer class="footer">
			<div class="footer-text1">© 2016 chikchirik tm</div>
			<div class="footer-text2"><a href="http://kzmr.com.ua/" target="_blank">
					<div class="footer-text2_ExtraBold">KZMR</div></a><a href="http://kzmr.com.ua/" target="_blank">
					<div class="footer-text2_MullerRegular">Prod.</div></a></div>
		</footer>
	</body>
	<script src="../js/jquery.js" type="text/javascript"></script>
	<script src="../js/authorization.js" type="text/javascript"></script>
</html>