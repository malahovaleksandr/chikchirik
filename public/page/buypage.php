<!DOCTYPE HTML>
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
		<header class="header"><img src="../image/logovector.png" alt="logo" class="header_logo">
			<div class="header_nav"><a href="../index.html#main" data-index="1">
					<div class="header_nav-text">Главная</div></a><a href="../index.html#about" data-index="2">
					<div class="header_nav-text">О нас</div></a><a href="../index.html#box" data-index="3">
					<div class="header_nav-text">А что внутри?</div></a><a href="../index.html#details" data-index="4">
					<div class="header_nav-text">Детали</div></a><a href="../index.html#contacts" data-index="4">
					<div class="header_nav-text">Контакты</div></a></div>
			<div class="header_navigation-block">
				<div class="header__coins"><img src="../image/insert-coin.png" alt="coins" class="header__coins_image"><a href="buypage.html">
						<button class="header__coins_button">
							<div class="hover__button">КУПИТЬ</div>
						</button></a></div>
				<div class="header__icons"><a href="blog.html">
						<div class="header_nav-text active">Бложек</div></a><a href="https://www.facebook.com/chikchirikkids/" target="_blank">
						<div class="header_nav__icon header_nav__icon-fb first-icon"></div></a><a href="https://www.instagram.com/chikchirikkids/" target="_blank">
						<div class="header_nav__icon header_nav__icon-instagram"></div></a><a href="mailto:CHIKCHIRIKKIDS@GMAIL.COM" target="_blank">
						<div class="header_nav__icon header_nav__icon-mail"></div></a></div>
			</div>
		</header>
		<div id="fullpage">
			<section class="desktop page1-desktop section pageBuySection">
				<div id="1" class="link-for-deskto"></div><img src="../image/blogCloud1.png" alt="cloth" class="blogDesktop1__cloth1"><img src="../image/blogCloud2.png" alt="cloth" class="blogDesktop1__cloth2">
				<div class="content-desktop">
					<div class="desktop1_content">
						<div class="desktop1__title blogDesktop1_title buyPageDesktop1_title">
							<div class="desktop1__title1">ДАЙТЕ МНЕ</div>
							<div class="desktop1__title2">КОРОБКУ</div>
							<div class="blogDesktop1__title3">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Aliquam et lectus et leo venenatis mollis eget eget justo.
								 Praesent tristique lacus eget orci sodales, vitae
							</div>
							<div class="textInLine">
								<div class="textThink">Стоимость коробочки</div>
								<div class="textThink dashDescription">  -</div>
								<div class="textBold">549 ГРН</div>
							</div>
						</div>
						<div class="striped-line stripedLineBlog">....................</div>
						<div class="desktop1__box-photo"><img src="../image/Box.png" alt="image-box" class="blogPage1__image"></div>
						<div class="striped-line stripedLineBlog">....................</div>
						<form action="" method="post" class="blogBlogForm">
							<input type="text" name="name" placeholder="ВАШЕ ИМЯ" class="inputName textInput">
							<div class="block2Input">
								<input type="text" name="telephone" placeholder="НОМЕР ТЕЛЕФОНА" class="inputTelephone textInput js_phoneNumber">
								<input type="text" name="mail" placeholder="EMAIL" class="inputEmail textInput js_inputEmail">
								<div class="validateIcon"></div>
							</div>
							<div class="columnDelivery">
								<div class="columnType">СПОСОБ ОПЛАТЫ
									<div class="inlineInput">
										<input type="radio" name="typePay" value="cash" id="InputCash" class="styleRadioBatton js_cashCurier">
										<div class="dottedInput">..........</div>
										<label for="InputCash" class="nameInput js_cashCurier">Наличными курьеру</label>
									</div>
									<div class="inlineInput">
										<input type="radio" name="typePay" value="cod" id="InputCod" class="styleRadioBatton js_codPay">
										<div class="dottedInput">..........</div>
										<label for="InputCod" class="nameInput js_codPay">Наложенным платежем</label>
									</div>
									<div class="inlineInput">
										<input type="radio" name="typePay" value="card" id="InputCard" data-link="https://www.liqpay.com/ru/checkout/380631275355" class="styleRadioBatton js_payCard">
										<div class="dottedInput">..........</div>
										<label for="InputCard" class="nameInput js_payCard">Оплатить картой</label>
									</div>
								</div>
								<div class="columnType">СПОСОБ ДОСАВКИ
									<div class="inlineInput js_deliveryCurierKiev">
										<input type="radio" name="typeDelivery" value="curier" id="curier" class="styleRadioBatton js_input_deliveryCurierKiev">
										<div class="dottedInput">..........</div>
										<label for="curier" class="nameInput nameInput_width">Курьером по Киеву</label>
									</div>
									<div class="inlineInput js_deliveryNewPost">
										<input type="radio" name="typeDelivery" value="newPost" id="newPost" class="styleRadioBatton js_input_deliveryNewPost">
										<div class="dottedInput">..........</div>
										<label for="newPost" class="nameInput nameInput_width">"Новой Почтой"</label>
									</div>
									<div class="inlineInput js_pickUp">
										<input type="radio" name="typeDelivery" value="pickUp" id="pickUp" class="styleRadioBatton js_input_pickUp">
										<div class="dottedInput">..........</div>
										<label for="pickUp" class="nameInput nameInput_width">Самовывоз</label>
									</div>
								</div>
							</div>
						</form>
					</div>
					<button class="blogDesktop1Button buttonBuyPage js_buttonBuy">НУ ДАВАЙТЕ ЖЕ<img src="../image/blogKassa.png" alt="kassa" class="kassa_image-button"></button>
				</div>
			</section>
		</div>
		<footer class="footer">
			<div class="footer-text1">© 2016 chikchirik tm</div>
			<div class="footer-text2"><a href="http://kzmr.com.ua/" target="_blank">
					<div class="footer-text2_ExtraBold">KZMR</div></a><a href="http://kzmr.com.ua/" target="_blank">
					<div class="footer-text2_MullerRegular">Prod.</div></a></div>
		</footer>
	</body>
	<script src="../js/jquery.js" type="text/javascript"></script>
	<script src="../js/Buypage.js" type="text/javascript"></script>
</html>