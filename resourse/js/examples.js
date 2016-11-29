$(document).ready(function(){
	var headerLogo=$('.header_logo'),//картинка логотипа
		headButton=$('.header__coins_button'),//кнопка купить в шапке
		activeLink=$('.header_nav-text'),//выбираем ссылки на экраны,чтоб сделать активным
		headerNav=$('.header_nav');//блок где ссылки на страницы

	$('#fullpage').fullpage({
	   anchors: ['main', 'about', 'box', 'details', 'contacts'],

	   css3: true,
	   // navigation: true,
	   // navigationPosition: 'right',
	   // navigationTooltips: ['Главная', 'О нас', 'А что внутри?', 'На связи', 'Контакты'],


		//меняем цвета хэдера
	   afterLoad: function (anchorLink, index) {
		   //using index


		   if (index == 1) {
			   headerLogo.attr('src','image/logovector.png');
			   headButton.removeClass('color_blue');
			   headerNav.find('.active').removeClass('active');//удаляем активный класс
			   activeLink.eq(0).addClass('active');// добавляем активный класс ссылке текущей страницы
		   }
		   if (index == 2) {

			   headerLogo.attr('src','image/logoWhite.png');
			   headButton.addClass('color_blue');
			   headerNav.find('.active').removeClass('active');//удаляем активный класс
			   activeLink.eq(1).addClass('active');// добавляем активный класс ссылке текущей страницы
		   }
		   if (index == 3) {

			   headerLogo.attr('src','image/logovector.png');
			   headButton.removeClass('color_blue');
			   headerNav.find('.active').removeClass('active');//удаляем активный класс
			   activeLink.eq(2).addClass('active');// добавляем активный класс ссылке текущей страницы
		   }
		   if (index == 4) {

			   headerLogo.attr('src','image/logoWhite.png');
			   headButton.addClass('color_blue');
			   headerNav.find('.active').removeClass('active');//удаляем активный класс
			   activeLink.eq(3).addClass('active');// добавляем активный класс ссылке текущей страницы
		   }
		   if (index == 5) {
			   
			   headerLogo.attr('src','image/logovector.png');
			   headButton.removeClass('color_blue');
			   headerNav.find('.active').removeClass('active');//удаляем активный класс
			   activeLink.eq(4).addClass('active');// добавляем активный класс ссылке текущей страницы
		   }
	   }
   });
});