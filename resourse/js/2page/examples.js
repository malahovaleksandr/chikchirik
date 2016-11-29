$(document).ready(function(){

   $('#fullpage').fullpage({
				anchors: ['Заказать', 'Интересно'],
				//sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
				css3: true,
				// navigation: true,
				// navigationPosition: 'right',
				// navigationTooltips: ['Главная', 'Информация'],
	   //меняем цвета хэдера
	   afterLoad: function (anchorLink, index) {//меняем цвета хэдера
		   //using index
		   var headerLogo=$('.header_logo'),//картинка логотипа
			   headButton=$('.header__coins_button');//кнопка купить в шапке
		   if (index == 1) {
			   headerLogo.attr('src','../image/logovector.png');
			   headButton.removeClass('color_blue');

		   }
		   if (index == 2) {
			   console.log('topPage2');
			   headerLogo.attr('src','../image/logoWhite.png');
			   headButton.addClass('color_blue'); 
		   }
	   }

   });
});