$(document).ready(function(){
	console.log('connect show clouddddddd');//подключения меню на весь экран зеленое
});

	var	blockCloud=$('.page3_content').offset().top-300,//положене блока от верхнего края, -500 это чтоб заранее была точка появления блока
		blockCloudBefore=$('.page3_content').offset().top-1200,
		clouds=$('.page3_content_absoluteBlock'),//находим все облака


		//переменные для перемены фона хэдер
		footer=$('.footer'),//блок футера
		header=$('.header'),//блок хедер
		headerLogo=$('.header_logo'),//картинка логотипа
		headButton=$('.header__coins_button'),//кнопка купить в шапке
		heightHeader=header.height(),

		activeLink=$('.header_nav-text'),//выбираем ссылки на экраны,чтоб сделать активным
		headerNav=$('.header_nav'),//блок где ссылки на страницы

		topPage2=$('#2').offset().top-heightHeader,//начало верха второй страницы минус высота хедера
		topPage3=$('#3').offset().top-heightHeader,
		topPage4=$('#4').offset().top-heightHeader,
		topPage5=$('#5').offset().top-heightHeader;




	$(document).on('scroll',function(){//функция для смены цвета хедер при скролле страниц
		var scrollTop=$(window).scrollTop();
		console.log(heightHeader);

		//эти условия срабатывают когда прокрутка опускается до нужного блока и беруться параметры из БД и применяются к нужному кружку
		if(scrollTop<topPage2){//при прокрутке меняем цвет header и footer
			header.css('background','#4AB7C7');
			headerLogo.attr('src','image/logovector.png');
			headButton.removeClass('color_blue');
			headerNav.find('.active').removeClass('active');//удаляем активный класс
			activeLink.eq(0).addClass('active');// добавляем активный класс ссылке текущей страницы
		}
		if(scrollTop>=topPage2){//при прокрутке меняем цвет header и footer
			header.css('background','#eda223');
			headerLogo.attr('src','image/logoWhite.png');
			headButton.addClass('color_blue');
			headerNav.find('.active').removeClass('active');//удаляем активный класс
			activeLink.eq(1).addClass('active');// добавляем активный класс ссылке текущей страницы

		}
		if(scrollTop>=topPage3){//при прокрутке меняем цвет header и footer
			header.css('background','#4AB7C7');
			headerLogo.attr('src','image/logovector.png');
			headButton.removeClass('color_blue');
			headerNav.find('.active').removeClass('active');//удаляем активный класс
			activeLink.eq(2).addClass('active');// добавляем активный класс ссылке текущей страницы

		}
		if(scrollTop>=topPage4){//при прокрутке меняем цвет header и footer
			header.css('background','#eda223');
			headerLogo.attr('src','image/logoWhite.png');
			headButton.addClass('color_blue');
			headerNav.find('.active').removeClass('active');//удаляем активный класс
			activeLink.eq(3).addClass('active');// добавляем активный класс ссылке текущей страницы

		}
		if(scrollTop>=topPage5){//при прокрутке меняем цвет header и footer
			header.css('background','#4AB7C7');
			headerLogo.attr('src','image/logovector.png');
			headButton.removeClass('color_blue');
			headerNav.find('.active').removeClass('active');//удаляем активный класс
			activeLink.eq(4).addClass('active');// добавляем активный класс ссылке текущей страницы

		}




		//эти условия срабатывают когда прокрутка опускается до нужного блока и беруться параметры из БД и применяются к нужному кружку
		if(scrollTop>=blockCloudBefore){//при прокрутке делаем блоки прозрачными
			console.log('высота1: '+scrollTop);

			for(i=0;i<clouds.length;i++){
				clouds.eq(i).css('opacity',0);
			}
			$('.page3_dotatedLeft').css('opacity',0);
			$('.page3_dotatedCenter').css('opacity',0);
			$('.page3_dotatedRight').css('opacity',0);
			
		}

		//эти условия срабатывают когда прокрутка опускается до нужного блока и беруться параметры из БД и применяются к нужному кружку
		if(scrollTop>=blockCloud){
			console.log('высота2: '+scrollTop);

			for(i=0;i<clouds.length;i++){
				clouds.eq(i).css('opacity',1);
			}
			$('.page3_dotatedLeft').css('opacity',1);
			$('.page3_dotatedCenter').css('opacity',1);
			$('.page3_dotatedRight').css('opacity',1);

		 }

	});




