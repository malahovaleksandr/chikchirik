    $(document).ready(function(){
        console.log('подключен link_slide');
    });

    $(document).ready(function(){
        $(".header_nav").on("click","a", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();
            //забираем идентификатор бока с атрибута href
            var id  = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;
            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1000);

        });
        $(".js_link_page2").on("click", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();
            //забираем идентификатор бока с атрибута href
            var id  = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;
            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1000);

        });


    });

    $(document).ready(function(){
        console.log('подключен меню перелистывает ');
    });

    // desctop 4 при нажатии на меню появляется текст
    var itemMenu=$('.page4_menu-item'),//пункт меню
        textMenu=itemMenu.find('.page4_menu-text');//текст которыйдолжен появиться

    itemMenu.on('click',function(){
        var $this = $(this),
            page4=$this.parent('.content-desktop_page4'),//находим блок страницы
            activBlockText=page4.find('.page4_menu-text_activ'),//находим существующий активный клас у текста
            activBlockTitle=page4.find('.page4_menu-title_activ');//находим существующий активный клас у титула

            activBlockTitle.removeClass('page4_menu-title_activ');// удаляем у титула существующий активный класс
            activBlockText.removeClass('page4_menu-text_activ');// удаляем у текста существующий активный класс
        $this.find('.page4_menu-text').addClass('page4_menu-text_activ');// добавляем тексту автиквный класс элементу на который нажали
        $this.find('.page4_menu-title').addClass('page4_menu-title_activ');// добавляем титулу автиквный класс элементу на который нажали

    });
$(document).ready(function(){
    console.log('connect move arrow');
    var arrowBlock= $('.desktop1_learn-more__arrow');


    function bigArrow (){

        arrowBlock.animate({
            marginBottom: "8px",
            width: "22px",
            opacity:1,
            height: '34px'
        },800);
        setTimeout(function(){
            smallArrow();
        }, 1000);

    }
    function smallArrow(){

        arrowBlock.animate({
            marginBottom: 0,
            width: "15px",
            opacity:0.5,
            height: '28px'
        },1000);
    }



    setInterval(bigArrow,2200);

});
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







var arrowRight=$('.page3_arrow-right'),//стрелочка вправо
    arrowLeft=$('.page3_arrow-left'),//стрелочка влево

    allCloud=$('.page3_content_absoluteBlock'),//все облака
    conteiner=$('.page3_content'),//контейнер где лежат все облака
    t=1;//порядковый номер

        arrowRight.on('click',function(){
            console.log('номер: '+t);


            var center=t+1,
                right=t+2;
            console.log('center: '+center);
            console.log('right: '+right);

             if(t==allCloud.length) {t=0; }//обнуляем коефициент t когда выше кол-ва облаков
            if(center==allCloud.length) {center=0; console.log('center пронизил: '+t)}//редактируем коефициент чтоб не был выше чем колтчество облачков
            if(center==allCloud.length+1) {center=1; console.log('center пронизил: '+t)}
             if(right==allCloud.length) {right=0;console.log('right пронизил: '+t) }
            if(right==allCloud.length+1) {right=1;console.log('right пронизил: '+t) }
            if(right==allCloud.length+2) {right=2;console.log('right пронизил: '+t) }



            conteiner.find('.cloud_absolute_left').removeClass('cloud_absolute_left');//удаляем классы чтоб облаком поменяло место
            conteiner.find('.cloud_absolute_center').removeClass('cloud_absolute_center');
            conteiner.find('.cloud_absolute_right').removeClass('cloud_absolute_right');

            allCloud.eq(t).addClass('cloud_absolute_left');//добавляем класс который переместит облако в нужное новое положение
            allCloud.eq(center).addClass('cloud_absolute_center');
            allCloud.eq(right).addClass('cloud_absolute_right');


             t++;

        });

        arrowLeft.on('click',function(){

            if(t<0) {t=allCloud.length-1; }
            var center=t-1,
                left=t-2;


            if(center==-1) {center=allCloud.length-1; console.log('center пронизил: '+center)}
            if(center==-2) {center=allCloud.length-2; console.log('center пронизил: '+center)}

            if(left==-1) {left=allCloud.length-1;console.log('left пронизил: '+left) }
            if(left==-2) {left=allCloud.length-2;console.log('left пронизил: '+left) }
            if(left==-3) {left=allCloud.length-3;console.log('left пронизил: '+left) }

            console.log('t: '+t);
            console.log('center: '+center);
            console.log('left: '+left);

            conteiner.find('.cloud_absolute_left').removeClass('cloud_absolute_left');//удаляем классы чтоб облаком поменяло место
            conteiner.find('.cloud_absolute_center').removeClass('cloud_absolute_center');
            conteiner.find('.cloud_absolute_right').removeClass('cloud_absolute_right');

            allCloud.eq(t).addClass('cloud_absolute_right');//добавляем класс который переместит облако в нужное новое положение
            allCloud.eq(center).addClass('cloud_absolute_center');
            allCloud.eq(left).addClass('cloud_absolute_left');

            t--;


        });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmtfc2xpZGUuanMiLCJtYWluLmpzIiwibW92ZV9hcnJvdy5qcyIsInNob3dfY2xvdWQuanMiLCJzbGlkZXJfY2xvdWRzLmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiY29uc29sZSIsImxvZyIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImlkIiwidGhpcyIsImF0dHIiLCJ0b3AiLCJvZmZzZXQiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwiaXRlbU1lbnUiLCJ0ZXh0TWVudSIsImZpbmQiLCIkdGhpcyIsInBhZ2U0IiwicGFyZW50IiwiYWN0aXZCbG9ja1RleHQiLCJhY3RpdkJsb2NrVGl0bGUiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiYmlnQXJyb3ciLCJhcnJvd0Jsb2NrIiwibWFyZ2luQm90dG9tIiwid2lkdGgiLCJvcGFjaXR5IiwiaGVpZ2h0Iiwic2V0VGltZW91dCIsInNtYWxsQXJyb3ciLCJzZXRJbnRlcnZhbCIsImJsb2NrQ2xvdWQiLCJibG9ja0Nsb3VkQmVmb3JlIiwiY2xvdWRzIiwiZm9vdGVyIiwiaGVhZGVyIiwiaGVhZGVyTG9nbyIsImhlYWRCdXR0b24iLCJoZWlnaHRIZWFkZXIiLCJhY3RpdmVMaW5rIiwiaGVhZGVyTmF2IiwidG9wUGFnZTIiLCJ0b3BQYWdlMyIsInRvcFBhZ2U0IiwidG9wUGFnZTUiLCJ3aW5kb3ciLCJjc3MiLCJlcSIsImkiLCJsZW5ndGgiLCJhcnJvd1JpZ2h0IiwiYXJyb3dMZWZ0IiwiYWxsQ2xvdWQiLCJjb250ZWluZXIiLCJ0IiwiY2VudGVyIiwicmlnaHQiLCJsZWZ0Il0sIm1hcHBpbmdzIjoiQUFBQUEsRUFBQUMsVUFBQUMsTUFBQSxXQUNBQyxRQUFBQyxJQUFBLDBCQUdBSixFQUFBQyxVQUFBQyxNQUFBLFdBQ0FGLEVBQUEsZUFBQUssR0FBQSxRQUFBLElBQUEsU0FBQUMsR0FFQUEsRUFBQUMsZ0JBRUEsSUFBQUMsR0FBQVIsRUFBQVMsTUFBQUMsS0FBQSxRQUVB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QyxJQUFBLFNBQUF3RCxHQUVBSixVQUFBdkMsS0FBQSx3QkFBQU0sWUFBQSx1QkFDQWlDLFVBQUF2QyxLQUFBLDBCQUFBTSxZQUFBLHlCQUNBaUMsVUFBQXZDLEtBQUEseUJBQUFNLFlBQUEsd0JBRUFnQyxTQUFBTCxHQUFBTyxHQUFBakMsU0FBQSx3QkFDQStCLFNBQUFMLEdBQUFRLEdBQUFsQyxTQUFBLHlCQUNBK0IsU0FBQUwsR0FBQVUsR0FBQXBDLFNBQUEsdUJBRUFpQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ9C/0L7QtNC60LvRjtGH0LXQvSBsaW5rX3NsaWRlJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgICAgICQoXCIuaGVhZGVyX25hdlwiKS5vbihcImNsaWNrXCIsXCJhXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAvL9C+0YLQvNC10L3Rj9C10Lwg0YHRgtCw0L3QtNCw0YDRgtC90YPRjiDQvtCx0YDQsNCx0L7RgtC60YMg0L3QsNC20LDRgtC40Y8g0L/QviDRgdGB0YvQu9C60LVcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgLy/Qt9Cw0LHQuNGA0LDQtdC8INC40LTQtdC90YLQuNGE0LjQutCw0YLQvtGAINCx0L7QutCwINGBINCw0YLRgNC40LHRg9GC0LAgaHJlZlxyXG4gICAgICAgICAgICB2YXIgaWQgID0gJCh0aGlzKS5hdHRyKCdocmVmJyksXHJcbiAgICAgICAgICAgIC8v0YPQt9C90LDQtdC8INCy0YvRgdC+0YLRgyDQvtGCINC90LDRh9Cw0LvQsCDRgdGC0YDQsNC90LjRhtGLINC00L4g0LHQu9C+0LrQsCDQvdCwINC60L7RgtC+0YDRi9C5INGB0YHRi9C70LDQtdGC0YHRjyDRj9C60L7RgNGMXHJcbiAgICAgICAgICAgICAgICB0b3AgPSAkKGlkKS5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgICAgIC8v0LDQvdC40LzQuNGA0YPQtdC8INC/0LXRgNC10YXQvtC0INC90LAg0YDQsNGB0YHRgtC+0Y/QvdC40LUgLSB0b3Ag0LfQsCAxNTAwINC80YFcclxuICAgICAgICAgICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiB0b3B9LCAxMDAwKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJChcIi5qc19saW5rX3BhZ2UyXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIC8v0L7RgtC80LXQvdGP0LXQvCDRgdGC0LDQvdC00LDRgNGC0L3Rg9GOINC+0LHRgNCw0LHQvtGC0LrRgyDQvdCw0LbQsNGC0LjRjyDQv9C+INGB0YHRi9C70LrQtVxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAvL9C30LDQsdC40YDQsNC10Lwg0LjQtNC10L3RgtC40YTQuNC60LDRgtC+0YAg0LHQvtC60LAg0YEg0LDRgtGA0LjQsdGD0YLQsCBocmVmXHJcbiAgICAgICAgICAgIHZhciBpZCAgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKSxcclxuICAgICAgICAgICAgLy/Rg9C30L3QsNC10Lwg0LLRi9GB0L7RgtGDINC+0YIg0L3QsNGH0LDQu9CwINGB0YLRgNCw0L3QuNGG0Ysg0LTQviDQsdC70L7QutCwINC90LAg0LrQvtGC0L7RgNGL0Lkg0YHRgdGL0LvQsNC10YLRgdGPINGP0LrQvtGA0YxcclxuICAgICAgICAgICAgICAgIHRvcCA9ICQoaWQpLm9mZnNldCgpLnRvcDtcclxuICAgICAgICAgICAgLy/QsNC90LjQvNC40YDRg9C10Lwg0L/QtdGA0LXRhdC+0LQg0L3QsCDRgNCw0YHRgdGC0L7Rj9C90LjQtSAtIHRvcCDQt9CwIDE1MDAg0LzRgVxyXG4gICAgICAgICAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6IHRvcH0sIDEwMDApO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgfSk7XHJcbiIsIiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfQv9C+0LTQutC70Y7Rh9C10L0g0LzQtdC90Y4g0L/QtdGA0LXQu9C40YHRgtGL0LLQsNC10YIgJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBkZXNjdG9wIDQg0L/RgNC4INC90LDQttCw0YLQuNC4INC90LAg0LzQtdC90Y4g0L/QvtGP0LLQu9GP0LXRgtGB0Y8g0YLQtdC60YHRglxyXG4gICAgdmFyIGl0ZW1NZW51PSQoJy5wYWdlNF9tZW51LWl0ZW0nKSwvL9C/0YPQvdC60YIg0LzQtdC90Y5cclxuICAgICAgICB0ZXh0TWVudT1pdGVtTWVudS5maW5kKCcucGFnZTRfbWVudS10ZXh0Jyk7Ly/RgtC10LrRgdGCINC60L7RgtC+0YDRi9C50LTQvtC70LbQtdC9INC/0L7Rj9Cy0LjRgtGM0YHRj1xyXG5cclxuICAgIGl0ZW1NZW51Lm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBwYWdlND0kdGhpcy5wYXJlbnQoJy5jb250ZW50LWRlc2t0b3BfcGFnZTQnKSwvL9C90LDRhdC+0LTQuNC8INCx0LvQvtC6INGB0YLRgNCw0L3QuNGG0YtcclxuICAgICAgICAgICAgYWN0aXZCbG9ja1RleHQ9cGFnZTQuZmluZCgnLnBhZ2U0X21lbnUtdGV4dF9hY3RpdicpLC8v0L3QsNGF0L7QtNC40Lwg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQuNC5INCw0LrRgtC40LLQvdGL0Lkg0LrQu9Cw0YEg0YMg0YLQtdC60YHRgtCwXHJcbiAgICAgICAgICAgIGFjdGl2QmxvY2tUaXRsZT1wYWdlNC5maW5kKCcucGFnZTRfbWVudS10aXRsZV9hY3RpdicpOy8v0L3QsNGF0L7QtNC40Lwg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQuNC5INCw0LrRgtC40LLQvdGL0Lkg0LrQu9Cw0YEg0YMg0YLQuNGC0YPQu9CwXHJcblxyXG4gICAgICAgICAgICBhY3RpdkJsb2NrVGl0bGUucmVtb3ZlQ2xhc3MoJ3BhZ2U0X21lbnUtdGl0bGVfYWN0aXYnKTsvLyDRg9C00LDQu9GP0LXQvCDRgyDRgtC40YLRg9C70LAg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQuNC5INCw0LrRgtC40LLQvdGL0Lkg0LrQu9Cw0YHRgVxyXG4gICAgICAgICAgICBhY3RpdkJsb2NrVGV4dC5yZW1vdmVDbGFzcygncGFnZTRfbWVudS10ZXh0X2FjdGl2Jyk7Ly8g0YPQtNCw0LvRj9C10Lwg0YMg0YLQtdC60YHRgtCwINGB0YPRidC10YHRgtCy0YPRjtGJ0LjQuSDQsNC60YLQuNCy0L3Ri9C5INC60LvQsNGB0YFcclxuICAgICAgICAkdGhpcy5maW5kKCcucGFnZTRfbWVudS10ZXh0JykuYWRkQ2xhc3MoJ3BhZ2U0X21lbnUtdGV4dF9hY3RpdicpOy8vINC00L7QsdCw0LLQu9GP0LXQvCDRgtC10LrRgdGC0YMg0LDQstGC0LjQutCy0L3Ri9C5INC60LvQsNGB0YEg0Y3Qu9C10LzQtdC90YLRgyDQvdCwINC60L7RgtC+0YDRi9C5INC90LDQttCw0LvQuFxyXG4gICAgICAgICR0aGlzLmZpbmQoJy5wYWdlNF9tZW51LXRpdGxlJykuYWRkQ2xhc3MoJ3BhZ2U0X21lbnUtdGl0bGVfYWN0aXYnKTsvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0YLQuNGC0YPQu9GDINCw0LLRgtC40LrQstC90YvQuSDQutC70LDRgdGBINGN0LvQtdC80LXQvdGC0YMg0L3QsCDQutC+0YLQvtGA0YvQuSDQvdCw0LbQsNC70LhcclxuXHJcbiAgICB9KTsiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgY29uc29sZS5sb2coJ2Nvbm5lY3QgbW92ZSBhcnJvdycpO1xyXG4gICAgdmFyIGFycm93QmxvY2s9ICQoJy5kZXNrdG9wMV9sZWFybi1tb3JlX19hcnJvdycpO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBiaWdBcnJvdyAoKXtcclxuXHJcbiAgICAgICAgYXJyb3dCbG9jay5hbmltYXRlKHtcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjhweFwiLFxyXG4gICAgICAgICAgICB3aWR0aDogXCIyMnB4XCIsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6MSxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMzRweCdcclxuICAgICAgICB9LDgwMCk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBzbWFsbEFycm93KCk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcblxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc21hbGxBcnJvdygpe1xyXG5cclxuICAgICAgICBhcnJvd0Jsb2NrLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IDAsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjE1cHhcIixcclxuICAgICAgICAgICAgb3BhY2l0eTowLjUsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzI4cHgnXHJcbiAgICAgICAgfSwxMDAwKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHNldEludGVydmFsKGJpZ0Fycm93LDIyMDApO1xyXG5cclxufSk7IiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblx0Y29uc29sZS5sb2coJ2Nvbm5lY3Qgc2hvdyBjbG91ZGRkZGRkZCcpOy8v0L/QvtC00LrQu9GO0YfQtdC90LjRjyDQvNC10L3RjiDQvdCwINCy0LXRgdGMINGN0LrRgNCw0L0g0LfQtdC70LXQvdC+0LVcbn0pO1xuXG5cdHZhclx0YmxvY2tDbG91ZD0kKCcucGFnZTNfY29udGVudCcpLm9mZnNldCgpLnRvcC0zMDAsLy/Qv9C+0LvQvtC20LXQvdC1INCx0LvQvtC60LAg0L7RgiDQstC10YDRhdC90LXQs9C+INC60YDQsNGPLCAtNTAwINGN0YLQviDRh9GC0L7QsSDQt9Cw0YDQsNC90LXQtSDQsdGL0LvQsCDRgtC+0YfQutCwINC/0L7Rj9Cy0LvQtdC90LjRjyDQsdC70L7QutCwXG5cdFx0YmxvY2tDbG91ZEJlZm9yZT0kKCcucGFnZTNfY29udGVudCcpLm9mZnNldCgpLnRvcC0xMjAwLFxuXHRcdGNsb3Vkcz0kKCcucGFnZTNfY29udGVudF9hYnNvbHV0ZUJsb2NrJyksLy/QvdCw0YXQvtC00LjQvCDQstGB0LUg0L7QsdC70LDQutCwXG5cblxuXHRcdC8v0L/QtdGA0LXQvNC10L3QvdGL0LUg0LTQu9GPINC/0LXRgNC10LzQtdC90Ysg0YTQvtC90LAg0YXRjdC00LXRgFxuXHRcdGZvb3Rlcj0kKCcuZm9vdGVyJyksLy/QsdC70L7QuiDRhNGD0YLQtdGA0LBcblx0XHRoZWFkZXI9JCgnLmhlYWRlcicpLC8v0LHQu9C+0Log0YXQtdC00LXRgFxuXHRcdGhlYWRlckxvZ289JCgnLmhlYWRlcl9sb2dvJyksLy/QutCw0YDRgtC40L3QutCwINC70L7Qs9C+0YLQuNC/0LBcblx0XHRoZWFkQnV0dG9uPSQoJy5oZWFkZXJfX2NvaW5zX2J1dHRvbicpLC8v0LrQvdC+0L/QutCwINC60YPQv9C40YLRjCDQsiDRiNCw0L/QutC1XG5cdFx0aGVpZ2h0SGVhZGVyPWhlYWRlci5oZWlnaHQoKSxcblxuXHRcdGFjdGl2ZUxpbms9JCgnLmhlYWRlcl9uYXYtdGV4dCcpLC8v0LLRi9Cx0LjRgNCw0LXQvCDRgdGB0YvQu9C60Lgg0L3QsCDRjdC60YDQsNC90Yss0YfRgtC+0LEg0YHQtNC10LvQsNGC0Ywg0LDQutGC0LjQstC90YvQvFxuXHRcdGhlYWRlck5hdj0kKCcuaGVhZGVyX25hdicpLC8v0LHQu9C+0Log0LPQtNC1INGB0YHRi9C70LrQuCDQvdCwINGB0YLRgNCw0L3QuNGG0YtcblxuXHRcdHRvcFBhZ2UyPSQoJyMyJykub2Zmc2V0KCkudG9wLWhlaWdodEhlYWRlciwvL9C90LDRh9Cw0LvQviDQstC10YDRhdCwINCy0YLQvtGA0L7QuSDRgdGC0YDQsNC90LjRhtGLINC80LjQvdGD0YEg0LLRi9GB0L7RgtCwINGF0LXQtNC10YDQsFxuXHRcdHRvcFBhZ2UzPSQoJyMzJykub2Zmc2V0KCkudG9wLWhlaWdodEhlYWRlcixcblx0XHR0b3BQYWdlND0kKCcjNCcpLm9mZnNldCgpLnRvcC1oZWlnaHRIZWFkZXIsXG5cdFx0dG9wUGFnZTU9JCgnIzUnKS5vZmZzZXQoKS50b3AtaGVpZ2h0SGVhZGVyO1xuXG5cblxuXG5cdCQoZG9jdW1lbnQpLm9uKCdzY3JvbGwnLGZ1bmN0aW9uKCl7Ly/RhNGD0L3QutGG0LjRjyDQtNC70Y8g0YHQvNC10L3RiyDRhtCy0LXRgtCwINGF0LXQtNC10YAg0L/RgNC4INGB0LrRgNC+0LvQu9C1INGB0YLRgNCw0L3QuNGGXG5cdFx0dmFyIHNjcm9sbFRvcD0kKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cdFx0Y29uc29sZS5sb2coaGVpZ2h0SGVhZGVyKTtcblxuXHRcdC8v0Y3RgtC4INGD0YHQu9C+0LLQuNGPINGB0YDQsNCx0LDRgtGL0LLQsNGO0YIg0LrQvtCz0LTQsCDQv9GA0L7QutGA0YPRgtC60LAg0L7Qv9GD0YHQutCw0LXRgtGB0Y8g0LTQviDQvdGD0LbQvdC+0LPQviDQsdC70L7QutCwINC4INCx0LXRgNGD0YLRjNGB0Y8g0L/QsNGA0LDQvNC10YLRgNGLINC40Lcg0JHQlCDQuCDQv9GA0LjQvNC10L3Rj9GO0YLRgdGPINC6INC90YPQttC90L7QvNGDINC60YDRg9C20LrRg1xuXHRcdGlmKHNjcm9sbFRvcDx0b3BQYWdlMil7Ly/Qv9GA0Lgg0L/RgNC+0LrRgNGD0YLQutC1INC80LXQvdGP0LXQvCDRhtCy0LXRgiBoZWFkZXIg0LggZm9vdGVyXG5cdFx0XHRoZWFkZXIuY3NzKCdiYWNrZ3JvdW5kJywnIzRBQjdDNycpO1xuXHRcdFx0aGVhZGVyTG9nby5hdHRyKCdzcmMnLCdpbWFnZS9sb2dvdmVjdG9yLnBuZycpO1xuXHRcdFx0aGVhZEJ1dHRvbi5yZW1vdmVDbGFzcygnY29sb3JfYmx1ZScpO1xuXHRcdFx0aGVhZGVyTmF2LmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7Ly/Rg9C00LDQu9GP0LXQvCDQsNC60YLQuNCy0L3Ri9C5INC60LvQsNGB0YFcblx0XHRcdGFjdGl2ZUxpbmsuZXEoMCkuYWRkQ2xhc3MoJ2FjdGl2ZScpOy8vINC00L7QsdCw0LLQu9GP0LXQvCDQsNC60YLQuNCy0L3Ri9C5INC60LvQsNGB0YEg0YHRgdGL0LvQutC1INGC0LXQutGD0YnQtdC5INGB0YLRgNCw0L3QuNGG0Ytcblx0XHR9XG5cdFx0aWYoc2Nyb2xsVG9wPj10b3BQYWdlMil7Ly/Qv9GA0Lgg0L/RgNC+0LrRgNGD0YLQutC1INC80LXQvdGP0LXQvCDRhtCy0LXRgiBoZWFkZXIg0LggZm9vdGVyXG5cdFx0XHRoZWFkZXIuY3NzKCdiYWNrZ3JvdW5kJywnI2VkYTIyMycpO1xuXHRcdFx0aGVhZGVyTG9nby5hdHRyKCdzcmMnLCdpbWFnZS9sb2dvV2hpdGUucG5nJyk7XG5cdFx0XHRoZWFkQnV0dG9uLmFkZENsYXNzKCdjb2xvcl9ibHVlJyk7XG5cdFx0XHRoZWFkZXJOYXYuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTsvL9GD0LTQsNC70Y/QtdC8INCw0LrRgtC40LLQvdGL0Lkg0LrQu9Cw0YHRgVxuXHRcdFx0YWN0aXZlTGluay5lcSgxKS5hZGRDbGFzcygnYWN0aXZlJyk7Ly8g0LTQvtCx0LDQstC70Y/QtdC8INCw0LrRgtC40LLQvdGL0Lkg0LrQu9Cw0YHRgSDRgdGB0YvQu9C60LUg0YLQtdC60YPRidC10Lkg0YHRgtGA0LDQvdC40YbRi1xuXG5cdFx0fVxuXHRcdGlmKHNjcm9sbFRvcD49dG9wUGFnZTMpey8v0L/RgNC4INC/0YDQvtC60YDRg9GC0LrQtSDQvNC10L3Rj9C10Lwg0YbQstC10YIgaGVhZGVyINC4IGZvb3RlclxuXHRcdFx0aGVhZGVyLmNzcygnYmFja2dyb3VuZCcsJyM0QUI3QzcnKTtcblx0XHRcdGhlYWRlckxvZ28uYXR0cignc3JjJywnaW1hZ2UvbG9nb3ZlY3Rvci5wbmcnKTtcblx0XHRcdGhlYWRCdXR0b24ucmVtb3ZlQ2xhc3MoJ2NvbG9yX2JsdWUnKTtcblx0XHRcdGhlYWRlck5hdi5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpOy8v0YPQtNCw0LvRj9C10Lwg0LDQutGC0LjQstC90YvQuSDQutC70LDRgdGBXG5cdFx0XHRhY3RpdmVMaW5rLmVxKDIpLmFkZENsYXNzKCdhY3RpdmUnKTsvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0LDQutGC0LjQstC90YvQuSDQutC70LDRgdGBINGB0YHRi9C70LrQtSDRgtC10LrRg9GJ0LXQuSDRgdGC0YDQsNC90LjRhtGLXG5cblx0XHR9XG5cdFx0aWYoc2Nyb2xsVG9wPj10b3BQYWdlNCl7Ly/Qv9GA0Lgg0L/RgNC+0LrRgNGD0YLQutC1INC80LXQvdGP0LXQvCDRhtCy0LXRgiBoZWFkZXIg0LggZm9vdGVyXG5cdFx0XHRoZWFkZXIuY3NzKCdiYWNrZ3JvdW5kJywnI2VkYTIyMycpO1xuXHRcdFx0aGVhZGVyTG9nby5hdHRyKCdzcmMnLCdpbWFnZS9sb2dvV2hpdGUucG5nJyk7XG5cdFx0XHRoZWFkQnV0dG9uLmFkZENsYXNzKCdjb2xvcl9ibHVlJyk7XG5cdFx0XHRoZWFkZXJOYXYuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTsvL9GD0LTQsNC70Y/QtdC8INCw0LrRgtC40LLQvdGL0Lkg0LrQu9Cw0YHRgVxuXHRcdFx0YWN0aXZlTGluay5lcSgzKS5hZGRDbGFzcygnYWN0aXZlJyk7Ly8g0LTQvtCx0LDQstC70Y/QtdC8INCw0LrRgtC40LLQvdGL0Lkg0LrQu9Cw0YHRgSDRgdGB0YvQu9C60LUg0YLQtdC60YPRidC10Lkg0YHRgtGA0LDQvdC40YbRi1xuXG5cdFx0fVxuXHRcdGlmKHNjcm9sbFRvcD49dG9wUGFnZTUpey8v0L/RgNC4INC/0YDQvtC60YDRg9GC0LrQtSDQvNC10L3Rj9C10Lwg0YbQstC10YIgaGVhZGVyINC4IGZvb3RlclxuXHRcdFx0aGVhZGVyLmNzcygnYmFja2dyb3VuZCcsJyM0QUI3QzcnKTtcblx0XHRcdGhlYWRlckxvZ28uYXR0cignc3JjJywnaW1hZ2UvbG9nb3ZlY3Rvci5wbmcnKTtcblx0XHRcdGhlYWRCdXR0b24ucmVtb3ZlQ2xhc3MoJ2NvbG9yX2JsdWUnKTtcblx0XHRcdGhlYWRlck5hdi5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpOy8v0YPQtNCw0LvRj9C10Lwg0LDQutGC0LjQstC90YvQuSDQutC70LDRgdGBXG5cdFx0XHRhY3RpdmVMaW5rLmVxKDQpLmFkZENsYXNzKCdhY3RpdmUnKTsvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0LDQutGC0LjQstC90YvQuSDQutC70LDRgdGBINGB0YHRi9C70LrQtSDRgtC10LrRg9GJ0LXQuSDRgdGC0YDQsNC90LjRhtGLXG5cblx0XHR9XG5cblxuXG5cblx0XHQvL9GN0YLQuCDRg9GB0LvQvtCy0LjRjyDRgdGA0LDQsdCw0YLRi9Cy0LDRjtGCINC60L7Qs9C00LAg0L/RgNC+0LrRgNGD0YLQutCwINC+0L/Rg9GB0LrQsNC10YLRgdGPINC00L4g0L3Rg9C20L3QvtCz0L4g0LHQu9C+0LrQsCDQuCDQsdC10YDRg9GC0YzRgdGPINC/0LDRgNCw0LzQtdGC0YDRiyDQuNC3INCR0JQg0Lgg0L/RgNC40LzQtdC90Y/RjtGC0YHRjyDQuiDQvdGD0LbQvdC+0LzRgyDQutGA0YPQttC60YNcblx0XHRpZihzY3JvbGxUb3A+PWJsb2NrQ2xvdWRCZWZvcmUpey8v0L/RgNC4INC/0YDQvtC60YDRg9GC0LrQtSDQtNC10LvQsNC10Lwg0LHQu9C+0LrQuCDQv9GA0L7Qt9GA0LDRh9C90YvQvNC4XG5cdFx0XHRjb25zb2xlLmxvZygn0LLRi9GB0L7RgtCwMTogJytzY3JvbGxUb3ApO1xuXG5cdFx0XHRmb3IoaT0wO2k8Y2xvdWRzLmxlbmd0aDtpKyspe1xuXHRcdFx0XHRjbG91ZHMuZXEoaSkuY3NzKCdvcGFjaXR5JywwKTtcblx0XHRcdH1cblx0XHRcdCQoJy5wYWdlM19kb3RhdGVkTGVmdCcpLmNzcygnb3BhY2l0eScsMCk7XG5cdFx0XHQkKCcucGFnZTNfZG90YXRlZENlbnRlcicpLmNzcygnb3BhY2l0eScsMCk7XG5cdFx0XHQkKCcucGFnZTNfZG90YXRlZFJpZ2h0JykuY3NzKCdvcGFjaXR5JywwKTtcblx0XHRcdFxuXHRcdH1cblxuXHRcdC8v0Y3RgtC4INGD0YHQu9C+0LLQuNGPINGB0YDQsNCx0LDRgtGL0LLQsNGO0YIg0LrQvtCz0LTQsCDQv9GA0L7QutGA0YPRgtC60LAg0L7Qv9GD0YHQutCw0LXRgtGB0Y8g0LTQviDQvdGD0LbQvdC+0LPQviDQsdC70L7QutCwINC4INCx0LXRgNGD0YLRjNGB0Y8g0L/QsNGA0LDQvNC10YLRgNGLINC40Lcg0JHQlCDQuCDQv9GA0LjQvNC10L3Rj9GO0YLRgdGPINC6INC90YPQttC90L7QvNGDINC60YDRg9C20LrRg1xuXHRcdGlmKHNjcm9sbFRvcD49YmxvY2tDbG91ZCl7XG5cdFx0XHRjb25zb2xlLmxvZygn0LLRi9GB0L7RgtCwMjogJytzY3JvbGxUb3ApO1xuXG5cdFx0XHRmb3IoaT0wO2k8Y2xvdWRzLmxlbmd0aDtpKyspe1xuXHRcdFx0XHRjbG91ZHMuZXEoaSkuY3NzKCdvcGFjaXR5JywxKTtcblx0XHRcdH1cblx0XHRcdCQoJy5wYWdlM19kb3RhdGVkTGVmdCcpLmNzcygnb3BhY2l0eScsMSk7XG5cdFx0XHQkKCcucGFnZTNfZG90YXRlZENlbnRlcicpLmNzcygnb3BhY2l0eScsMSk7XG5cdFx0XHQkKCcucGFnZTNfZG90YXRlZFJpZ2h0JykuY3NzKCdvcGFjaXR5JywxKTtcblxuXHRcdCB9XG5cblx0fSk7XG5cblxuXG5cbiIsIlxyXG5cclxudmFyIGFycm93UmlnaHQ9JCgnLnBhZ2UzX2Fycm93LXJpZ2h0JyksLy/RgdGC0YDQtdC70L7Rh9C60LAg0LLQv9GA0LDQstC+XHJcbiAgICBhcnJvd0xlZnQ9JCgnLnBhZ2UzX2Fycm93LWxlZnQnKSwvL9GB0YLRgNC10LvQvtGH0LrQsCDQstC70LXQstC+XHJcblxyXG4gICAgYWxsQ2xvdWQ9JCgnLnBhZ2UzX2NvbnRlbnRfYWJzb2x1dGVCbG9jaycpLC8v0LLRgdC1INC+0LHQu9Cw0LrQsFxyXG4gICAgY29udGVpbmVyPSQoJy5wYWdlM19jb250ZW50JyksLy/QutC+0L3RgtC10LnQvdC10YAg0LPQtNC1INC70LXQttCw0YIg0LLRgdC1INC+0LHQu9Cw0LrQsFxyXG4gICAgdD0xOy8v0L/QvtGA0Y/QtNC60L7QstGL0Lkg0L3QvtC80LXRgFxyXG5cclxuICAgICAgICBhcnJvd1JpZ2h0Lm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ9C90L7QvNC10YA6ICcrdCk7XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIGNlbnRlcj10KzEsXHJcbiAgICAgICAgICAgICAgICByaWdodD10KzI7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjZW50ZXI6ICcrY2VudGVyKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JpZ2h0OiAnK3JpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgICBpZih0PT1hbGxDbG91ZC5sZW5ndGgpIHt0PTA7IH0vL9C+0LHQvdGD0LvRj9C10Lwg0LrQvtC10YTQuNGG0LjQtdC90YIgdCDQutC+0LPQtNCwINCy0YvRiNC1INC60L7Quy3QstCwINC+0LHQu9Cw0LrQvtCyXHJcbiAgICAgICAgICAgIGlmKGNlbnRlcj09YWxsQ2xvdWQubGVuZ3RoKSB7Y2VudGVyPTA7IGNvbnNvbGUubG9nKCdjZW50ZXIg0L/RgNC+0L3QuNC30LjQuzogJyt0KX0vL9GA0LXQtNCw0LrRgtC40YDRg9C10Lwg0LrQvtC10YTQuNGG0LjQtdC90YIg0YfRgtC+0LEg0L3QtSDQsdGL0Lsg0LLRi9GI0LUg0YfQtdC8INC60L7Qu9GC0YfQtdGB0YLQstC+INC+0LHQu9Cw0YfQutC+0LJcclxuICAgICAgICAgICAgaWYoY2VudGVyPT1hbGxDbG91ZC5sZW5ndGgrMSkge2NlbnRlcj0xOyBjb25zb2xlLmxvZygnY2VudGVyINC/0YDQvtC90LjQt9C40Ls6ICcrdCl9XHJcbiAgICAgICAgICAgICBpZihyaWdodD09YWxsQ2xvdWQubGVuZ3RoKSB7cmlnaHQ9MDtjb25zb2xlLmxvZygncmlnaHQg0L/RgNC+0L3QuNC30LjQuzogJyt0KSB9XHJcbiAgICAgICAgICAgIGlmKHJpZ2h0PT1hbGxDbG91ZC5sZW5ndGgrMSkge3JpZ2h0PTE7Y29uc29sZS5sb2coJ3JpZ2h0INC/0YDQvtC90LjQt9C40Ls6ICcrdCkgfVxyXG4gICAgICAgICAgICBpZihyaWdodD09YWxsQ2xvdWQubGVuZ3RoKzIpIHtyaWdodD0yO2NvbnNvbGUubG9nKCdyaWdodCDQv9GA0L7QvdC40LfQuNC7OiAnK3QpIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgY29udGVpbmVyLmZpbmQoJy5jbG91ZF9hYnNvbHV0ZV9sZWZ0JykucmVtb3ZlQ2xhc3MoJ2Nsb3VkX2Fic29sdXRlX2xlZnQnKTsvL9GD0LTQsNC70Y/QtdC8INC60LvQsNGB0YHRiyDRh9GC0L7QsSDQvtCx0LvQsNC60L7QvCDQv9C+0LzQtdC90Y/Qu9C+INC80LXRgdGC0L5cclxuICAgICAgICAgICAgY29udGVpbmVyLmZpbmQoJy5jbG91ZF9hYnNvbHV0ZV9jZW50ZXInKS5yZW1vdmVDbGFzcygnY2xvdWRfYWJzb2x1dGVfY2VudGVyJyk7XHJcbiAgICAgICAgICAgIGNvbnRlaW5lci5maW5kKCcuY2xvdWRfYWJzb2x1dGVfcmlnaHQnKS5yZW1vdmVDbGFzcygnY2xvdWRfYWJzb2x1dGVfcmlnaHQnKTtcclxuXHJcbiAgICAgICAgICAgIGFsbENsb3VkLmVxKHQpLmFkZENsYXNzKCdjbG91ZF9hYnNvbHV0ZV9sZWZ0Jyk7Ly/QtNC+0LHQsNCy0LvRj9C10Lwg0LrQu9Cw0YHRgSDQutC+0YLQvtGA0YvQuSDQv9C10YDQtdC80LXRgdGC0LjRgiDQvtCx0LvQsNC60L4g0LIg0L3Rg9C20L3QvtC1INC90L7QstC+0LUg0L/QvtC70L7QttC10L3QuNC1XHJcbiAgICAgICAgICAgIGFsbENsb3VkLmVxKGNlbnRlcikuYWRkQ2xhc3MoJ2Nsb3VkX2Fic29sdXRlX2NlbnRlcicpO1xyXG4gICAgICAgICAgICBhbGxDbG91ZC5lcShyaWdodCkuYWRkQ2xhc3MoJ2Nsb3VkX2Fic29sdXRlX3JpZ2h0Jyk7XHJcblxyXG5cclxuICAgICAgICAgICAgIHQrKztcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGFycm93TGVmdC5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICAgICBpZih0PDApIHt0PWFsbENsb3VkLmxlbmd0aC0xOyB9XHJcbiAgICAgICAgICAgIHZhciBjZW50ZXI9dC0xLFxyXG4gICAgICAgICAgICAgICAgbGVmdD10LTI7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYoY2VudGVyPT0tMSkge2NlbnRlcj1hbGxDbG91ZC5sZW5ndGgtMTsgY29uc29sZS5sb2coJ2NlbnRlciDQv9GA0L7QvdC40LfQuNC7OiAnK2NlbnRlcil9XHJcbiAgICAgICAgICAgIGlmKGNlbnRlcj09LTIpIHtjZW50ZXI9YWxsQ2xvdWQubGVuZ3RoLTI7IGNvbnNvbGUubG9nKCdjZW50ZXIg0L/RgNC+0L3QuNC30LjQuzogJytjZW50ZXIpfVxyXG5cclxuICAgICAgICAgICAgaWYobGVmdD09LTEpIHtsZWZ0PWFsbENsb3VkLmxlbmd0aC0xO2NvbnNvbGUubG9nKCdsZWZ0INC/0YDQvtC90LjQt9C40Ls6ICcrbGVmdCkgfVxyXG4gICAgICAgICAgICBpZihsZWZ0PT0tMikge2xlZnQ9YWxsQ2xvdWQubGVuZ3RoLTI7Y29uc29sZS5sb2coJ2xlZnQg0L/RgNC+0L3QuNC30LjQuzogJytsZWZ0KSB9XHJcbiAgICAgICAgICAgIGlmKGxlZnQ9PS0zKSB7bGVmdD1hbGxDbG91ZC5sZW5ndGgtMztjb25zb2xlLmxvZygnbGVmdCDQv9GA0L7QvdC40LfQuNC7OiAnK2xlZnQpIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0OiAnK3QpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2VudGVyOiAnK2NlbnRlcik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsZWZ0OiAnK2xlZnQpO1xyXG5cclxuICAgICAgICAgICAgY29udGVpbmVyLmZpbmQoJy5jbG91ZF9hYnNvbHV0ZV9sZWZ0JykucmVtb3ZlQ2xhc3MoJ2Nsb3VkX2Fic29sdXRlX2xlZnQnKTsvL9GD0LTQsNC70Y/QtdC8INC60LvQsNGB0YHRiyDRh9GC0L7QsSDQvtCx0LvQsNC60L7QvCDQv9C+0LzQtdC90Y/Qu9C+INC80LXRgdGC0L5cclxuICAgICAgICAgICAgY29udGVpbmVyLmZpbmQoJy5jbG91ZF9hYnNvbHV0ZV9jZW50ZXInKS5yZW1vdmVDbGFzcygnY2xvdWRfYWJzb2x1dGVfY2VudGVyJyk7XHJcbiAgICAgICAgICAgIGNvbnRlaW5lci5maW5kKCcuY2xvdWRfYWJzb2x1dGVfcmlnaHQnKS5yZW1vdmVDbGFzcygnY2xvdWRfYWJzb2x1dGVfcmlnaHQnKTtcclxuXHJcbiAgICAgICAgICAgIGFsbENsb3VkLmVxKHQpLmFkZENsYXNzKCdjbG91ZF9hYnNvbHV0ZV9yaWdodCcpOy8v0LTQvtCx0LDQstC70Y/QtdC8INC60LvQsNGB0YEg0LrQvtGC0L7RgNGL0Lkg0L/QtdGA0LXQvNC10YHRgtC40YIg0L7QsdC70LDQutC+INCyINC90YPQttC90L7QtSDQvdC+0LLQvtC1INC/0L7Qu9C+0LbQtdC90LjQtVxyXG4gICAgICAgICAgICBhbGxDbG91ZC5lcShjZW50ZXIpLmFkZENsYXNzKCdjbG91ZF9hYnNvbHV0ZV9jZW50ZXInKTtcclxuICAgICAgICAgICAgYWxsQ2xvdWQuZXEobGVmdCkuYWRkQ2xhc3MoJ2Nsb3VkX2Fic29sdXRlX2xlZnQnKTtcclxuXHJcbiAgICAgICAgICAgIHQtLTtcclxuXHJcblxyXG4gICAgICAgIH0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
