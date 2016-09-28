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

    var page1Height=$('#1').offset().top,//положение первой страницы
        page2Height=$('#2').offset().top,//положение второй страницы от верха
        page3Height=$('#3').offset().top,
        page4Height=$('#4').offset().top,
        page5Height=$('#5').offset().top,
        lastScrollTop = 0,
        windowHeight=$(window).height();//высота экрана при которой будет работать перелистывание

    if(windowHeight>660){
        $(window).scroll(function(){
            var st = $(this).scrollTop();

            if (st > lastScrollTop){//вниз прокрутка
               // console.log('вниз');
                if(lastScrollTop==page1Height){
                    $("html, body").animate({scrollTop: page2Height}, 1000);
                    console.log('сработал вниз на страницу 2');
                }
                if(lastScrollTop==page2Height){
                    $("html, body").animate({scrollTop: page3Height}, 1000);
                    console.log('сработал вниз на страницу 3');
                }
                if(lastScrollTop==page3Height){
                    $("html, body").animate({scrollTop: page4Height}, 1000);
                    console.log('сработал вниз на страницу 4');
                }
                if(lastScrollTop==page4Height){
                    $("html, body").animate({scrollTop: page5Height}, 1000);
                    console.log('сработал вниз на страницу 5');
                }

            } else {//вверх
               // console.log('вверх');
                if(lastScrollTop==page5Height){
                    $("html, body").animate({scrollTop: page4Height}, 1000);
                    console.log('сработал вверх на страницу 4');
                }
                if(lastScrollTop==page4Height){
                    $("html, body").animate({scrollTop: page3Height}, 1000);
                    console.log('сработал вверх на страницу 3');
                }
                if(lastScrollTop==page3Height){
                    $("html, body").animate({scrollTop: page2Height}, 1000);
                    console.log('сработал вверх на страницу 2');
                }
                if(lastScrollTop==page2Height){
                    $("html, body").animate({scrollTop: page1Height}, 1000);
                    console.log('сработал вверх на страницу 1');
                }
            }
            lastScrollTop = st;
        });
    } else {
        console.log('маленький экран');
    }





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


			for(i=0;i<clouds.length;i++){
				clouds.eq(i).css('opacity',0);
			}
			$('.page3_dotatedLeft').css('opacity',0);
			$('.page3_dotatedCenter').css('opacity',0);
			$('.page3_dotatedRight').css('opacity',0);
			
		}

		//эти условия срабатывают когда прокрутка опускается до нужного блока и беруться параметры из БД и применяются к нужному кружку
		if(scrollTop>=blockCloud){
			

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmtfc2xpZGUuanMiLCJtYWluLmpzIiwibW92ZV9hcnJvdy5qcyIsInNjcm9sbFBhZ2UuanMiLCJzaG93X2Nsb3VkLmpzIiwic2xpZGVyX2Nsb3Vkcy5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImNvbnNvbGUiLCJsb2ciLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpZCIsInRoaXMiLCJhdHRyIiwidG9wIiwib2Zmc2V0IiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIml0ZW1NZW51IiwidGV4dE1lbnUiLCJmaW5kIiwiJHRoaXMiLCJwYWdlNCIsInBhcmVudCIsImFjdGl2QmxvY2tUZXh0IiwiYWN0aXZCbG9ja1RpdGxlIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImJpZ0Fycm93IiwiYXJyb3dCbG9jayIsIm1hcmdpbkJvdHRvbSIsIndpZHRoIiwib3BhY2l0eSIsImhlaWdodCIsInNldFRpbWVvdXQiLCJzbWFsbEFycm93Iiwic2V0SW50ZXJ2YWwiLCJwYWdlMUhlaWdodCIsInBhZ2UySGVpZ2h0IiwicGFnZTNIZWlnaHQiLCJwYWdlNEhlaWdodCIsInBhZ2U1SGVpZ2h0IiwibGFzdFNjcm9sbFRvcCIsIndpbmRvd0hlaWdodCIsIndpbmRvdyIsInNjcm9sbCIsInN0IiwiYmxvY2tDbG91ZCIsImJsb2NrQ2xvdWRCZWZvcmUiLCJjbG91ZHMiLCJmb290ZXIiLCJoZWFkZXIiLCJoZWFkZXJMb2dvIiwiaGVhZEJ1dHRvbiIsImhlaWdodEhlYWRlciIsImFjdGl2ZUxpbmsiLCJoZWFkZXJOYXYiLCJ0b3BQYWdlMiIsInRvcFBhZ2UzIiwidG9wUGFnZTQiLCJ0b3BQYWdlNSIsImNzcyIsImVxIiwiaSIsImxlbmd0aCIsImFycm93UmlnaHQiLCJhcnJvd0xlZnQiLCJhbGxDbG91ZCIsImNvbnRlaW5lciIsInQiLCJjZW50ZXIiLCJyaWdodCIsImxlZnQiXSwibWFwcGluZ3MiOiJBQUFBQSxFQUFBQyxVQUFBQyxNQUFB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RCxHQUNBL0QsUUFBQUMsSUFBQSxXQUFBK0QsR0FDQWhFLFFBQUFDLElBQUEsU0FBQWlFLEdBRUFKLFVBQUFoRCxLQUFBLHdCQUFBTSxZQUFBLHVCQUNBMEMsVUFBQWhELEtBQUEsMEJBQUFNLFlBQUEseUJBQ0EwQyxVQUFBaEQsS0FBQSx5QkFBQU0sWUFBQSx3QkFFQXlDLFNBQUFMLEdBQUFPLEdBQUExQyxTQUFBLHdCQUNBd0MsU0FBQUwsR0FBQVEsR0FBQTNDLFNBQUEseUJBQ0F3QyxTQUFBTCxHQUFBVSxHQUFBN0MsU0FBQSx1QkFFQTBDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICAgICBjb25zb2xlLmxvZygn0L/QvtC00LrQu9GO0YfQtdC9IGxpbmtfc2xpZGUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJChcIi5oZWFkZXJfbmF2XCIpLm9uKFwiY2xpY2tcIixcImFcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIC8v0L7RgtC80LXQvdGP0LXQvCDRgdGC0LDQvdC00LDRgNGC0L3Rg9GOINC+0LHRgNCw0LHQvtGC0LrRgyDQvdCw0LbQsNGC0LjRjyDQv9C+INGB0YHRi9C70LrQtVxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAvL9C30LDQsdC40YDQsNC10Lwg0LjQtNC10L3RgtC40YTQuNC60LDRgtC+0YAg0LHQvtC60LAg0YEg0LDRgtGA0LjQsdGD0YLQsCBocmVmXHJcbiAgICAgICAgICAgIHZhciBpZCAgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKSxcclxuICAgICAgICAgICAgLy/Rg9C30L3QsNC10Lwg0LLRi9GB0L7RgtGDINC+0YIg0L3QsNGH0LDQu9CwINGB0YLRgNCw0L3QuNGG0Ysg0LTQviDQsdC70L7QutCwINC90LAg0LrQvtGC0L7RgNGL0Lkg0YHRgdGL0LvQsNC10YLRgdGPINGP0LrQvtGA0YxcclxuICAgICAgICAgICAgICAgIHRvcCA9ICQoaWQpLm9mZnNldCgpLnRvcDtcclxuICAgICAgICAgICAgLy/QsNC90LjQvNC40YDRg9C10Lwg0L/QtdGA0LXRhdC+0LQg0L3QsCDRgNCw0YHRgdGC0L7Rj9C90LjQtSAtIHRvcCDQt9CwIDE1MDAg0LzRgVxyXG4gICAgICAgICAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6IHRvcH0sIDEwMDApO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICAkKFwiLmpzX2xpbmtfcGFnZTJcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgLy/QvtGC0LzQtdC90Y/QtdC8INGB0YLQsNC90LTQsNGA0YLQvdGD0Y4g0L7QsdGA0LDQsdC+0YLQutGDINC90LDQttCw0YLQuNGPINC/0L4g0YHRgdGL0LvQutC1XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIC8v0LfQsNCx0LjRgNCw0LXQvCDQuNC00LXQvdGC0LjRhNC40LrQsNGC0L7RgCDQsdC+0LrQsCDRgSDQsNGC0YDQuNCx0YPRgtCwIGhyZWZcclxuICAgICAgICAgICAgdmFyIGlkICA9ICQodGhpcykuYXR0cignaHJlZicpLFxyXG4gICAgICAgICAgICAvL9GD0LfQvdCw0LXQvCDQstGL0YHQvtGC0YMg0L7RgiDQvdCw0YfQsNC70LAg0YHRgtGA0LDQvdC40YbRiyDQtNC+INCx0LvQvtC60LAg0L3QsCDQutC+0YLQvtGA0YvQuSDRgdGB0YvQu9Cw0LXRgtGB0Y8g0Y/QutC+0YDRjFxyXG4gICAgICAgICAgICAgICAgdG9wID0gJChpZCkub2Zmc2V0KCkudG9wO1xyXG4gICAgICAgICAgICAvL9Cw0L3QuNC80LjRgNGD0LXQvCDQv9C10YDQtdGF0L7QtCDQvdCwINGA0LDRgdGB0YLQvtGP0L3QuNC1IC0gdG9wINC30LAgMTUwMCDQvNGBXHJcbiAgICAgICAgICAgICQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe3Njcm9sbFRvcDogdG9wfSwgMTAwMCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9KTtcclxuIiwiICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ9C/0L7QtNC60LvRjtGH0LXQvSDQvNC10L3RjiDQv9C10YDQtdC70LjRgdGC0YvQstCw0LXRgiAnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGRlc2N0b3AgNCDQv9GA0Lgg0L3QsNC20LDRgtC40Lgg0L3QsCDQvNC10L3RjiDQv9C+0Y/QstC70Y/QtdGC0YHRjyDRgtC10LrRgdGCXHJcbiAgICB2YXIgaXRlbU1lbnU9JCgnLnBhZ2U0X21lbnUtaXRlbScpLC8v0L/Rg9C90LrRgiDQvNC10L3RjlxyXG4gICAgICAgIHRleHRNZW51PWl0ZW1NZW51LmZpbmQoJy5wYWdlNF9tZW51LXRleHQnKTsvL9GC0LXQutGB0YIg0LrQvtGC0L7RgNGL0LnQtNC+0LvQttC10L0g0L/QvtGP0LLQuNGC0YzRgdGPXHJcblxyXG4gICAgaXRlbU1lbnUub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIHBhZ2U0PSR0aGlzLnBhcmVudCgnLmNvbnRlbnQtZGVza3RvcF9wYWdlNCcpLC8v0L3QsNGF0L7QtNC40Lwg0LHQu9C+0Log0YHRgtGA0LDQvdC40YbRi1xyXG4gICAgICAgICAgICBhY3RpdkJsb2NrVGV4dD1wYWdlNC5maW5kKCcucGFnZTRfbWVudS10ZXh0X2FjdGl2JyksLy/QvdCw0YXQvtC00LjQvCDRgdGD0YnQtdGB0YLQstGD0Y7RidC40Lkg0LDQutGC0LjQstC90YvQuSDQutC70LDRgSDRgyDRgtC10LrRgdGC0LBcclxuICAgICAgICAgICAgYWN0aXZCbG9ja1RpdGxlPXBhZ2U0LmZpbmQoJy5wYWdlNF9tZW51LXRpdGxlX2FjdGl2Jyk7Ly/QvdCw0YXQvtC00LjQvCDRgdGD0YnQtdGB0YLQstGD0Y7RidC40Lkg0LDQutGC0LjQstC90YvQuSDQutC70LDRgSDRgyDRgtC40YLRg9C70LBcclxuXHJcbiAgICAgICAgICAgIGFjdGl2QmxvY2tUaXRsZS5yZW1vdmVDbGFzcygncGFnZTRfbWVudS10aXRsZV9hY3RpdicpOy8vINGD0LTQsNC70Y/QtdC8INGDINGC0LjRgtGD0LvQsCDRgdGD0YnQtdGB0YLQstGD0Y7RidC40Lkg0LDQutGC0LjQstC90YvQuSDQutC70LDRgdGBXHJcbiAgICAgICAgICAgIGFjdGl2QmxvY2tUZXh0LnJlbW92ZUNsYXNzKCdwYWdlNF9tZW51LXRleHRfYWN0aXYnKTsvLyDRg9C00LDQu9GP0LXQvCDRgyDRgtC10LrRgdGC0LAg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQuNC5INCw0LrRgtC40LLQvdGL0Lkg0LrQu9Cw0YHRgVxyXG4gICAgICAgICR0aGlzLmZpbmQoJy5wYWdlNF9tZW51LXRleHQnKS5hZGRDbGFzcygncGFnZTRfbWVudS10ZXh0X2FjdGl2Jyk7Ly8g0LTQvtCx0LDQstC70Y/QtdC8INGC0LXQutGB0YLRgyDQsNCy0YLQuNC60LLQvdGL0Lkg0LrQu9Cw0YHRgSDRjdC70LXQvNC10L3RgtGDINC90LAg0LrQvtGC0L7RgNGL0Lkg0L3QsNC20LDQu9C4XHJcbiAgICAgICAgJHRoaXMuZmluZCgnLnBhZ2U0X21lbnUtdGl0bGUnKS5hZGRDbGFzcygncGFnZTRfbWVudS10aXRsZV9hY3RpdicpOy8vINC00L7QsdCw0LLQu9GP0LXQvCDRgtC40YLRg9C70YMg0LDQstGC0LjQutCy0L3Ri9C5INC60LvQsNGB0YEg0Y3Qu9C10LzQtdC90YLRgyDQvdCwINC60L7RgtC+0YDRi9C5INC90LDQttCw0LvQuFxyXG5cclxuICAgIH0pOyIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zb2xlLmxvZygnY29ubmVjdCBtb3ZlIGFycm93Jyk7XHJcbiAgICB2YXIgYXJyb3dCbG9jaz0gJCgnLmRlc2t0b3AxX2xlYXJuLW1vcmVfX2Fycm93Jyk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGJpZ0Fycm93ICgpe1xyXG5cclxuICAgICAgICBhcnJvd0Jsb2NrLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiOHB4XCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjIycHhcIixcclxuICAgICAgICAgICAgb3BhY2l0eToxLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICczNHB4J1xyXG4gICAgICAgIH0sODAwKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHNtYWxsQXJyb3coKTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzbWFsbEFycm93KCl7XHJcblxyXG4gICAgICAgIGFycm93QmxvY2suYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMCxcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTVweFwiLFxyXG4gICAgICAgICAgICBvcGFjaXR5OjAuNSxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMjhweCdcclxuICAgICAgICB9LDEwMDApO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgc2V0SW50ZXJ2YWwoYmlnQXJyb3csMjIwMCk7XHJcblxyXG59KTsiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBwYWdlMUhlaWdodD0kKCcjMScpLm9mZnNldCgpLnRvcCwvL9C/0L7Qu9C+0LbQtdC90LjQtSDQv9C10YDQstC+0Lkg0YHRgtGA0LDQvdC40YbRi1xyXG4gICAgICAgIHBhZ2UySGVpZ2h0PSQoJyMyJykub2Zmc2V0KCkudG9wLC8v0L/QvtC70L7QttC10L3QuNC1INCy0YLQvtGA0L7QuSDRgdGC0YDQsNC90LjRhtGLINC+0YIg0LLQtdGA0YXQsFxyXG4gICAgICAgIHBhZ2UzSGVpZ2h0PSQoJyMzJykub2Zmc2V0KCkudG9wLFxyXG4gICAgICAgIHBhZ2U0SGVpZ2h0PSQoJyM0Jykub2Zmc2V0KCkudG9wLFxyXG4gICAgICAgIHBhZ2U1SGVpZ2h0PSQoJyM1Jykub2Zmc2V0KCkudG9wLFxyXG4gICAgICAgIGxhc3RTY3JvbGxUb3AgPSAwLFxyXG4gICAgICAgIHdpbmRvd0hlaWdodD0kKHdpbmRvdykuaGVpZ2h0KCk7Ly/QstGL0YHQvtGC0LAg0Y3QutGA0LDQvdCwINC/0YDQuCDQutC+0YLQvtGA0L7QuSDQsdGD0LTQtdGCINGA0LDQsdC+0YLQsNGC0Ywg0L/QtdGA0LXQu9C40YHRgtGL0LLQsNC90LjQtVxyXG5cclxuICAgIGlmKHdpbmRvd0hlaWdodD42NjApe1xyXG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyIHN0ID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdCA+IGxhc3RTY3JvbGxUb3Apey8v0LLQvdC40Lcg0L/RgNC+0LrRgNGD0YLQutCwXHJcbiAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfQstC90LjQtycpO1xyXG4gICAgICAgICAgICAgICAgaWYobGFzdFNjcm9sbFRvcD09cGFnZTFIZWlnaHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe3Njcm9sbFRvcDogcGFnZTJIZWlnaHR9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn0YHRgNCw0LHQvtGC0LDQuyDQstC90LjQtyDQvdCwINGB0YLRgNCw0L3QuNGG0YMgMicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYobGFzdFNjcm9sbFRvcD09cGFnZTJIZWlnaHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe3Njcm9sbFRvcDogcGFnZTNIZWlnaHR9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn0YHRgNCw0LHQvtGC0LDQuyDQstC90LjQtyDQvdCwINGB0YLRgNCw0L3QuNGG0YMgMycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYobGFzdFNjcm9sbFRvcD09cGFnZTNIZWlnaHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe3Njcm9sbFRvcDogcGFnZTRIZWlnaHR9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn0YHRgNCw0LHQvtGC0LDQuyDQstC90LjQtyDQvdCwINGB0YLRgNCw0L3QuNGG0YMgNCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYobGFzdFNjcm9sbFRvcD09cGFnZTRIZWlnaHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe3Njcm9sbFRvcDogcGFnZTVIZWlnaHR9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn0YHRgNCw0LHQvtGC0LDQuyDQstC90LjQtyDQvdCwINGB0YLRgNCw0L3QuNGG0YMgNScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHsvL9Cy0LLQtdGA0YVcclxuICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ9Cy0LLQtdGA0YUnKTtcclxuICAgICAgICAgICAgICAgIGlmKGxhc3RTY3JvbGxUb3A9PXBhZ2U1SGVpZ2h0KXtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtzY3JvbGxUb3A6IHBhZ2U0SGVpZ2h0fSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ9GB0YDQsNCx0L7RgtCw0Lsg0LLQstC10YDRhSDQvdCwINGB0YLRgNCw0L3QuNGG0YMgNCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYobGFzdFNjcm9sbFRvcD09cGFnZTRIZWlnaHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe3Njcm9sbFRvcDogcGFnZTNIZWlnaHR9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn0YHRgNCw0LHQvtGC0LDQuyDQstCy0LXRgNGFINC90LAg0YHRgtGA0LDQvdC40YbRgyAzJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihsYXN0U2Nyb2xsVG9wPT1wYWdlM0hlaWdodCl7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBwYWdlMkhlaWdodH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfRgdGA0LDQsdC+0YLQsNC7INCy0LLQtdGA0YUg0L3QsCDRgdGC0YDQsNC90LjRhtGDIDInKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGxhc3RTY3JvbGxUb3A9PXBhZ2UySGVpZ2h0KXtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtzY3JvbGxUb3A6IHBhZ2UxSGVpZ2h0fSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ9GB0YDQsNCx0L7RgtCw0Lsg0LLQstC10YDRhSDQvdCwINGB0YLRgNCw0L3QuNGG0YMgMScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxhc3RTY3JvbGxUb3AgPSBzdDtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ9C80LDQu9C10L3RjNC60LjQuSDRjdC60YDQsNC9Jyk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxufSk7IiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblx0Y29uc29sZS5sb2coJ2Nvbm5lY3Qgc2hvdyBjbG91ZGRkZGRkZCcpOy8v0L/QvtC00LrQu9GO0YfQtdC90LjRjyDQvNC10L3RjiDQvdCwINCy0LXRgdGMINGN0LrRgNCw0L0g0LfQtdC70LXQvdC+0LVcbn0pO1xuXG5cdHZhclx0YmxvY2tDbG91ZD0kKCcucGFnZTNfY29udGVudCcpLm9mZnNldCgpLnRvcC0zMDAsLy/Qv9C+0LvQvtC20LXQvdC1INCx0LvQvtC60LAg0L7RgiDQstC10YDRhdC90LXQs9C+INC60YDQsNGPLCAtNTAwINGN0YLQviDRh9GC0L7QsSDQt9Cw0YDQsNC90LXQtSDQsdGL0LvQsCDRgtC+0YfQutCwINC/0L7Rj9Cy0LvQtdC90LjRjyDQsdC70L7QutCwXG5cdFx0YmxvY2tDbG91ZEJlZm9yZT0kKCcucGFnZTNfY29udGVudCcpLm9mZnNldCgpLnRvcC0xMjAwLFxuXHRcdGNsb3Vkcz0kKCcucGFnZTNfY29udGVudF9hYnNvbHV0ZUJsb2NrJyksLy/QvdCw0YXQvtC00LjQvCDQstGB0LUg0L7QsdC70LDQutCwXG5cblxuXHRcdC8v0L/QtdGA0LXQvNC10L3QvdGL0LUg0LTQu9GPINC/0LXRgNC10LzQtdC90Ysg0YTQvtC90LAg0YXRjdC00LXRgFxuXHRcdGZvb3Rlcj0kKCcuZm9vdGVyJyksLy/QsdC70L7QuiDRhNGD0YLQtdGA0LBcblx0XHRoZWFkZXI9JCgnLmhlYWRlcicpLC8v0LHQu9C+0Log0YXQtdC00LXRgFxuXHRcdGhlYWRlckxvZ289JCgnLmhlYWRlcl9sb2dvJyksLy/QutCw0YDRgtC40L3QutCwINC70L7Qs9C+0YLQuNC/0LBcblx0XHRoZWFkQnV0dG9uPSQoJy5oZWFkZXJfX2NvaW5zX2J1dHRvbicpLC8v0LrQvdC+0L/QutCwINC60YPQv9C40YLRjCDQsiDRiNCw0L/QutC1XG5cdFx0aGVpZ2h0SGVhZGVyPWhlYWRlci5oZWlnaHQoKSxcblxuXHRcdGFjdGl2ZUxpbms9JCgnLmhlYWRlcl9uYXYtdGV4dCcpLC8v0LLRi9Cx0LjRgNCw0LXQvCDRgdGB0YvQu9C60Lgg0L3QsCDRjdC60YDQsNC90Yss0YfRgtC+0LEg0YHQtNC10LvQsNGC0Ywg0LDQutGC0LjQstC90YvQvFxuXHRcdGhlYWRlck5hdj0kKCcuaGVhZGVyX25hdicpLC8v0LHQu9C+0Log0LPQtNC1INGB0YHRi9C70LrQuCDQvdCwINGB0YLRgNCw0L3QuNGG0YtcblxuXHRcdHRvcFBhZ2UyPSQoJyMyJykub2Zmc2V0KCkudG9wLWhlaWdodEhlYWRlciwvL9C90LDRh9Cw0LvQviDQstC10YDRhdCwINCy0YLQvtGA0L7QuSDRgdGC0YDQsNC90LjRhtGLINC80LjQvdGD0YEg0LLRi9GB0L7RgtCwINGF0LXQtNC10YDQsFxuXHRcdHRvcFBhZ2UzPSQoJyMzJykub2Zmc2V0KCkudG9wLWhlaWdodEhlYWRlcixcblx0XHR0b3BQYWdlND0kKCcjNCcpLm9mZnNldCgpLnRvcC1oZWlnaHRIZWFkZXIsXG5cdFx0dG9wUGFnZTU9JCgnIzUnKS5vZmZzZXQoKS50b3AtaGVpZ2h0SGVhZGVyO1xuXG5cblxuXG5cdCQoZG9jdW1lbnQpLm9uKCdzY3JvbGwnLGZ1bmN0aW9uKCl7Ly/RhNGD0L3QutGG0LjRjyDQtNC70Y8g0YHQvNC10L3RiyDRhtCy0LXRgtCwINGF0LXQtNC10YAg0L/RgNC4INGB0LrRgNC+0LvQu9C1INGB0YLRgNCw0L3QuNGGXG5cdFx0dmFyIHNjcm9sbFRvcD0kKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cblxuXHRcdC8v0Y3RgtC4INGD0YHQu9C+0LLQuNGPINGB0YDQsNCx0LDRgtGL0LLQsNGO0YIg0LrQvtCz0LTQsCDQv9GA0L7QutGA0YPRgtC60LAg0L7Qv9GD0YHQutCw0LXRgtGB0Y8g0LTQviDQvdGD0LbQvdC+0LPQviDQsdC70L7QutCwINC4INCx0LXRgNGD0YLRjNGB0Y8g0L/QsNGA0LDQvNC10YLRgNGLINC40Lcg0JHQlCDQuCDQv9GA0LjQvNC10L3Rj9GO0YLRgdGPINC6INC90YPQttC90L7QvNGDINC60YDRg9C20LrRg1xuXHRcdGlmKHNjcm9sbFRvcDx0b3BQYWdlMil7Ly/Qv9GA0Lgg0L/RgNC+0LrRgNGD0YLQutC1INC80LXQvdGP0LXQvCDRhtCy0LXRgiBoZWFkZXIg0LggZm9vdGVyXG5cdFx0XHRoZWFkZXIuY3NzKCdiYWNrZ3JvdW5kJywnIzRBQjdDNycpO1xuXHRcdFx0aGVhZGVyTG9nby5hdHRyKCdzcmMnLCdpbWFnZS9sb2dvdmVjdG9yLnBuZycpO1xuXHRcdFx0aGVhZEJ1dHRvbi5yZW1vdmVDbGFzcygnY29sb3JfYmx1ZScpO1xuXHRcdFx0aGVhZGVyTmF2LmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7Ly/Rg9C00LDQu9GP0LXQvCDQsNC60YLQuNCy0L3Ri9C5INC60LvQsNGB0YFcblx0XHRcdGFjdGl2ZUxpbmsuZXEoMCkuYWRkQ2xhc3MoJ2FjdGl2ZScpOy8vINC00L7QsdCw0LLQu9GP0LXQvCDQsNC60YLQuNCy0L3Ri9C5INC60LvQsNGB0YEg0YHRgdGL0LvQutC1INGC0LXQutGD0YnQtdC5INGB0YLRgNCw0L3QuNGG0Ytcblx0XHR9XG5cdFx0aWYoc2Nyb2xsVG9wPj10b3BQYWdlMil7Ly/Qv9GA0Lgg0L/RgNC+0LrRgNGD0YLQutC1INC80LXQvdGP0LXQvCDRhtCy0LXRgiBoZWFkZXIg0LggZm9vdGVyXG5cdFx0XHRoZWFkZXIuY3NzKCdiYWNrZ3JvdW5kJywnI2VkYTIyMycpO1xuXHRcdFx0aGVhZGVyTG9nby5hdHRyKCdzcmMnLCdpbWFnZS9sb2dvV2hpdGUucG5nJyk7XG5cdFx0XHRoZWFkQnV0dG9uLmFkZENsYXNzKCdjb2xvcl9ibHVlJyk7XG5cdFx0XHRoZWFkZXJOYXYuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTsvL9GD0LTQsNC70Y/QtdC8INCw0LrRgtC40LLQvdGL0Lkg0LrQu9Cw0YHRgVxuXHRcdFx0YWN0aXZlTGluay5lcSgxKS5hZGRDbGFzcygnYWN0aXZlJyk7Ly8g0LTQvtCx0LDQstC70Y/QtdC8INCw0LrRgtC40LLQvdGL0Lkg0LrQu9Cw0YHRgSDRgdGB0YvQu9C60LUg0YLQtdC60YPRidC10Lkg0YHRgtGA0LDQvdC40YbRi1xuXG5cdFx0fVxuXHRcdGlmKHNjcm9sbFRvcD49dG9wUGFnZTMpey8v0L/RgNC4INC/0YDQvtC60YDRg9GC0LrQtSDQvNC10L3Rj9C10Lwg0YbQstC10YIgaGVhZGVyINC4IGZvb3RlclxuXHRcdFx0aGVhZGVyLmNzcygnYmFja2dyb3VuZCcsJyM0QUI3QzcnKTtcblx0XHRcdGhlYWRlckxvZ28uYXR0cignc3JjJywnaW1hZ2UvbG9nb3ZlY3Rvci5wbmcnKTtcblx0XHRcdGhlYWRCdXR0b24ucmVtb3ZlQ2xhc3MoJ2NvbG9yX2JsdWUnKTtcblx0XHRcdGhlYWRlck5hdi5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpOy8v0YPQtNCw0LvRj9C10Lwg0LDQutGC0LjQstC90YvQuSDQutC70LDRgdGBXG5cdFx0XHRhY3RpdmVMaW5rLmVxKDIpLmFkZENsYXNzKCdhY3RpdmUnKTsvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0LDQutGC0LjQstC90YvQuSDQutC70LDRgdGBINGB0YHRi9C70LrQtSDRgtC10LrRg9GJ0LXQuSDRgdGC0YDQsNC90LjRhtGLXG5cblx0XHR9XG5cdFx0aWYoc2Nyb2xsVG9wPj10b3BQYWdlNCl7Ly/Qv9GA0Lgg0L/RgNC+0LrRgNGD0YLQutC1INC80LXQvdGP0LXQvCDRhtCy0LXRgiBoZWFkZXIg0LggZm9vdGVyXG5cdFx0XHRoZWFkZXIuY3NzKCdiYWNrZ3JvdW5kJywnI2VkYTIyMycpO1xuXHRcdFx0aGVhZGVyTG9nby5hdHRyKCdzcmMnLCdpbWFnZS9sb2dvV2hpdGUucG5nJyk7XG5cdFx0XHRoZWFkQnV0dG9uLmFkZENsYXNzKCdjb2xvcl9ibHVlJyk7XG5cdFx0XHRoZWFkZXJOYXYuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTsvL9GD0LTQsNC70Y/QtdC8INCw0LrRgtC40LLQvdGL0Lkg0LrQu9Cw0YHRgVxuXHRcdFx0YWN0aXZlTGluay5lcSgzKS5hZGRDbGFzcygnYWN0aXZlJyk7Ly8g0LTQvtCx0LDQstC70Y/QtdC8INCw0LrRgtC40LLQvdGL0Lkg0LrQu9Cw0YHRgSDRgdGB0YvQu9C60LUg0YLQtdC60YPRidC10Lkg0YHRgtGA0LDQvdC40YbRi1xuXG5cdFx0fVxuXHRcdGlmKHNjcm9sbFRvcD49dG9wUGFnZTUpey8v0L/RgNC4INC/0YDQvtC60YDRg9GC0LrQtSDQvNC10L3Rj9C10Lwg0YbQstC10YIgaGVhZGVyINC4IGZvb3RlclxuXHRcdFx0aGVhZGVyLmNzcygnYmFja2dyb3VuZCcsJyM0QUI3QzcnKTtcblx0XHRcdGhlYWRlckxvZ28uYXR0cignc3JjJywnaW1hZ2UvbG9nb3ZlY3Rvci5wbmcnKTtcblx0XHRcdGhlYWRCdXR0b24ucmVtb3ZlQ2xhc3MoJ2NvbG9yX2JsdWUnKTtcblx0XHRcdGhlYWRlck5hdi5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpOy8v0YPQtNCw0LvRj9C10Lwg0LDQutGC0LjQstC90YvQuSDQutC70LDRgdGBXG5cdFx0XHRhY3RpdmVMaW5rLmVxKDQpLmFkZENsYXNzKCdhY3RpdmUnKTsvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0LDQutGC0LjQstC90YvQuSDQutC70LDRgdGBINGB0YHRi9C70LrQtSDRgtC10LrRg9GJ0LXQuSDRgdGC0YDQsNC90LjRhtGLXG5cblx0XHR9XG5cblxuXG5cblx0XHQvL9GN0YLQuCDRg9GB0LvQvtCy0LjRjyDRgdGA0LDQsdCw0YLRi9Cy0LDRjtGCINC60L7Qs9C00LAg0L/RgNC+0LrRgNGD0YLQutCwINC+0L/Rg9GB0LrQsNC10YLRgdGPINC00L4g0L3Rg9C20L3QvtCz0L4g0LHQu9C+0LrQsCDQuCDQsdC10YDRg9GC0YzRgdGPINC/0LDRgNCw0LzQtdGC0YDRiyDQuNC3INCR0JQg0Lgg0L/RgNC40LzQtdC90Y/RjtGC0YHRjyDQuiDQvdGD0LbQvdC+0LzRgyDQutGA0YPQttC60YNcblx0XHRpZihzY3JvbGxUb3A+PWJsb2NrQ2xvdWRCZWZvcmUpey8v0L/RgNC4INC/0YDQvtC60YDRg9GC0LrQtSDQtNC10LvQsNC10Lwg0LHQu9C+0LrQuCDQv9GA0L7Qt9GA0LDRh9C90YvQvNC4XG5cblxuXHRcdFx0Zm9yKGk9MDtpPGNsb3Vkcy5sZW5ndGg7aSsrKXtcblx0XHRcdFx0Y2xvdWRzLmVxKGkpLmNzcygnb3BhY2l0eScsMCk7XG5cdFx0XHR9XG5cdFx0XHQkKCcucGFnZTNfZG90YXRlZExlZnQnKS5jc3MoJ29wYWNpdHknLDApO1xuXHRcdFx0JCgnLnBhZ2UzX2RvdGF0ZWRDZW50ZXInKS5jc3MoJ29wYWNpdHknLDApO1xuXHRcdFx0JCgnLnBhZ2UzX2RvdGF0ZWRSaWdodCcpLmNzcygnb3BhY2l0eScsMCk7XG5cdFx0XHRcblx0XHR9XG5cblx0XHQvL9GN0YLQuCDRg9GB0LvQvtCy0LjRjyDRgdGA0LDQsdCw0YLRi9Cy0LDRjtGCINC60L7Qs9C00LAg0L/RgNC+0LrRgNGD0YLQutCwINC+0L/Rg9GB0LrQsNC10YLRgdGPINC00L4g0L3Rg9C20L3QvtCz0L4g0LHQu9C+0LrQsCDQuCDQsdC10YDRg9GC0YzRgdGPINC/0LDRgNCw0LzQtdGC0YDRiyDQuNC3INCR0JQg0Lgg0L/RgNC40LzQtdC90Y/RjtGC0YHRjyDQuiDQvdGD0LbQvdC+0LzRgyDQutGA0YPQttC60YNcblx0XHRpZihzY3JvbGxUb3A+PWJsb2NrQ2xvdWQpe1xuXHRcdFx0XG5cblx0XHRcdGZvcihpPTA7aTxjbG91ZHMubGVuZ3RoO2krKyl7XG5cdFx0XHRcdGNsb3Vkcy5lcShpKS5jc3MoJ29wYWNpdHknLDEpO1xuXHRcdFx0fVxuXHRcdFx0JCgnLnBhZ2UzX2RvdGF0ZWRMZWZ0JykuY3NzKCdvcGFjaXR5JywxKTtcblx0XHRcdCQoJy5wYWdlM19kb3RhdGVkQ2VudGVyJykuY3NzKCdvcGFjaXR5JywxKTtcblx0XHRcdCQoJy5wYWdlM19kb3RhdGVkUmlnaHQnKS5jc3MoJ29wYWNpdHknLDEpO1xuXG5cdFx0IH1cblxuXHR9KTtcblxuXG5cblxuIiwiXHJcblxyXG52YXIgYXJyb3dSaWdodD0kKCcucGFnZTNfYXJyb3ctcmlnaHQnKSwvL9GB0YLRgNC10LvQvtGH0LrQsCDQstC/0YDQsNCy0L5cclxuICAgIGFycm93TGVmdD0kKCcucGFnZTNfYXJyb3ctbGVmdCcpLC8v0YHRgtGA0LXQu9C+0YfQutCwINCy0LvQtdCy0L5cclxuXHJcbiAgICBhbGxDbG91ZD0kKCcucGFnZTNfY29udGVudF9hYnNvbHV0ZUJsb2NrJyksLy/QstGB0LUg0L7QsdC70LDQutCwXHJcbiAgICBjb250ZWluZXI9JCgnLnBhZ2UzX2NvbnRlbnQnKSwvL9C60L7QvdGC0LXQudC90LXRgCDQs9C00LUg0LvQtdC20LDRgiDQstGB0LUg0L7QsdC70LDQutCwXHJcbiAgICB0PTE7Ly/Qv9C+0YDRj9C00LrQvtCy0YvQuSDQvdC+0LzQtdGAXHJcblxyXG4gICAgICAgIGFycm93UmlnaHQub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn0L3QvtC80LXRgDogJyt0KTtcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgY2VudGVyPXQrMSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0PXQrMjtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NlbnRlcjogJytjZW50ZXIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmlnaHQ6ICcrcmlnaHQpO1xyXG5cclxuICAgICAgICAgICAgIGlmKHQ9PWFsbENsb3VkLmxlbmd0aCkge3Q9MDsgfS8v0L7QsdC90YPQu9GP0LXQvCDQutC+0LXRhNC40YbQuNC10L3RgiB0INC60L7Qs9C00LAg0LLRi9GI0LUg0LrQvtC7LdCy0LAg0L7QsdC70LDQutC+0LJcclxuICAgICAgICAgICAgaWYoY2VudGVyPT1hbGxDbG91ZC5sZW5ndGgpIHtjZW50ZXI9MDsgY29uc29sZS5sb2coJ2NlbnRlciDQv9GA0L7QvdC40LfQuNC7OiAnK3QpfS8v0YDQtdC00LDQutGC0LjRgNGD0LXQvCDQutC+0LXRhNC40YbQuNC10L3RgiDRh9GC0L7QsSDQvdC1INCx0YvQuyDQstGL0YjQtSDRh9C10Lwg0LrQvtC70YLRh9C10YHRgtCy0L4g0L7QsdC70LDRh9C60L7QslxyXG4gICAgICAgICAgICBpZihjZW50ZXI9PWFsbENsb3VkLmxlbmd0aCsxKSB7Y2VudGVyPTE7IGNvbnNvbGUubG9nKCdjZW50ZXIg0L/RgNC+0L3QuNC30LjQuzogJyt0KX1cclxuICAgICAgICAgICAgIGlmKHJpZ2h0PT1hbGxDbG91ZC5sZW5ndGgpIHtyaWdodD0wO2NvbnNvbGUubG9nKCdyaWdodCDQv9GA0L7QvdC40LfQuNC7OiAnK3QpIH1cclxuICAgICAgICAgICAgaWYocmlnaHQ9PWFsbENsb3VkLmxlbmd0aCsxKSB7cmlnaHQ9MTtjb25zb2xlLmxvZygncmlnaHQg0L/RgNC+0L3QuNC30LjQuzogJyt0KSB9XHJcbiAgICAgICAgICAgIGlmKHJpZ2h0PT1hbGxDbG91ZC5sZW5ndGgrMikge3JpZ2h0PTI7Y29uc29sZS5sb2coJ3JpZ2h0INC/0YDQvtC90LjQt9C40Ls6ICcrdCkgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBjb250ZWluZXIuZmluZCgnLmNsb3VkX2Fic29sdXRlX2xlZnQnKS5yZW1vdmVDbGFzcygnY2xvdWRfYWJzb2x1dGVfbGVmdCcpOy8v0YPQtNCw0LvRj9C10Lwg0LrQu9Cw0YHRgdGLINGH0YLQvtCxINC+0LHQu9Cw0LrQvtC8INC/0L7QvNC10L3Rj9C70L4g0LzQtdGB0YLQvlxyXG4gICAgICAgICAgICBjb250ZWluZXIuZmluZCgnLmNsb3VkX2Fic29sdXRlX2NlbnRlcicpLnJlbW92ZUNsYXNzKCdjbG91ZF9hYnNvbHV0ZV9jZW50ZXInKTtcclxuICAgICAgICAgICAgY29udGVpbmVyLmZpbmQoJy5jbG91ZF9hYnNvbHV0ZV9yaWdodCcpLnJlbW92ZUNsYXNzKCdjbG91ZF9hYnNvbHV0ZV9yaWdodCcpO1xyXG5cclxuICAgICAgICAgICAgYWxsQ2xvdWQuZXEodCkuYWRkQ2xhc3MoJ2Nsb3VkX2Fic29sdXRlX2xlZnQnKTsvL9C00L7QsdCw0LLQu9GP0LXQvCDQutC70LDRgdGBINC60L7RgtC+0YDRi9C5INC/0LXRgNC10LzQtdGB0YLQuNGCINC+0LHQu9Cw0LrQviDQsiDQvdGD0LbQvdC+0LUg0L3QvtCy0L7QtSDQv9C+0LvQvtC20LXQvdC40LVcclxuICAgICAgICAgICAgYWxsQ2xvdWQuZXEoY2VudGVyKS5hZGRDbGFzcygnY2xvdWRfYWJzb2x1dGVfY2VudGVyJyk7XHJcbiAgICAgICAgICAgIGFsbENsb3VkLmVxKHJpZ2h0KS5hZGRDbGFzcygnY2xvdWRfYWJzb2x1dGVfcmlnaHQnKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgdCsrO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYXJyb3dMZWZ0Lm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgICAgIGlmKHQ8MCkge3Q9YWxsQ2xvdWQubGVuZ3RoLTE7IH1cclxuICAgICAgICAgICAgdmFyIGNlbnRlcj10LTEsXHJcbiAgICAgICAgICAgICAgICBsZWZ0PXQtMjtcclxuXHJcblxyXG4gICAgICAgICAgICBpZihjZW50ZXI9PS0xKSB7Y2VudGVyPWFsbENsb3VkLmxlbmd0aC0xOyBjb25zb2xlLmxvZygnY2VudGVyINC/0YDQvtC90LjQt9C40Ls6ICcrY2VudGVyKX1cclxuICAgICAgICAgICAgaWYoY2VudGVyPT0tMikge2NlbnRlcj1hbGxDbG91ZC5sZW5ndGgtMjsgY29uc29sZS5sb2coJ2NlbnRlciDQv9GA0L7QvdC40LfQuNC7OiAnK2NlbnRlcil9XHJcblxyXG4gICAgICAgICAgICBpZihsZWZ0PT0tMSkge2xlZnQ9YWxsQ2xvdWQubGVuZ3RoLTE7Y29uc29sZS5sb2coJ2xlZnQg0L/RgNC+0L3QuNC30LjQuzogJytsZWZ0KSB9XHJcbiAgICAgICAgICAgIGlmKGxlZnQ9PS0yKSB7bGVmdD1hbGxDbG91ZC5sZW5ndGgtMjtjb25zb2xlLmxvZygnbGVmdCDQv9GA0L7QvdC40LfQuNC7OiAnK2xlZnQpIH1cclxuICAgICAgICAgICAgaWYobGVmdD09LTMpIHtsZWZ0PWFsbENsb3VkLmxlbmd0aC0zO2NvbnNvbGUubG9nKCdsZWZ0INC/0YDQvtC90LjQt9C40Ls6ICcrbGVmdCkgfVxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Q6ICcrdCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjZW50ZXI6ICcrY2VudGVyKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xlZnQ6ICcrbGVmdCk7XHJcblxyXG4gICAgICAgICAgICBjb250ZWluZXIuZmluZCgnLmNsb3VkX2Fic29sdXRlX2xlZnQnKS5yZW1vdmVDbGFzcygnY2xvdWRfYWJzb2x1dGVfbGVmdCcpOy8v0YPQtNCw0LvRj9C10Lwg0LrQu9Cw0YHRgdGLINGH0YLQvtCxINC+0LHQu9Cw0LrQvtC8INC/0L7QvNC10L3Rj9C70L4g0LzQtdGB0YLQvlxyXG4gICAgICAgICAgICBjb250ZWluZXIuZmluZCgnLmNsb3VkX2Fic29sdXRlX2NlbnRlcicpLnJlbW92ZUNsYXNzKCdjbG91ZF9hYnNvbHV0ZV9jZW50ZXInKTtcclxuICAgICAgICAgICAgY29udGVpbmVyLmZpbmQoJy5jbG91ZF9hYnNvbHV0ZV9yaWdodCcpLnJlbW92ZUNsYXNzKCdjbG91ZF9hYnNvbHV0ZV9yaWdodCcpO1xyXG5cclxuICAgICAgICAgICAgYWxsQ2xvdWQuZXEodCkuYWRkQ2xhc3MoJ2Nsb3VkX2Fic29sdXRlX3JpZ2h0Jyk7Ly/QtNC+0LHQsNCy0LvRj9C10Lwg0LrQu9Cw0YHRgSDQutC+0YLQvtGA0YvQuSDQv9C10YDQtdC80LXRgdGC0LjRgiDQvtCx0LvQsNC60L4g0LIg0L3Rg9C20L3QvtC1INC90L7QstC+0LUg0L/QvtC70L7QttC10L3QuNC1XHJcbiAgICAgICAgICAgIGFsbENsb3VkLmVxKGNlbnRlcikuYWRkQ2xhc3MoJ2Nsb3VkX2Fic29sdXRlX2NlbnRlcicpO1xyXG4gICAgICAgICAgICBhbGxDbG91ZC5lcShsZWZ0KS5hZGRDbGFzcygnY2xvdWRfYWJzb2x1dGVfbGVmdCcpO1xyXG5cclxuICAgICAgICAgICAgdC0tO1xyXG5cclxuXHJcbiAgICAgICAgfSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
