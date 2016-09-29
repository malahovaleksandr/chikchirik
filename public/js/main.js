    $(document).ready(function(){
        console.log('подключен link_slide');
    });

    // $(document).ready(function(){
    //     $(".header_nav").on("click","a", function (event) {
    //         //отменяем стандартную обработку нажатия по ссылке
    //         event.preventDefault();
    //         //забираем идентификатор бока с атрибута href
    //         var id  = $(this).attr('href'),
    //         //узнаем высоту от начала страницы до блока на который ссылается якорь
    //             top = $(id).offset().top;
    //         //анимируем переход на расстояние - top за 1500 мс
    //         $('body,html').animate({scrollTop: top}, 1000);
    //
    //     });
    //     $(".js_link_page2").on("click", function (event) {
    //         //отменяем стандартную обработку нажатия по ссылке
    //         event.preventDefault();
    //         //забираем идентификатор бока с атрибута href
    //         var id  = $(this).attr('href'),
    //         //узнаем высоту от начала страницы до блока на который ссылается якорь
    //             top = $(id).offset().top;
    //         //анимируем переход на расстояние - top за 1500 мс
    //         $('body,html').animate({scrollTop: top}, 1000);
    //
    //     });
    //
    //
    // });

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
console.log(st);
            if (st > lastScrollTop){//вниз прокрутка
               // console.log('вниз');
                if(lastScrollTop==page1Height){
                    console.log('scroll to page2');
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

		if($(window).width()<800 && $(window).width()>600){//для планшета вертикально чтоб было виднооблака раньше
			console.log('tablet');
			blockCloud=$('.page3_content').offset().top-700;
			blockCloudBefore=$('.page3_content').offset().top-1600;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmtfc2xpZGUuanMiLCJtYWluLmpzIiwibW92ZV9hcnJvdy5qcyIsInNjcm9sbFBhZ2UuanMiLCJzaG93X2Nsb3VkLmpzIiwic2xpZGVyX2Nsb3Vkcy5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImNvbnNvbGUiLCJsb2ciLCJpdGVtTWVudSIsInRleHRNZW51IiwiZmluZCIsIm9uIiwiJHRoaXMiLCJ0aGlzIiwicGFnZTQiLCJwYXJlbnQiLCJhY3RpdkJsb2NrVGV4dCIsImFjdGl2QmxvY2tUaXRsZSIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJiaWdBcnJvdyIsImFycm93QmxvY2siLCJhbmltYXRlIiwibWFyZ2luQm90dG9tIiwid2lkdGgiLCJvcGFjaXR5IiwiaGVpZ2h0Iiwic2V0VGltZW91dCIsInNtYWxsQXJyb3ciLCJzZXRJbnRlcnZhbCIsInBhZ2UxSGVpZ2h0Iiwib2Zmc2V0IiwidG9wIiwicGFnZTJIZWlnaHQiLCJwYWdlM0hlaWdodCIsInBhZ2U0SGVpZ2h0IiwicGFnZTVIZWlnaHQiLCJsYXN0U2Nyb2xsVG9wIiwid2luZG93SGVpZ2h0Iiwid2luZG93Iiwic2Nyb2xsIiwic3QiLCJzY3JvbGxUb3AiLCJibG9ja0Nsb3VkIiwiYmxvY2tDbG91ZEJlZm9yZSIsImNsb3VkcyIsImZvb3RlciIsImhlYWRlciIsImhlYWRlckxvZ28iLCJoZWFkQnV0dG9uIiwiaGVpZ2h0SGVhZGVyIiwiYWN0aXZlTGluayIsImhlYWRlck5hdiIsInRvcFBhZ2UyIiwidG9wUGFnZTMiLCJ0b3BQYWdlNCIsInRvcFBhZ2U1IiwiY3NzIiwiYXR0ciIsImVxIiwiaSIsImxlbmd0aCIsImFycm93UmlnaHQiLCJhcnJvd0xlZnQiLCJhbGxDbG91ZCIsImNvbnRlaW5lciIsInQiLCJjZW50ZXIiLCJyaWdodCIsImxlZnQiXSwibWFwcGluZ3MiOiJBQUFBQSxFQUFBQyxVQUFBQyxNQUFBLFdBQ0FDLFFBQUFDLElBQUEsMEJDREFKLEVBQUFDLFVBQUFDLE1BQUEsV0FDQUMsUUFBQUMsSUFBQSxrQ0FJQSxJQUFBQyxVQUFBTCxFQUFBLG9CQUNBTSxTQUFBRCxTQUFBRSxLQUFBLG1CQUVBRixVQUFBRyxHQUFBLFFBQUEsV0FDQSxHQUFBQyxHQUFBVCxFQUFBVSxNQUNBQyxFQUFBRixFQUFBRyxPQUFBLDBCQUNBQyxFQUFBRixFQUFBSixLQUFBLDBCQUNBTyxFQUFBSCxFQUFBSixLQUFBLDBCQUVBTyxHQUFBQyxZQUFBLDBCQUNBRixFQUFBRSxZQUFBLHlCQUNBTixFQUFBRixLQUFBLG9CQUFBUyxTQUFBLHlCQUNBUCxFQUFBRixLQUFBLHFCQUFBUyxTQUFBLDRCQ2pCQWhCLEVBQUFDLFVBQUFDLE1BQUEsV0FLQSxRQUFBZSxLQUVBQyxFQUFBQyxTQUNBQyxhQUFBLE1BQ0FDLE1BQUEsT0FDQUMsUUFBQSxFQUNBQyxPQUFBLFFBQ0EsS0FDQUMsV0FBQSxXQUNBQyxLQUNBLEtBR0EsUUFBQUEsS0FFQVAsRUFBQUMsU0FDQUMsYUFBQSxFQUNBQyxNQUFBLE9BQ0FDLFFBQUEsR0FDQUMsT0FBQSxRQUNBLEtBeEJBcEIsUUFBQUMsSUFBQSxxQkFDQSxJQUFBYyxHQUFBbEIsRUFBQSw4QkE0QkEwQixhQUFBVCxFQUFBLFFDOUJBakIsRUFBQUMsVUFBQUMsTUFBQSxXQUVBLEdBQUF5QixHQUFBM0IsRUFBQSxNQUFBNEIsU0FBQUMsSUFDQUMsRUFBQTlCLEVBQUEsTUFBQTRCLFNBQUFDLElBQ0FFLEVBQUEvQixFQUFBLE1BQUE0QixTQUFBQyxJQUNBRyxFQUFBaEMsRUFBQSxNQUFBNEIsU0FBQUMsSUFDQUksRUFBQWpDLEVBQUEsTUFBQTRCLFNBQUFDLElBQ0FLLEVBQUEsRUFDQUMsRUFBQW5DLEVBQUFvQyxRQUFBYixRQUVBWSxHQUFBLElBQ0FuQyxFQUFBb0MsUUFBQUMsT0FBQSxXQUNBLEdBQUFDLEdBQUF0QyxFQUFBVSxNQUFBNkIsV0FDQXBDLFNBQUFDLElBQUFrQyxHQUNBQSxFQUFBSixHQUVBQSxHQUFBUCxJQUNBeEIsUUFBQUMsSUFBQSxtQkFDQUosRUFBQSxjQUFBbUIsU0FBQW9CLFVBQUFULEdBQUEsS0FDQTNCLFFBQUFDLElBQUEsZ0NBRUE4QixHQUFBSixJQUNBOUIsRUFBQSxjQUFBbUIsU0FBQW9CLFVBQUFSLEdBQUEsS0FDQTVCLFFBQUFDLElBQUEsZ0NBRUE4QixHQUFBSCxJQUNBL0IsRUFBQSxjQUFBbUIsU0FBQW9CLFVBQUFQLEdBQUEsS0FDQTdCLFFBQUFDLElBQUEsZ0NBRUE4QixHQUFBRixJQUNBaEMsRUFBQSxjQUFBbUIsU0FBQW9CLFVBQUFOLEdBQUEsS0FDQTlCLFFBQUFDLElBQUEsa0NBS0E4QixHQUFBRCxJQUNBakMsRUFBQSxjQUFBbUIsU0FBQW9CLFVBQUFQLEdBQUEsS0FDQTdCLFFBQUFDLElBQUEsaUNBRUE4QixHQUFBRixJQUNBaEMsRUFBQSxjQUFBbUIsU0FBQW9CLFVBQUFSLEdBQUEsS0FDQTVCLFFBQUFDLElBQUEsaUNBRUE4QixHQUFBSCxJQUNBL0IsRUFBQSxjQUFBbUIsU0FBQW9CLFVBQUFULEdBQUEsS0FDQTNCLFFBQUFDLElBQUEsaUNBRUE4QixHQUFBSixJQUNBOUIsRUFBQSxjQUFBbUIsU0FBQW9CLFVBQUFaLEdBQUEsS0FDQXhCLFFBQUFDLElBQUEsa0NBR0E4QixFQUFBSSxJQUdBbkMsUUFBQUMsSUFBQSxxQkN4REFKLEVBQUFDLFVBQUFDLE1BQUEsV0FDQUMsUUFBQUMsSUFBQSw2QkFHQSxJQUFBb0MsWUFBQXhDLEVBQUEsa0JBQUE0QixTQUFBQyxJQUFBLElBQ0FZLGlCQUFBekMsRUFBQSxrQkFBQTRCLFNBQUFDLElBQUEsS0FDQWEsT0FBQTFDLEVBQUEsZ0NBSUEyQyxPQUFBM0MsRUFBQSxXQUNBNEMsT0FBQTVDLEVBQUEsV0FDQTZDLFdBQUE3QyxFQUFBLGdCQUNBOEMsV0FBQTlDLEVBQUEseUJBQ0ErQyxhQUFBSCxPQUFBckIsU0FFQXlCLFdBQUFoRCxFQUFBLG9CQUNBaUQsVUFBQWpELEVBQUEsZUFFQWtELFNBQUFsRCxFQUFBLE1BQUE0QixTQUFBQyxJQUFBa0IsYUFDQUksU0FBQW5ELEVBQUEsTUFBQTRCLFNBQUFDLElBQUFrQixhQUNBSyxTQUFBcEQsRUFBQSxNQUFBNEIsU0FBQUMsSUFBQWtCLGFBQ0FNLFNBQUFyRCxFQUFBLE1BQUE0QixTQUFBQyxJQUFBa0IsWUFLQS9DLEdBQUFDLFVBQUFPLEdBQUEsU0FBQSxXQUNBLEdBQUErQixHQUFBdkMsRUFBQW9DLFFBQUFHLFdBZ0RBLElBNUNBQSxFQUFBVyxXQUNBTixPQUFBVSxJQUFBLGFBQUEsV0FDQVQsV0FBQVUsS0FBQSxNQUFBLHdCQUNBVCxXQUFBL0IsWUFBQSxjQUNBa0MsVUFBQTFDLEtBQUEsV0FBQVEsWUFBQSxVQUNBaUMsV0FBQVEsR0FBQSxHQUFBeEMsU0FBQSxXQUVBdUIsR0FBQVcsV0FDQU4sT0FBQVUsSUFBQSxhQUFBLFdBQ0FULFdBQUFVLEtBQUEsTUFBQSx1QkFDQVQsV0FBQTlCLFNBQUEsY0FDQWlDLFVBQUExQyxLQUFBLFdBQUFRLFlBQUEsVUFDQWlDLFdBQUFRLEdBQUEsR0FBQXhDLFNBQUEsV0FHQXVCLEdBQUFZLFdBQ0FQLE9BQUFVLElBQUEsYUFBQSxXQUNBVCxXQUFBVSxLQUFBLE1BQUEsd0JBQ0FULFdBQUEvQixZQUFBLGNBQ0FrQyxVQUFBMUMsS0FBQSxXQUFBUSxZQUFBLFVBQ0FpQyxXQUFBUSxHQUFBLEdBQUF4QyxTQUFBLFdBR0F1QixHQUFBYSxXQUNBUixPQUFBVSxJQUFBLGFBQUEsV0FDQVQsV0FBQVUsS0FBQSxNQUFBLHVCQUNBVCxXQUFBOUIsU0FBQSxjQUNBaUMsVUFBQTFDLEtBQUEsV0FBQVEsWUFBQSxVQUNBaUMsV0FBQVEsR0FBQSxHQUFBeEMsU0FBQSxXQUdBdUIsR0FBQWMsV0FDQVQsT0FBQVUsSUFBQSxhQUFBLFdBQ0FULFdBQUFVLEtBQUEsTUFBQSx3QkFDQVQsV0FBQS9CLFlBQUEsY0FDQWtDLFVBQUExQyxLQUFBLFdBQUFRLFlBQUEsVUFDQWlDLFdBQUFRLEdBQUEsR0FBQXhDLFNBQUEsV0FRQXVCLEdBQUFFLGlCQUFBLENBR0EsSUFBQWdCLEVBQUEsRUFBQUEsRUFBQWYsT0FBQWdCLE9BQUFELElBQ0FmLE9BQUFjLEdBQUFDLEdBQUFILElBQUEsVUFBQSxFQUVBdEQsR0FBQSxzQkFBQXNELElBQUEsVUFBQSxHQUNBdEQsRUFBQSx3QkFBQXNELElBQUEsVUFBQSxHQUNBdEQsRUFBQSx1QkFBQXNELElBQUEsVUFBQSxHQVdBLEdBUEF0RCxFQUFBb0MsUUFBQWYsUUFBQSxLQUFBckIsRUFBQW9DLFFBQUFmLFFBQUEsTUFDQWxCLFFBQUFDLElBQUEsVUFDQW9DLFdBQUF4QyxFQUFBLGtCQUFBNEIsU0FBQUMsSUFBQSxJQUNBWSxpQkFBQXpDLEVBQUEsa0JBQUE0QixTQUFBQyxJQUFBLE1BSUFVLEdBQUFDLFdBQUEsQ0FHQSxJQUFBaUIsRUFBQSxFQUFBQSxFQUFBZixPQUFBZ0IsT0FBQUQsSUFDQWYsT0FBQWMsR0FBQUMsR0FBQUgsSUFBQSxVQUFBLEVBRUF0RCxHQUFBLHNCQUFBc0QsSUFBQSxVQUFBLEdBQ0F0RCxFQUFBLHdCQUFBc0QsSUFBQSxVQUFBLEdBQ0F0RCxFQUFBLHVCQUFBc0QsSUFBQSxVQUFBLEtDckdBLElBQUFLLFlBQUEzRCxFQUFBLHNCQUNBNEQsVUFBQTVELEVBQUEscUJBRUE2RCxTQUFBN0QsRUFBQSxnQ0FDQThELFVBQUE5RCxFQUFBLGtCQUNBK0QsRUFBQSxDQUVBSixZQUFBbkQsR0FBQSxRQUFBLFdBQ0FMLFFBQUFDLElBQUEsVUFBQTJELEVBR0EsSUFBQUMsR0FBQUQsRUFBQSxFQUNBRSxFQUFBRixFQUFBLENBQ0E1RCxTQUFBQyxJQUFBLFdBQUE0RCxHQUNBN0QsUUFBQUMsSUFBQSxVQUFBNkQsR0FFQUYsR0FBQUYsU0FBQUgsU0FBQUssRUFBQSxHQUNBQyxHQUFBSCxTQUFBSCxTQUFBTSxFQUFBLEVBQUE3RCxRQUFBQyxJQUFBLG9CQUFBMkQsSUFDQUMsR0FBQUgsU0FBQUgsT0FBQSxJQUFBTSxFQUFBLEVBQUE3RCxRQUFBQyxJQUFBLG9CQUFBMkQsSUFDQUUsR0FBQUosU0FBQUgsU0FBQU8sRUFBQSxFQUFBOUQsUUFBQUMsSUFBQSxtQkFBQTJELElBQ0FFLEdBQUFKLFNBQUFILE9BQUEsSUFBQU8sRUFBQSxFQUFBOUQsUUFBQUMsSUFBQSxtQkFBQTJELElBQ0FFLEdBQUFKLFNBQUFILE9BQUEsSUFBQU8sRUFBQSxFQUFBOUQsUUFBQUMsSUFBQSxtQkFBQTJELElBSUFELFVBQUF2RCxLQUFBLHdCQUFBUSxZQUFBLHVCQUNBK0MsVUFBQXZELEtBQUEsMEJBQUFRLFlBQUEseUJBQ0ErQyxVQUFBdkQsS0FBQSx5QkFBQVEsWUFBQSx3QkFFQThDLFNBQUFMLEdBQUFPLEdBQUEvQyxTQUFBLHVCQUNBNkMsU0FBQUwsR0FBQVEsR0FBQWhELFNBQUEseUJBQ0E2QyxTQUFBTCxHQUFBUyxHQUFBakQsU0FBQSx3QkFHQStDLE1BSUFILFVBQUFwRCxHQUFBLFFBQUEsV0FFQXVELEVBQUEsSUFBQUEsRUFBQUYsU0FBQUgsT0FBQSxFQUNBLElBQUFNLEdBQUFELEVBQUEsRUFDQUcsRUFBQUgsRUFBQSxDQUdBQyxLQUFBLElBQUFBLEVBQUFILFNBQUFILE9BQUEsRUFBQXZELFFBQUFDLElBQUEsb0JBQUE0RCxJQUNBQSxJQUFBLElBQUFBLEVBQUFILFNBQUFILE9BQUEsRUFBQXZELFFBQUFDLElBQUEsb0JBQUE0RCxJQUVBRSxJQUFBLElBQUFBLEVBQUFMLFNBQUFILE9BQUEsRUFBQXZELFFBQUFDLElBQUEsa0JBQUE4RCxJQUNBQSxJQUFBLElBQUFBLEVBQUFMLFNBQUFILE9BQUEsRUFBQXZELFFBQUFDLElBQUEsa0JBQUE4RCxJQUNBQSxJQUFBLElBQUFBLEVBQUFMLFNBQUFILE9BQUEsRUFBQXZELFFBQUFDLElBQUEsa0JBQUE4RCxJQUVBL0QsUUFBQUMsSUFBQSxNQUFBMkQsR0FDQTVELFFBQUFDLElBQUEsV0FBQTRELEdBQ0E3RCxRQUFBQyxJQUFBLFNBQUE4RCxHQUVBSixVQUFBdkQsS0FBQSx3QkFBQVEsWUFBQSx1QkFDQStDLFVBQUF2RCxLQUFBLDBCQUFBUSxZQUFBLHlCQUNBK0MsVUFBQXZELEtBQUEseUJBQUFRLFlBQUEsd0JBRUE4QyxTQUFBTCxHQUFBTyxHQUFBL0MsU0FBQSx3QkFDQTZDLFNBQUFMLEdBQUFRLEdBQUFoRCxTQUFBLHlCQUNBNkMsU0FBQUwsR0FBQVUsR0FBQWxELFNBQUEsdUJBRUErQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ9C/0L7QtNC60LvRjtGH0LXQvSBsaW5rX3NsaWRlJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgLy8gICAgICQoXCIuaGVhZGVyX25hdlwiKS5vbihcImNsaWNrXCIsXCJhXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgLy8gICAgICAgICAvL9C+0YLQvNC10L3Rj9C10Lwg0YHRgtCw0L3QtNCw0YDRgtC90YPRjiDQvtCx0YDQsNCx0L7RgtC60YMg0L3QsNC20LDRgtC40Y8g0L/QviDRgdGB0YvQu9C60LVcclxuICAgIC8vICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vICAgICAgICAgLy/Qt9Cw0LHQuNGA0LDQtdC8INC40LTQtdC90YLQuNGE0LjQutCw0YLQvtGAINCx0L7QutCwINGBINCw0YLRgNC40LHRg9GC0LAgaHJlZlxyXG4gICAgLy8gICAgICAgICB2YXIgaWQgID0gJCh0aGlzKS5hdHRyKCdocmVmJyksXHJcbiAgICAvLyAgICAgICAgIC8v0YPQt9C90LDQtdC8INCy0YvRgdC+0YLRgyDQvtGCINC90LDRh9Cw0LvQsCDRgdGC0YDQsNC90LjRhtGLINC00L4g0LHQu9C+0LrQsCDQvdCwINC60L7RgtC+0YDRi9C5INGB0YHRi9C70LDQtdGC0YHRjyDRj9C60L7RgNGMXHJcbiAgICAvLyAgICAgICAgICAgICB0b3AgPSAkKGlkKS5vZmZzZXQoKS50b3A7XHJcbiAgICAvLyAgICAgICAgIC8v0LDQvdC40LzQuNGA0YPQtdC8INC/0LXRgNC10YXQvtC0INC90LAg0YDQsNGB0YHRgtC+0Y/QvdC40LUgLSB0b3Ag0LfQsCAxNTAwINC80YFcclxuICAgIC8vICAgICAgICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiB0b3B9LCAxMDAwKTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyAgICAgJChcIi5qc19saW5rX3BhZ2UyXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAvLyAgICAgICAgIC8v0L7RgtC80LXQvdGP0LXQvCDRgdGC0LDQvdC00LDRgNGC0L3Rg9GOINC+0LHRgNCw0LHQvtGC0LrRgyDQvdCw0LbQsNGC0LjRjyDQv9C+INGB0YHRi9C70LrQtVxyXG4gICAgLy8gICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gICAgICAgICAvL9C30LDQsdC40YDQsNC10Lwg0LjQtNC10L3RgtC40YTQuNC60LDRgtC+0YAg0LHQvtC60LAg0YEg0LDRgtGA0LjQsdGD0YLQsCBocmVmXHJcbiAgICAvLyAgICAgICAgIHZhciBpZCAgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKSxcclxuICAgIC8vICAgICAgICAgLy/Rg9C30L3QsNC10Lwg0LLRi9GB0L7RgtGDINC+0YIg0L3QsNGH0LDQu9CwINGB0YLRgNCw0L3QuNGG0Ysg0LTQviDQsdC70L7QutCwINC90LAg0LrQvtGC0L7RgNGL0Lkg0YHRgdGL0LvQsNC10YLRgdGPINGP0LrQvtGA0YxcclxuICAgIC8vICAgICAgICAgICAgIHRvcCA9ICQoaWQpLm9mZnNldCgpLnRvcDtcclxuICAgIC8vICAgICAgICAgLy/QsNC90LjQvNC40YDRg9C10Lwg0L/QtdGA0LXRhdC+0LQg0L3QsCDRgNCw0YHRgdGC0L7Rj9C90LjQtSAtIHRvcCDQt9CwIDE1MDAg0LzRgVxyXG4gICAgLy8gICAgICAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6IHRvcH0sIDEwMDApO1xyXG4gICAgLy9cclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vXHJcbiAgICAvL1xyXG4gICAgLy8gfSk7XHJcbiIsIiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfQv9C+0LTQutC70Y7Rh9C10L0g0LzQtdC90Y4g0L/QtdGA0LXQu9C40YHRgtGL0LLQsNC10YIgJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBkZXNjdG9wIDQg0L/RgNC4INC90LDQttCw0YLQuNC4INC90LAg0LzQtdC90Y4g0L/QvtGP0LLQu9GP0LXRgtGB0Y8g0YLQtdC60YHRglxyXG4gICAgdmFyIGl0ZW1NZW51PSQoJy5wYWdlNF9tZW51LWl0ZW0nKSwvL9C/0YPQvdC60YIg0LzQtdC90Y5cclxuICAgICAgICB0ZXh0TWVudT1pdGVtTWVudS5maW5kKCcucGFnZTRfbWVudS10ZXh0Jyk7Ly/RgtC10LrRgdGCINC60L7RgtC+0YDRi9C50LTQvtC70LbQtdC9INC/0L7Rj9Cy0LjRgtGM0YHRj1xyXG5cclxuICAgIGl0ZW1NZW51Lm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBwYWdlND0kdGhpcy5wYXJlbnQoJy5jb250ZW50LWRlc2t0b3BfcGFnZTQnKSwvL9C90LDRhdC+0LTQuNC8INCx0LvQvtC6INGB0YLRgNCw0L3QuNGG0YtcclxuICAgICAgICAgICAgYWN0aXZCbG9ja1RleHQ9cGFnZTQuZmluZCgnLnBhZ2U0X21lbnUtdGV4dF9hY3RpdicpLC8v0L3QsNGF0L7QtNC40Lwg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQuNC5INCw0LrRgtC40LLQvdGL0Lkg0LrQu9Cw0YEg0YMg0YLQtdC60YHRgtCwXHJcbiAgICAgICAgICAgIGFjdGl2QmxvY2tUaXRsZT1wYWdlNC5maW5kKCcucGFnZTRfbWVudS10aXRsZV9hY3RpdicpOy8v0L3QsNGF0L7QtNC40Lwg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQuNC5INCw0LrRgtC40LLQvdGL0Lkg0LrQu9Cw0YEg0YMg0YLQuNGC0YPQu9CwXHJcblxyXG4gICAgICAgICAgICBhY3RpdkJsb2NrVGl0bGUucmVtb3ZlQ2xhc3MoJ3BhZ2U0X21lbnUtdGl0bGVfYWN0aXYnKTsvLyDRg9C00LDQu9GP0LXQvCDRgyDRgtC40YLRg9C70LAg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQuNC5INCw0LrRgtC40LLQvdGL0Lkg0LrQu9Cw0YHRgVxyXG4gICAgICAgICAgICBhY3RpdkJsb2NrVGV4dC5yZW1vdmVDbGFzcygncGFnZTRfbWVudS10ZXh0X2FjdGl2Jyk7Ly8g0YPQtNCw0LvRj9C10Lwg0YMg0YLQtdC60YHRgtCwINGB0YPRidC10YHRgtCy0YPRjtGJ0LjQuSDQsNC60YLQuNCy0L3Ri9C5INC60LvQsNGB0YFcclxuICAgICAgICAkdGhpcy5maW5kKCcucGFnZTRfbWVudS10ZXh0JykuYWRkQ2xhc3MoJ3BhZ2U0X21lbnUtdGV4dF9hY3RpdicpOy8vINC00L7QsdCw0LLQu9GP0LXQvCDRgtC10LrRgdGC0YMg0LDQstGC0LjQutCy0L3Ri9C5INC60LvQsNGB0YEg0Y3Qu9C10LzQtdC90YLRgyDQvdCwINC60L7RgtC+0YDRi9C5INC90LDQttCw0LvQuFxyXG4gICAgICAgICR0aGlzLmZpbmQoJy5wYWdlNF9tZW51LXRpdGxlJykuYWRkQ2xhc3MoJ3BhZ2U0X21lbnUtdGl0bGVfYWN0aXYnKTsvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0YLQuNGC0YPQu9GDINCw0LLRgtC40LrQstC90YvQuSDQutC70LDRgdGBINGN0LvQtdC80LXQvdGC0YMg0L3QsCDQutC+0YLQvtGA0YvQuSDQvdCw0LbQsNC70LhcclxuXHJcbiAgICB9KTsiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgY29uc29sZS5sb2coJ2Nvbm5lY3QgbW92ZSBhcnJvdycpO1xyXG4gICAgdmFyIGFycm93QmxvY2s9ICQoJy5kZXNrdG9wMV9sZWFybi1tb3JlX19hcnJvdycpO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBiaWdBcnJvdyAoKXtcclxuXHJcbiAgICAgICAgYXJyb3dCbG9jay5hbmltYXRlKHtcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjhweFwiLFxyXG4gICAgICAgICAgICB3aWR0aDogXCIyMnB4XCIsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6MSxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMzRweCdcclxuICAgICAgICB9LDgwMCk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBzbWFsbEFycm93KCk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcblxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc21hbGxBcnJvdygpe1xyXG5cclxuICAgICAgICBhcnJvd0Jsb2NrLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IDAsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjE1cHhcIixcclxuICAgICAgICAgICAgb3BhY2l0eTowLjUsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzI4cHgnXHJcbiAgICAgICAgfSwxMDAwKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHNldEludGVydmFsKGJpZ0Fycm93LDIyMDApO1xyXG5cclxufSk7IiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgcGFnZTFIZWlnaHQ9JCgnIzEnKS5vZmZzZXQoKS50b3AsLy/Qv9C+0LvQvtC20LXQvdC40LUg0L/QtdGA0LLQvtC5INGB0YLRgNCw0L3QuNGG0YtcclxuICAgICAgICBwYWdlMkhlaWdodD0kKCcjMicpLm9mZnNldCgpLnRvcCwvL9C/0L7Qu9C+0LbQtdC90LjQtSDQstGC0L7RgNC+0Lkg0YHRgtGA0LDQvdC40YbRiyDQvtGCINCy0LXRgNGF0LBcclxuICAgICAgICBwYWdlM0hlaWdodD0kKCcjMycpLm9mZnNldCgpLnRvcCxcclxuICAgICAgICBwYWdlNEhlaWdodD0kKCcjNCcpLm9mZnNldCgpLnRvcCxcclxuICAgICAgICBwYWdlNUhlaWdodD0kKCcjNScpLm9mZnNldCgpLnRvcCxcclxuICAgICAgICBsYXN0U2Nyb2xsVG9wID0gMCxcclxuICAgICAgICB3aW5kb3dIZWlnaHQ9JCh3aW5kb3cpLmhlaWdodCgpOy8v0LLRi9GB0L7RgtCwINGN0LrRgNCw0L3QsCDQv9GA0Lgg0LrQvtGC0L7RgNC+0Lkg0LHRg9C00LXRgiDRgNCw0LHQvtGC0LDRgtGMINC/0LXRgNC10LvQuNGB0YLRi9Cy0LDQvdC40LVcclxuXHJcbiAgICBpZih3aW5kb3dIZWlnaHQ+NjYwKXtcclxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHZhciBzdCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcbmNvbnNvbGUubG9nKHN0KTtcclxuICAgICAgICAgICAgaWYgKHN0ID4gbGFzdFNjcm9sbFRvcCl7Ly/QstC90LjQtyDQv9GA0L7QutGA0YPRgtC60LBcclxuICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ9Cy0L3QuNC3Jyk7XHJcbiAgICAgICAgICAgICAgICBpZihsYXN0U2Nyb2xsVG9wPT1wYWdlMUhlaWdodCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Njcm9sbCB0byBwYWdlMicpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe3Njcm9sbFRvcDogcGFnZTJIZWlnaHR9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn0YHRgNCw0LHQvtGC0LDQuyDQstC90LjQtyDQvdCwINGB0YLRgNCw0L3QuNGG0YMgMicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYobGFzdFNjcm9sbFRvcD09cGFnZTJIZWlnaHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe3Njcm9sbFRvcDogcGFnZTNIZWlnaHR9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn0YHRgNCw0LHQvtGC0LDQuyDQstC90LjQtyDQvdCwINGB0YLRgNCw0L3QuNGG0YMgMycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYobGFzdFNjcm9sbFRvcD09cGFnZTNIZWlnaHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe3Njcm9sbFRvcDogcGFnZTRIZWlnaHR9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn0YHRgNCw0LHQvtGC0LDQuyDQstC90LjQtyDQvdCwINGB0YLRgNCw0L3QuNGG0YMgNCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYobGFzdFNjcm9sbFRvcD09cGFnZTRIZWlnaHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe3Njcm9sbFRvcDogcGFnZTVIZWlnaHR9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn0YHRgNCw0LHQvtGC0LDQuyDQstC90LjQtyDQvdCwINGB0YLRgNCw0L3QuNGG0YMgNScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHsvL9Cy0LLQtdGA0YVcclxuICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ9Cy0LLQtdGA0YUnKTtcclxuICAgICAgICAgICAgICAgIGlmKGxhc3RTY3JvbGxUb3A9PXBhZ2U1SGVpZ2h0KXtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtzY3JvbGxUb3A6IHBhZ2U0SGVpZ2h0fSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ9GB0YDQsNCx0L7RgtCw0Lsg0LLQstC10YDRhSDQvdCwINGB0YLRgNCw0L3QuNGG0YMgNCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYobGFzdFNjcm9sbFRvcD09cGFnZTRIZWlnaHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe3Njcm9sbFRvcDogcGFnZTNIZWlnaHR9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn0YHRgNCw0LHQvtGC0LDQuyDQstCy0LXRgNGFINC90LAg0YHRgtGA0LDQvdC40YbRgyAzJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihsYXN0U2Nyb2xsVG9wPT1wYWdlM0hlaWdodCl7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBwYWdlMkhlaWdodH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfRgdGA0LDQsdC+0YLQsNC7INCy0LLQtdGA0YUg0L3QsCDRgdGC0YDQsNC90LjRhtGDIDInKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGxhc3RTY3JvbGxUb3A9PXBhZ2UySGVpZ2h0KXtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtzY3JvbGxUb3A6IHBhZ2UxSGVpZ2h0fSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ9GB0YDQsNCx0L7RgtCw0Lsg0LLQstC10YDRhSDQvdCwINGB0YLRgNCw0L3QuNGG0YMgMScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxhc3RTY3JvbGxUb3AgPSBzdDsgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZygn0LzQsNC70LXQvdGM0LrQuNC5INGN0LrRgNCw0L0nKTtcclxuICAgIH1cclxuXHJcbn0pOyIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cdGNvbnNvbGUubG9nKCdjb25uZWN0IHNob3cgY2xvdWRkZGRkZGQnKTsvL9C/0L7QtNC60LvRjtGH0LXQvdC40Y8g0LzQtdC90Y4g0L3QsCDQstC10YHRjCDRjdC60YDQsNC9INC30LXQu9C10L3QvtC1XG59KTtcblxuXHR2YXJcdGJsb2NrQ2xvdWQ9JCgnLnBhZ2UzX2NvbnRlbnQnKS5vZmZzZXQoKS50b3AtMzAwLC8v0L/QvtC70L7QttC10L3QtSDQsdC70L7QutCwINC+0YIg0LLQtdGA0YXQvdC10LPQviDQutGA0LDRjywgLTUwMCDRjdGC0L4g0YfRgtC+0LEg0LfQsNGA0LDQvdC10LUg0LHRi9C70LAg0YLQvtGH0LrQsCDQv9C+0Y/QstC70LXQvdC40Y8g0LHQu9C+0LrQsFxuXHRcdGJsb2NrQ2xvdWRCZWZvcmU9JCgnLnBhZ2UzX2NvbnRlbnQnKS5vZmZzZXQoKS50b3AtMTIwMCxcblx0XHRjbG91ZHM9JCgnLnBhZ2UzX2NvbnRlbnRfYWJzb2x1dGVCbG9jaycpLC8v0L3QsNGF0L7QtNC40Lwg0LLRgdC1INC+0LHQu9Cw0LrQsFxuXG5cblx0XHQvL9C/0LXRgNC10LzQtdC90L3Ri9C1INC00LvRjyDQv9C10YDQtdC80LXQvdGLINGE0L7QvdCwINGF0Y3QtNC10YBcblx0XHRmb290ZXI9JCgnLmZvb3RlcicpLC8v0LHQu9C+0Log0YTRg9GC0LXRgNCwXG5cdFx0aGVhZGVyPSQoJy5oZWFkZXInKSwvL9Cx0LvQvtC6INGF0LXQtNC10YBcblx0XHRoZWFkZXJMb2dvPSQoJy5oZWFkZXJfbG9nbycpLC8v0LrQsNGA0YLQuNC90LrQsCDQu9C+0LPQvtGC0LjQv9CwXG5cdFx0aGVhZEJ1dHRvbj0kKCcuaGVhZGVyX19jb2luc19idXR0b24nKSwvL9C60L3QvtC/0LrQsCDQutGD0L/QuNGC0Ywg0LIg0YjQsNC/0LrQtVxuXHRcdGhlaWdodEhlYWRlcj1oZWFkZXIuaGVpZ2h0KCksXG5cblx0XHRhY3RpdmVMaW5rPSQoJy5oZWFkZXJfbmF2LXRleHQnKSwvL9Cy0YvQsdC40YDQsNC10Lwg0YHRgdGL0LvQutC4INC90LAg0Y3QutGA0LDQvdGLLNGH0YLQvtCxINGB0LTQtdC70LDRgtGMINCw0LrRgtC40LLQvdGL0Lxcblx0XHRoZWFkZXJOYXY9JCgnLmhlYWRlcl9uYXYnKSwvL9Cx0LvQvtC6INCz0LTQtSDRgdGB0YvQu9C60Lgg0L3QsCDRgdGC0YDQsNC90LjRhtGLXG5cblx0XHR0b3BQYWdlMj0kKCcjMicpLm9mZnNldCgpLnRvcC1oZWlnaHRIZWFkZXIsLy/QvdCw0YfQsNC70L4g0LLQtdGA0YXQsCDQstGC0L7RgNC+0Lkg0YHRgtGA0LDQvdC40YbRiyDQvNC40L3Rg9GBINCy0YvRgdC+0YLQsCDRhdC10LTQtdGA0LBcblx0XHR0b3BQYWdlMz0kKCcjMycpLm9mZnNldCgpLnRvcC1oZWlnaHRIZWFkZXIsXG5cdFx0dG9wUGFnZTQ9JCgnIzQnKS5vZmZzZXQoKS50b3AtaGVpZ2h0SGVhZGVyLFxuXHRcdHRvcFBhZ2U1PSQoJyM1Jykub2Zmc2V0KCkudG9wLWhlaWdodEhlYWRlcjtcblxuXG5cblxuXHQkKGRvY3VtZW50KS5vbignc2Nyb2xsJyxmdW5jdGlvbigpey8v0YTRg9C90LrRhtC40Y8g0LTQu9GPINGB0LzQtdC90Ysg0YbQstC10YLQsCDRhdC10LTQtdGAINC/0YDQuCDRgdC60YDQvtC70LvQtSDRgdGC0YDQsNC90LjRhlxuXHRcdHZhciBzY3JvbGxUb3A9JCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG5cblx0XHQvL9GN0YLQuCDRg9GB0LvQvtCy0LjRjyDRgdGA0LDQsdCw0YLRi9Cy0LDRjtGCINC60L7Qs9C00LAg0L/RgNC+0LrRgNGD0YLQutCwINC+0L/Rg9GB0LrQsNC10YLRgdGPINC00L4g0L3Rg9C20L3QvtCz0L4g0LHQu9C+0LrQsCDQuCDQsdC10YDRg9GC0YzRgdGPINC/0LDRgNCw0LzQtdGC0YDRiyDQuNC3INCR0JQg0Lgg0L/RgNC40LzQtdC90Y/RjtGC0YHRjyDQuiDQvdGD0LbQvdC+0LzRgyDQutGA0YPQttC60YNcblx0XHRpZihzY3JvbGxUb3A8dG9wUGFnZTIpey8v0L/RgNC4INC/0YDQvtC60YDRg9GC0LrQtSDQvNC10L3Rj9C10Lwg0YbQstC10YIgaGVhZGVyINC4IGZvb3RlclxuXHRcdFx0aGVhZGVyLmNzcygnYmFja2dyb3VuZCcsJyM0QUI3QzcnKTtcblx0XHRcdGhlYWRlckxvZ28uYXR0cignc3JjJywnaW1hZ2UvbG9nb3ZlY3Rvci5wbmcnKTtcblx0XHRcdGhlYWRCdXR0b24ucmVtb3ZlQ2xhc3MoJ2NvbG9yX2JsdWUnKTtcblx0XHRcdGhlYWRlck5hdi5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpOy8v0YPQtNCw0LvRj9C10Lwg0LDQutGC0LjQstC90YvQuSDQutC70LDRgdGBXG5cdFx0XHRhY3RpdmVMaW5rLmVxKDApLmFkZENsYXNzKCdhY3RpdmUnKTsvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0LDQutGC0LjQstC90YvQuSDQutC70LDRgdGBINGB0YHRi9C70LrQtSDRgtC10LrRg9GJ0LXQuSDRgdGC0YDQsNC90LjRhtGLXG5cdFx0fVxuXHRcdGlmKHNjcm9sbFRvcD49dG9wUGFnZTIpey8v0L/RgNC4INC/0YDQvtC60YDRg9GC0LrQtSDQvNC10L3Rj9C10Lwg0YbQstC10YIgaGVhZGVyINC4IGZvb3RlclxuXHRcdFx0aGVhZGVyLmNzcygnYmFja2dyb3VuZCcsJyNlZGEyMjMnKTtcblx0XHRcdGhlYWRlckxvZ28uYXR0cignc3JjJywnaW1hZ2UvbG9nb1doaXRlLnBuZycpO1xuXHRcdFx0aGVhZEJ1dHRvbi5hZGRDbGFzcygnY29sb3JfYmx1ZScpO1xuXHRcdFx0aGVhZGVyTmF2LmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7Ly/Rg9C00LDQu9GP0LXQvCDQsNC60YLQuNCy0L3Ri9C5INC60LvQsNGB0YFcblx0XHRcdGFjdGl2ZUxpbmsuZXEoMSkuYWRkQ2xhc3MoJ2FjdGl2ZScpOy8vINC00L7QsdCw0LLQu9GP0LXQvCDQsNC60YLQuNCy0L3Ri9C5INC60LvQsNGB0YEg0YHRgdGL0LvQutC1INGC0LXQutGD0YnQtdC5INGB0YLRgNCw0L3QuNGG0YtcblxuXHRcdH1cblx0XHRpZihzY3JvbGxUb3A+PXRvcFBhZ2UzKXsvL9C/0YDQuCDQv9GA0L7QutGA0YPRgtC60LUg0LzQtdC90Y/QtdC8INGG0LLQtdGCIGhlYWRlciDQuCBmb290ZXJcblx0XHRcdGhlYWRlci5jc3MoJ2JhY2tncm91bmQnLCcjNEFCN0M3Jyk7XG5cdFx0XHRoZWFkZXJMb2dvLmF0dHIoJ3NyYycsJ2ltYWdlL2xvZ292ZWN0b3IucG5nJyk7XG5cdFx0XHRoZWFkQnV0dG9uLnJlbW92ZUNsYXNzKCdjb2xvcl9ibHVlJyk7XG5cdFx0XHRoZWFkZXJOYXYuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTsvL9GD0LTQsNC70Y/QtdC8INCw0LrRgtC40LLQvdGL0Lkg0LrQu9Cw0YHRgVxuXHRcdFx0YWN0aXZlTGluay5lcSgyKS5hZGRDbGFzcygnYWN0aXZlJyk7Ly8g0LTQvtCx0LDQstC70Y/QtdC8INCw0LrRgtC40LLQvdGL0Lkg0LrQu9Cw0YHRgSDRgdGB0YvQu9C60LUg0YLQtdC60YPRidC10Lkg0YHRgtGA0LDQvdC40YbRi1xuXG5cdFx0fVxuXHRcdGlmKHNjcm9sbFRvcD49dG9wUGFnZTQpey8v0L/RgNC4INC/0YDQvtC60YDRg9GC0LrQtSDQvNC10L3Rj9C10Lwg0YbQstC10YIgaGVhZGVyINC4IGZvb3RlclxuXHRcdFx0aGVhZGVyLmNzcygnYmFja2dyb3VuZCcsJyNlZGEyMjMnKTtcblx0XHRcdGhlYWRlckxvZ28uYXR0cignc3JjJywnaW1hZ2UvbG9nb1doaXRlLnBuZycpO1xuXHRcdFx0aGVhZEJ1dHRvbi5hZGRDbGFzcygnY29sb3JfYmx1ZScpO1xuXHRcdFx0aGVhZGVyTmF2LmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7Ly/Rg9C00LDQu9GP0LXQvCDQsNC60YLQuNCy0L3Ri9C5INC60LvQsNGB0YFcblx0XHRcdGFjdGl2ZUxpbmsuZXEoMykuYWRkQ2xhc3MoJ2FjdGl2ZScpOy8vINC00L7QsdCw0LLQu9GP0LXQvCDQsNC60YLQuNCy0L3Ri9C5INC60LvQsNGB0YEg0YHRgdGL0LvQutC1INGC0LXQutGD0YnQtdC5INGB0YLRgNCw0L3QuNGG0YtcblxuXHRcdH1cblx0XHRpZihzY3JvbGxUb3A+PXRvcFBhZ2U1KXsvL9C/0YDQuCDQv9GA0L7QutGA0YPRgtC60LUg0LzQtdC90Y/QtdC8INGG0LLQtdGCIGhlYWRlciDQuCBmb290ZXJcblx0XHRcdGhlYWRlci5jc3MoJ2JhY2tncm91bmQnLCcjNEFCN0M3Jyk7XG5cdFx0XHRoZWFkZXJMb2dvLmF0dHIoJ3NyYycsJ2ltYWdlL2xvZ292ZWN0b3IucG5nJyk7XG5cdFx0XHRoZWFkQnV0dG9uLnJlbW92ZUNsYXNzKCdjb2xvcl9ibHVlJyk7XG5cdFx0XHRoZWFkZXJOYXYuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTsvL9GD0LTQsNC70Y/QtdC8INCw0LrRgtC40LLQvdGL0Lkg0LrQu9Cw0YHRgVxuXHRcdFx0YWN0aXZlTGluay5lcSg0KS5hZGRDbGFzcygnYWN0aXZlJyk7Ly8g0LTQvtCx0LDQstC70Y/QtdC8INCw0LrRgtC40LLQvdGL0Lkg0LrQu9Cw0YHRgSDRgdGB0YvQu9C60LUg0YLQtdC60YPRidC10Lkg0YHRgtGA0LDQvdC40YbRi1xuXG5cdFx0fVxuXG5cblxuXG5cdFx0Ly/RjdGC0Lgg0YPRgdC70L7QstC40Y8g0YHRgNCw0LHQsNGC0YvQstCw0Y7RgiDQutC+0LPQtNCwINC/0YDQvtC60YDRg9GC0LrQsCDQvtC/0YPRgdC60LDQtdGC0YHRjyDQtNC+INC90YPQttC90L7Qs9C+INCx0LvQvtC60LAg0Lgg0LHQtdGA0YPRgtGM0YHRjyDQv9Cw0YDQsNC80LXRgtGA0Ysg0LjQtyDQkdCUINC4INC/0YDQuNC80LXQvdGP0Y7RgtGB0Y8g0Log0L3Rg9C20L3QvtC80YMg0LrRgNGD0LbQutGDXG5cdFx0aWYoc2Nyb2xsVG9wPj1ibG9ja0Nsb3VkQmVmb3JlKXsvL9C/0YDQuCDQv9GA0L7QutGA0YPRgtC60LUg0LTQtdC70LDQtdC8INCx0LvQvtC60Lgg0L/RgNC+0LfRgNCw0YfQvdGL0LzQuFxuXG5cblx0XHRcdGZvcihpPTA7aTxjbG91ZHMubGVuZ3RoO2krKyl7XG5cdFx0XHRcdGNsb3Vkcy5lcShpKS5jc3MoJ29wYWNpdHknLDApO1xuXHRcdFx0fVxuXHRcdFx0JCgnLnBhZ2UzX2RvdGF0ZWRMZWZ0JykuY3NzKCdvcGFjaXR5JywwKTtcblx0XHRcdCQoJy5wYWdlM19kb3RhdGVkQ2VudGVyJykuY3NzKCdvcGFjaXR5JywwKTtcblx0XHRcdCQoJy5wYWdlM19kb3RhdGVkUmlnaHQnKS5jc3MoJ29wYWNpdHknLDApO1xuXHRcdFx0XG5cdFx0fVxuXG5cdFx0aWYoJCh3aW5kb3cpLndpZHRoKCk8ODAwICYmICQod2luZG93KS53aWR0aCgpPjYwMCl7Ly/QtNC70Y8g0L/Qu9Cw0L3RiNC10YLQsCDQstC10YDRgtC40LrQsNC70YzQvdC+INGH0YLQvtCxINCx0YvQu9C+INCy0LjQtNC90L7QvtCx0LvQsNC60LAg0YDQsNC90YzRiNC1XG5cdFx0XHRjb25zb2xlLmxvZygndGFibGV0Jyk7XG5cdFx0XHRibG9ja0Nsb3VkPSQoJy5wYWdlM19jb250ZW50Jykub2Zmc2V0KCkudG9wLTcwMDtcblx0XHRcdGJsb2NrQ2xvdWRCZWZvcmU9JCgnLnBhZ2UzX2NvbnRlbnQnKS5vZmZzZXQoKS50b3AtMTYwMDtcblxuXHRcdH1cblx0XHQvL9GN0YLQuCDRg9GB0LvQvtCy0LjRjyDRgdGA0LDQsdCw0YLRi9Cy0LDRjtGCINC60L7Qs9C00LAg0L/RgNC+0LrRgNGD0YLQutCwINC+0L/Rg9GB0LrQsNC10YLRgdGPINC00L4g0L3Rg9C20L3QvtCz0L4g0LHQu9C+0LrQsCDQuCDQsdC10YDRg9GC0YzRgdGPINC/0LDRgNCw0LzQtdGC0YDRiyDQuNC3INCR0JQg0Lgg0L/RgNC40LzQtdC90Y/RjtGC0YHRjyDQuiDQvdGD0LbQvdC+0LzRgyDQutGA0YPQttC60YNcblx0XHRpZihzY3JvbGxUb3A+PWJsb2NrQ2xvdWQpe1xuXHRcdFx0XG5cblx0XHRcdGZvcihpPTA7aTxjbG91ZHMubGVuZ3RoO2krKyl7XG5cdFx0XHRcdGNsb3Vkcy5lcShpKS5jc3MoJ29wYWNpdHknLDEpO1xuXHRcdFx0fVxuXHRcdFx0JCgnLnBhZ2UzX2RvdGF0ZWRMZWZ0JykuY3NzKCdvcGFjaXR5JywxKTtcblx0XHRcdCQoJy5wYWdlM19kb3RhdGVkQ2VudGVyJykuY3NzKCdvcGFjaXR5JywxKTtcblx0XHRcdCQoJy5wYWdlM19kb3RhdGVkUmlnaHQnKS5jc3MoJ29wYWNpdHknLDEpO1xuXG5cdFx0IH1cblxuXHR9KTtcblxuXG5cblxuIiwiXHJcblxyXG52YXIgYXJyb3dSaWdodD0kKCcucGFnZTNfYXJyb3ctcmlnaHQnKSwvL9GB0YLRgNC10LvQvtGH0LrQsCDQstC/0YDQsNCy0L5cclxuICAgIGFycm93TGVmdD0kKCcucGFnZTNfYXJyb3ctbGVmdCcpLC8v0YHRgtGA0LXQu9C+0YfQutCwINCy0LvQtdCy0L5cclxuXHJcbiAgICBhbGxDbG91ZD0kKCcucGFnZTNfY29udGVudF9hYnNvbHV0ZUJsb2NrJyksLy/QstGB0LUg0L7QsdC70LDQutCwXHJcbiAgICBjb250ZWluZXI9JCgnLnBhZ2UzX2NvbnRlbnQnKSwvL9C60L7QvdGC0LXQudC90LXRgCDQs9C00LUg0LvQtdC20LDRgiDQstGB0LUg0L7QsdC70LDQutCwXHJcbiAgICB0PTE7Ly/Qv9C+0YDRj9C00LrQvtCy0YvQuSDQvdC+0LzQtdGAXHJcblxyXG4gICAgICAgIGFycm93UmlnaHQub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn0L3QvtC80LXRgDogJyt0KTtcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgY2VudGVyPXQrMSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0PXQrMjtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NlbnRlcjogJytjZW50ZXIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmlnaHQ6ICcrcmlnaHQpO1xyXG5cclxuICAgICAgICAgICAgIGlmKHQ9PWFsbENsb3VkLmxlbmd0aCkge3Q9MDsgfS8v0L7QsdC90YPQu9GP0LXQvCDQutC+0LXRhNC40YbQuNC10L3RgiB0INC60L7Qs9C00LAg0LLRi9GI0LUg0LrQvtC7LdCy0LAg0L7QsdC70LDQutC+0LJcclxuICAgICAgICAgICAgaWYoY2VudGVyPT1hbGxDbG91ZC5sZW5ndGgpIHtjZW50ZXI9MDsgY29uc29sZS5sb2coJ2NlbnRlciDQv9GA0L7QvdC40LfQuNC7OiAnK3QpfS8v0YDQtdC00LDQutGC0LjRgNGD0LXQvCDQutC+0LXRhNC40YbQuNC10L3RgiDRh9GC0L7QsSDQvdC1INCx0YvQuyDQstGL0YjQtSDRh9C10Lwg0LrQvtC70YLRh9C10YHRgtCy0L4g0L7QsdC70LDRh9C60L7QslxyXG4gICAgICAgICAgICBpZihjZW50ZXI9PWFsbENsb3VkLmxlbmd0aCsxKSB7Y2VudGVyPTE7IGNvbnNvbGUubG9nKCdjZW50ZXIg0L/RgNC+0L3QuNC30LjQuzogJyt0KX1cclxuICAgICAgICAgICAgIGlmKHJpZ2h0PT1hbGxDbG91ZC5sZW5ndGgpIHtyaWdodD0wO2NvbnNvbGUubG9nKCdyaWdodCDQv9GA0L7QvdC40LfQuNC7OiAnK3QpIH1cclxuICAgICAgICAgICAgaWYocmlnaHQ9PWFsbENsb3VkLmxlbmd0aCsxKSB7cmlnaHQ9MTtjb25zb2xlLmxvZygncmlnaHQg0L/RgNC+0L3QuNC30LjQuzogJyt0KSB9XHJcbiAgICAgICAgICAgIGlmKHJpZ2h0PT1hbGxDbG91ZC5sZW5ndGgrMikge3JpZ2h0PTI7Y29uc29sZS5sb2coJ3JpZ2h0INC/0YDQvtC90LjQt9C40Ls6ICcrdCkgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBjb250ZWluZXIuZmluZCgnLmNsb3VkX2Fic29sdXRlX2xlZnQnKS5yZW1vdmVDbGFzcygnY2xvdWRfYWJzb2x1dGVfbGVmdCcpOy8v0YPQtNCw0LvRj9C10Lwg0LrQu9Cw0YHRgdGLINGH0YLQvtCxINC+0LHQu9Cw0LrQvtC8INC/0L7QvNC10L3Rj9C70L4g0LzQtdGB0YLQvlxyXG4gICAgICAgICAgICBjb250ZWluZXIuZmluZCgnLmNsb3VkX2Fic29sdXRlX2NlbnRlcicpLnJlbW92ZUNsYXNzKCdjbG91ZF9hYnNvbHV0ZV9jZW50ZXInKTtcclxuICAgICAgICAgICAgY29udGVpbmVyLmZpbmQoJy5jbG91ZF9hYnNvbHV0ZV9yaWdodCcpLnJlbW92ZUNsYXNzKCdjbG91ZF9hYnNvbHV0ZV9yaWdodCcpO1xyXG5cclxuICAgICAgICAgICAgYWxsQ2xvdWQuZXEodCkuYWRkQ2xhc3MoJ2Nsb3VkX2Fic29sdXRlX2xlZnQnKTsvL9C00L7QsdCw0LLQu9GP0LXQvCDQutC70LDRgdGBINC60L7RgtC+0YDRi9C5INC/0LXRgNC10LzQtdGB0YLQuNGCINC+0LHQu9Cw0LrQviDQsiDQvdGD0LbQvdC+0LUg0L3QvtCy0L7QtSDQv9C+0LvQvtC20LXQvdC40LVcclxuICAgICAgICAgICAgYWxsQ2xvdWQuZXEoY2VudGVyKS5hZGRDbGFzcygnY2xvdWRfYWJzb2x1dGVfY2VudGVyJyk7XHJcbiAgICAgICAgICAgIGFsbENsb3VkLmVxKHJpZ2h0KS5hZGRDbGFzcygnY2xvdWRfYWJzb2x1dGVfcmlnaHQnKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgdCsrO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYXJyb3dMZWZ0Lm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgICAgIGlmKHQ8MCkge3Q9YWxsQ2xvdWQubGVuZ3RoLTE7IH1cclxuICAgICAgICAgICAgdmFyIGNlbnRlcj10LTEsXHJcbiAgICAgICAgICAgICAgICBsZWZ0PXQtMjtcclxuXHJcblxyXG4gICAgICAgICAgICBpZihjZW50ZXI9PS0xKSB7Y2VudGVyPWFsbENsb3VkLmxlbmd0aC0xOyBjb25zb2xlLmxvZygnY2VudGVyINC/0YDQvtC90LjQt9C40Ls6ICcrY2VudGVyKX1cclxuICAgICAgICAgICAgaWYoY2VudGVyPT0tMikge2NlbnRlcj1hbGxDbG91ZC5sZW5ndGgtMjsgY29uc29sZS5sb2coJ2NlbnRlciDQv9GA0L7QvdC40LfQuNC7OiAnK2NlbnRlcil9XHJcblxyXG4gICAgICAgICAgICBpZihsZWZ0PT0tMSkge2xlZnQ9YWxsQ2xvdWQubGVuZ3RoLTE7Y29uc29sZS5sb2coJ2xlZnQg0L/RgNC+0L3QuNC30LjQuzogJytsZWZ0KSB9XHJcbiAgICAgICAgICAgIGlmKGxlZnQ9PS0yKSB7bGVmdD1hbGxDbG91ZC5sZW5ndGgtMjtjb25zb2xlLmxvZygnbGVmdCDQv9GA0L7QvdC40LfQuNC7OiAnK2xlZnQpIH1cclxuICAgICAgICAgICAgaWYobGVmdD09LTMpIHtsZWZ0PWFsbENsb3VkLmxlbmd0aC0zO2NvbnNvbGUubG9nKCdsZWZ0INC/0YDQvtC90LjQt9C40Ls6ICcrbGVmdCkgfVxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Q6ICcrdCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjZW50ZXI6ICcrY2VudGVyKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xlZnQ6ICcrbGVmdCk7XHJcblxyXG4gICAgICAgICAgICBjb250ZWluZXIuZmluZCgnLmNsb3VkX2Fic29sdXRlX2xlZnQnKS5yZW1vdmVDbGFzcygnY2xvdWRfYWJzb2x1dGVfbGVmdCcpOy8v0YPQtNCw0LvRj9C10Lwg0LrQu9Cw0YHRgdGLINGH0YLQvtCxINC+0LHQu9Cw0LrQvtC8INC/0L7QvNC10L3Rj9C70L4g0LzQtdGB0YLQvlxyXG4gICAgICAgICAgICBjb250ZWluZXIuZmluZCgnLmNsb3VkX2Fic29sdXRlX2NlbnRlcicpLnJlbW92ZUNsYXNzKCdjbG91ZF9hYnNvbHV0ZV9jZW50ZXInKTtcclxuICAgICAgICAgICAgY29udGVpbmVyLmZpbmQoJy5jbG91ZF9hYnNvbHV0ZV9yaWdodCcpLnJlbW92ZUNsYXNzKCdjbG91ZF9hYnNvbHV0ZV9yaWdodCcpO1xyXG5cclxuICAgICAgICAgICAgYWxsQ2xvdWQuZXEodCkuYWRkQ2xhc3MoJ2Nsb3VkX2Fic29sdXRlX3JpZ2h0Jyk7Ly/QtNC+0LHQsNCy0LvRj9C10Lwg0LrQu9Cw0YHRgSDQutC+0YLQvtGA0YvQuSDQv9C10YDQtdC80LXRgdGC0LjRgiDQvtCx0LvQsNC60L4g0LIg0L3Rg9C20L3QvtC1INC90L7QstC+0LUg0L/QvtC70L7QttC10L3QuNC1XHJcbiAgICAgICAgICAgIGFsbENsb3VkLmVxKGNlbnRlcikuYWRkQ2xhc3MoJ2Nsb3VkX2Fic29sdXRlX2NlbnRlcicpO1xyXG4gICAgICAgICAgICBhbGxDbG91ZC5lcShsZWZ0KS5hZGRDbGFzcygnY2xvdWRfYWJzb2x1dGVfbGVmdCcpO1xyXG5cclxuICAgICAgICAgICAgdC0tO1xyXG5cclxuXHJcbiAgICAgICAgfSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
