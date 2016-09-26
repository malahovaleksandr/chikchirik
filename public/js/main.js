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
    i=1;//порядковый номер

        arrowRight.on('click',function(){
            console.log('right');
            i++;
            console.log('номер: '+i);
            if(i==allCloud.length) {
                i=0;
                console.log('обнулили i');
            }
            if(i==allCloud.length+1) {
                i=1;
                console.log('обнулили i');
            }
            var center=i+1,
                right=i+2,
                rightOut=i+3, 
                leftOut=i+4;

            if(i==allCloud.length-1) {i=0; }
            if(center==allCloud.length-1) {center=0; }
            if(right==allCloud.length-1) {right=0; }
            if(rightOut==allCloud.length-1) {rightOut=0; }
            if(leftOut==allCloud.length-1) {leftOut=0; }


            conteiner.find('.cloud_absolute_left').removeClass('cloud_absolute_left');//удаляем классы чтоб облаком поменяло место
            conteiner.find('.cloud_absolute_center').removeClass('cloud_absolute_center');
            conteiner.find('.cloud_absolute_right').removeClass('cloud_absolute_right');
            conteiner.find('.cloud_absolute_out_right').removeClass('cloud_absolute_out_right');
            conteiner.find('.cloud_absolute_out_left').removeClass('cloud_absolute_out_left');

            allCloud.eq(i).addClass('cloud_absolute_left');//добавляем класс который переместит облако в нужное новое положение
            allCloud.eq(center).addClass('cloud_absolute_center');
            allCloud.eq(right).addClass('cloud_absolute_right');
            allCloud.eq(rightOut).addClass('cloud_absolute_out_left');
            allCloud.eq(leftOut).addClass('cloud_absolute_out_right');


        });

        arrowLeft.on('click',function(){
            console.log('left');
            console.log('номер: '+i);
            i--;
            if(i<0) {
                i=allCloud.length;
                console.log('повысили i');
            }
            var center=i-1,
                right=i-2,
                rightOut=i-3,
                leftOut=i-4;

            if(i==allCloud.length) {i=allCloud.length; }
            if(center==allCloud.length) {center=allCloud.length; }
            if(right==allCloud.length) {right=allCloud.length; }
            if(rightOut==allCloud.length) {rightOut=allCloud.length; }
            if(leftOut==allCloud.length) {leftOut=allCloud.length; }
            
            conteiner.find('.cloud_absolute_left').removeClass('cloud_absolute_left');//удаляем классы чтоб облаком поменяло место
            conteiner.find('.cloud_absolute_center').removeClass('cloud_absolute_center');
            conteiner.find('.cloud_absolute_right').removeClass('cloud_absolute_right');
            conteiner.find('.cloud_absolute_out_right').removeClass('cloud_absolute_out_right');
            conteiner.find('.cloud_absolute_out_left').removeClass('cloud_absolute_out_left');

            allCloud.eq(i).addClass('cloud_absolute_right');//добавляем класс который переместит облако в нужное новое положение
            allCloud.eq(center).addClass('cloud_absolute_center');
            allCloud.eq(right).addClass('cloud_absolute_left');
            allCloud.eq(rightOut).addClass('cloud_absolute_out_right');
            allCloud.eq(leftOut).addClass('cloud_absolute_out_left');


        });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmtfc2xpZGUuanMiLCJtYWluLmpzIiwibW92ZV9hcnJvdy5qcyIsInNob3dfY2xvdWQuanMiLCJzbGlkZXJfY2xvdWRzLmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiY29uc29sZSIsImxvZyIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImlkIiwidGhpcyIsImF0dHIiLCJ0b3AiLCJvZmZzZXQiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwiaXRlbU1lbnUiLCJ0ZXh0TWVudSIsImZpbmQiLCIkdGhpcyIsInBhZ2U0IiwicGFyZW50IiwiYWN0aXZCbG9ja1RleHQiLCJhY3RpdkJsb2NrVGl0bGUiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiYmlnQXJyb3ciLCJhcnJvd0Jsb2NrIiwibWFyZ2luQm90dG9tIiwid2lkdGgiLCJvcGFjaXR5IiwiaGVpZ2h0Iiwic2V0VGltZW91dCIsInNtYWxsQXJyb3ciLCJzZXRJbnRlcnZhbCIsImJsb2NrQ2xvdWQiLCJibG9ja0Nsb3VkQmVmb3JlIiwiY2xvdWRzIiwiZm9vdGVyIiwiaGVhZGVyIiwiaGVhZGVyTG9nbyIsImhlYWRCdXR0b24iLCJoZWlnaHRIZWFkZXIiLCJhY3RpdmVMaW5rIiwiaGVhZGVyTmF2IiwidG9wUGFnZTIiLCJ0b3BQYWdlMyIsInRvcFBhZ2U0IiwidG9wUGFnZTUiLCJ3aW5kb3ciLCJjc3MiLCJlcSIsImkiLCJsZW5ndGgiLCJhcnJvd1JpZ2h0IiwiYXJyb3dMZWZ0IiwiYWxsQ2xvdWQiLCJjb250ZWluZXIiLCJjZW50ZXIiLCJyaWdodCIsInJpZ2h0T3V0IiwibGVmdE91dCJdLCJtYXBwaW5ncyI6IkFBQUFBLEVBQUFDLFVBQUFDLE1BQUEsV0FDQUMsUUFBQUMsSUFBQSwwQkFHQUosRUFBQUMsVUFBQUMsTUFBQSxXQUNBRixFQUFBLGVBQUFLLEdBQUEsUUFBQSxJQUFBLFNBQUFDLEdBRUFBLEVBQUFDLGdCQUVBLElBQUFDLEdBQUFSLEVBQUFTLE1BQUFD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U0FBQUgsUUFFQUksVUFBQXZDLEtBQUEsd0JBQUFNLFlBQUEsdUJBQ0FpQyxVQUFBdkMsS0FBQSwwQkFBQU0sWUFBQSx5QkFDQWlDLFVBQUF2QyxLQUFBLHlCQUFBTSxZQUFBLHdCQUNBaUMsVUFBQXZDLEtBQUEsNkJBQUFNLFlBQUEsNEJBQ0FpQyxVQUFBdkMsS0FBQSw0QkFBQU0sWUFBQSwyQkFFQWdDLFNBQUFMLEdBQUFDLEdBQUEzQixTQUFBLHdCQUNBK0IsU0FBQUwsR0FBQU8sR0FBQWpDLFNBQUEseUJBQ0ErQixTQUFBTCxHQUFBUSxHQUFBbEMsU0FBQSx1QkFDQStCLFNBQUFMLEdBQUFTLEdBQUFuQyxTQUFBLDRCQUNBK0IsU0FBQUwsR0FBQVUsR0FBQXBDLFNBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfQv9C+0LTQutC70Y7Rh9C10L0gbGlua19zbGlkZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICAgICAkKFwiLmhlYWRlcl9uYXZcIikub24oXCJjbGlja1wiLFwiYVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgLy/QvtGC0LzQtdC90Y/QtdC8INGB0YLQsNC90LTQsNGA0YLQvdGD0Y4g0L7QsdGA0LDQsdC+0YLQutGDINC90LDQttCw0YLQuNGPINC/0L4g0YHRgdGL0LvQutC1XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIC8v0LfQsNCx0LjRgNCw0LXQvCDQuNC00LXQvdGC0LjRhNC40LrQsNGC0L7RgCDQsdC+0LrQsCDRgSDQsNGC0YDQuNCx0YPRgtCwIGhyZWZcclxuICAgICAgICAgICAgdmFyIGlkICA9ICQodGhpcykuYXR0cignaHJlZicpLFxyXG4gICAgICAgICAgICAvL9GD0LfQvdCw0LXQvCDQstGL0YHQvtGC0YMg0L7RgiDQvdCw0YfQsNC70LAg0YHRgtGA0LDQvdC40YbRiyDQtNC+INCx0LvQvtC60LAg0L3QsCDQutC+0YLQvtGA0YvQuSDRgdGB0YvQu9Cw0LXRgtGB0Y8g0Y/QutC+0YDRjFxyXG4gICAgICAgICAgICAgICAgdG9wID0gJChpZCkub2Zmc2V0KCkudG9wO1xyXG4gICAgICAgICAgICAvL9Cw0L3QuNC80LjRgNGD0LXQvCDQv9C10YDQtdGF0L7QtCDQvdCwINGA0LDRgdGB0YLQvtGP0L3QuNC1IC0gdG9wINC30LAgMTUwMCDQvNGBXHJcbiAgICAgICAgICAgICQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe3Njcm9sbFRvcDogdG9wfSwgMTAwMCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoXCIuanNfbGlua19wYWdlMlwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAvL9C+0YLQvNC10L3Rj9C10Lwg0YHRgtCw0L3QtNCw0YDRgtC90YPRjiDQvtCx0YDQsNCx0L7RgtC60YMg0L3QsNC20LDRgtC40Y8g0L/QviDRgdGB0YvQu9C60LVcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgLy/Qt9Cw0LHQuNGA0LDQtdC8INC40LTQtdC90YLQuNGE0LjQutCw0YLQvtGAINCx0L7QutCwINGBINCw0YLRgNC40LHRg9GC0LAgaHJlZlxyXG4gICAgICAgICAgICB2YXIgaWQgID0gJCh0aGlzKS5hdHRyKCdocmVmJyksXHJcbiAgICAgICAgICAgIC8v0YPQt9C90LDQtdC8INCy0YvRgdC+0YLRgyDQvtGCINC90LDRh9Cw0LvQsCDRgdGC0YDQsNC90LjRhtGLINC00L4g0LHQu9C+0LrQsCDQvdCwINC60L7RgtC+0YDRi9C5INGB0YHRi9C70LDQtdGC0YHRjyDRj9C60L7RgNGMXHJcbiAgICAgICAgICAgICAgICB0b3AgPSAkKGlkKS5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgICAgIC8v0LDQvdC40LzQuNGA0YPQtdC8INC/0LXRgNC10YXQvtC0INC90LAg0YDQsNGB0YHRgtC+0Y/QvdC40LUgLSB0b3Ag0LfQsCAxNTAwINC80YFcclxuICAgICAgICAgICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiB0b3B9LCAxMDAwKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH0pO1xyXG4iLCIgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICAgICBjb25zb2xlLmxvZygn0L/QvtC00LrQu9GO0YfQtdC9INC80LXQvdGOINC/0LXRgNC10LvQuNGB0YLRi9Cy0LDQtdGCICcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gZGVzY3RvcCA0INC/0YDQuCDQvdCw0LbQsNGC0LjQuCDQvdCwINC80LXQvdGOINC/0L7Rj9Cy0LvRj9C10YLRgdGPINGC0LXQutGB0YJcclxuICAgIHZhciBpdGVtTWVudT0kKCcucGFnZTRfbWVudS1pdGVtJyksLy/Qv9GD0L3QutGCINC80LXQvdGOXHJcbiAgICAgICAgdGV4dE1lbnU9aXRlbU1lbnUuZmluZCgnLnBhZ2U0X21lbnUtdGV4dCcpOy8v0YLQtdC60YHRgiDQutC+0YLQvtGA0YvQudC00L7Qu9C20LXQvSDQv9C+0Y/QstC40YLRjNGB0Y9cclxuXHJcbiAgICBpdGVtTWVudS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgcGFnZTQ9JHRoaXMucGFyZW50KCcuY29udGVudC1kZXNrdG9wX3BhZ2U0JyksLy/QvdCw0YXQvtC00LjQvCDQsdC70L7QuiDRgdGC0YDQsNC90LjRhtGLXHJcbiAgICAgICAgICAgIGFjdGl2QmxvY2tUZXh0PXBhZ2U0LmZpbmQoJy5wYWdlNF9tZW51LXRleHRfYWN0aXYnKSwvL9C90LDRhdC+0LTQuNC8INGB0YPRidC10YHRgtCy0YPRjtGJ0LjQuSDQsNC60YLQuNCy0L3Ri9C5INC60LvQsNGBINGDINGC0LXQutGB0YLQsFxyXG4gICAgICAgICAgICBhY3RpdkJsb2NrVGl0bGU9cGFnZTQuZmluZCgnLnBhZ2U0X21lbnUtdGl0bGVfYWN0aXYnKTsvL9C90LDRhdC+0LTQuNC8INGB0YPRidC10YHRgtCy0YPRjtGJ0LjQuSDQsNC60YLQuNCy0L3Ri9C5INC60LvQsNGBINGDINGC0LjRgtGD0LvQsFxyXG5cclxuICAgICAgICAgICAgYWN0aXZCbG9ja1RpdGxlLnJlbW92ZUNsYXNzKCdwYWdlNF9tZW51LXRpdGxlX2FjdGl2Jyk7Ly8g0YPQtNCw0LvRj9C10Lwg0YMg0YLQuNGC0YPQu9CwINGB0YPRidC10YHRgtCy0YPRjtGJ0LjQuSDQsNC60YLQuNCy0L3Ri9C5INC60LvQsNGB0YFcclxuICAgICAgICAgICAgYWN0aXZCbG9ja1RleHQucmVtb3ZlQ2xhc3MoJ3BhZ2U0X21lbnUtdGV4dF9hY3RpdicpOy8vINGD0LTQsNC70Y/QtdC8INGDINGC0LXQutGB0YLQsCDRgdGD0YnQtdGB0YLQstGD0Y7RidC40Lkg0LDQutGC0LjQstC90YvQuSDQutC70LDRgdGBXHJcbiAgICAgICAgJHRoaXMuZmluZCgnLnBhZ2U0X21lbnUtdGV4dCcpLmFkZENsYXNzKCdwYWdlNF9tZW51LXRleHRfYWN0aXYnKTsvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0YLQtdC60YHRgtGDINCw0LLRgtC40LrQstC90YvQuSDQutC70LDRgdGBINGN0LvQtdC80LXQvdGC0YMg0L3QsCDQutC+0YLQvtGA0YvQuSDQvdCw0LbQsNC70LhcclxuICAgICAgICAkdGhpcy5maW5kKCcucGFnZTRfbWVudS10aXRsZScpLmFkZENsYXNzKCdwYWdlNF9tZW51LXRpdGxlX2FjdGl2Jyk7Ly8g0LTQvtCx0LDQstC70Y/QtdC8INGC0LjRgtGD0LvRgyDQsNCy0YLQuNC60LLQvdGL0Lkg0LrQu9Cw0YHRgSDRjdC70LXQvNC10L3RgtGDINC90LAg0LrQvtGC0L7RgNGL0Lkg0L3QsNC20LDQu9C4XHJcblxyXG4gICAgfSk7IiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgIGNvbnNvbGUubG9nKCdjb25uZWN0IG1vdmUgYXJyb3cnKTtcclxuICAgIHZhciBhcnJvd0Jsb2NrPSAkKCcuZGVza3RvcDFfbGVhcm4tbW9yZV9fYXJyb3cnKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gYmlnQXJyb3cgKCl7XHJcblxyXG4gICAgICAgIGFycm93QmxvY2suYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI4cHhcIixcclxuICAgICAgICAgICAgd2lkdGg6IFwiMjJweFwiLFxyXG4gICAgICAgICAgICBvcGFjaXR5OjEsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzM0cHgnXHJcbiAgICAgICAgfSw4MDApO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgc21hbGxBcnJvdygpO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG5cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNtYWxsQXJyb3coKXtcclxuXHJcbiAgICAgICAgYXJyb3dCbG9jay5hbmltYXRlKHtcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAwLFxyXG4gICAgICAgICAgICB3aWR0aDogXCIxNXB4XCIsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6MC41LFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcyOHB4J1xyXG4gICAgICAgIH0sMTAwMCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBzZXRJbnRlcnZhbChiaWdBcnJvdywyMjAwKTtcclxuXHJcbn0pOyIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cdGNvbnNvbGUubG9nKCdjb25uZWN0IHNob3cgY2xvdWRkZGRkZGQnKTsvL9C/0L7QtNC60LvRjtGH0LXQvdC40Y8g0LzQtdC90Y4g0L3QsCDQstC10YHRjCDRjdC60YDQsNC9INC30LXQu9C10L3QvtC1XG59KTtcblxuXHR2YXJcdGJsb2NrQ2xvdWQ9JCgnLnBhZ2UzX2NvbnRlbnQnKS5vZmZzZXQoKS50b3AtMzAwLC8v0L/QvtC70L7QttC10L3QtSDQsdC70L7QutCwINC+0YIg0LLQtdGA0YXQvdC10LPQviDQutGA0LDRjywgLTUwMCDRjdGC0L4g0YfRgtC+0LEg0LfQsNGA0LDQvdC10LUg0LHRi9C70LAg0YLQvtGH0LrQsCDQv9C+0Y/QstC70LXQvdC40Y8g0LHQu9C+0LrQsFxuXHRcdGJsb2NrQ2xvdWRCZWZvcmU9JCgnLnBhZ2UzX2NvbnRlbnQnKS5vZmZzZXQoKS50b3AtMTIwMCxcblx0XHRjbG91ZHM9JCgnLnBhZ2UzX2NvbnRlbnRfYWJzb2x1dGVCbG9jaycpLC8v0L3QsNGF0L7QtNC40Lwg0LLRgdC1INC+0LHQu9Cw0LrQsFxuXG5cblx0XHQvL9C/0LXRgNC10LzQtdC90L3Ri9C1INC00LvRjyDQv9C10YDQtdC80LXQvdGLINGE0L7QvdCwINGF0Y3QtNC10YBcblx0XHRmb290ZXI9JCgnLmZvb3RlcicpLC8v0LHQu9C+0Log0YTRg9GC0LXRgNCwXG5cdFx0aGVhZGVyPSQoJy5oZWFkZXInKSwvL9Cx0LvQvtC6INGF0LXQtNC10YBcblx0XHRoZWFkZXJMb2dvPSQoJy5oZWFkZXJfbG9nbycpLC8v0LrQsNGA0YLQuNC90LrQsCDQu9C+0LPQvtGC0LjQv9CwXG5cdFx0aGVhZEJ1dHRvbj0kKCcuaGVhZGVyX19jb2luc19idXR0b24nKSwvL9C60L3QvtC/0LrQsCDQutGD0L/QuNGC0Ywg0LIg0YjQsNC/0LrQtVxuXHRcdGhlaWdodEhlYWRlcj1oZWFkZXIuaGVpZ2h0KCksXG5cblx0XHRhY3RpdmVMaW5rPSQoJy5oZWFkZXJfbmF2LXRleHQnKSwvL9Cy0YvQsdC40YDQsNC10Lwg0YHRgdGL0LvQutC4INC90LAg0Y3QutGA0LDQvdGLLNGH0YLQvtCxINGB0LTQtdC70LDRgtGMINCw0LrRgtC40LLQvdGL0Lxcblx0XHRoZWFkZXJOYXY9JCgnLmhlYWRlcl9uYXYnKSwvL9Cx0LvQvtC6INCz0LTQtSDRgdGB0YvQu9C60Lgg0L3QsCDRgdGC0YDQsNC90LjRhtGLXG5cblx0XHR0b3BQYWdlMj0kKCcjMicpLm9mZnNldCgpLnRvcC1oZWlnaHRIZWFkZXIsLy/QvdCw0YfQsNC70L4g0LLQtdGA0YXQsCDQstGC0L7RgNC+0Lkg0YHRgtGA0LDQvdC40YbRiyDQvNC40L3Rg9GBINCy0YvRgdC+0YLQsCDRhdC10LTQtdGA0LBcblx0XHR0b3BQYWdlMz0kKCcjMycpLm9mZnNldCgpLnRvcC1oZWlnaHRIZWFkZXIsXG5cdFx0dG9wUGFnZTQ9JCgnIzQnKS5vZmZzZXQoKS50b3AtaGVpZ2h0SGVhZGVyLFxuXHRcdHRvcFBhZ2U1PSQoJyM1Jykub2Zmc2V0KCkudG9wLWhlaWdodEhlYWRlcjtcblxuXG5cblxuXHQkKGRvY3VtZW50KS5vbignc2Nyb2xsJyxmdW5jdGlvbigpey8v0YTRg9C90LrRhtC40Y8g0LTQu9GPINGB0LzQtdC90Ysg0YbQstC10YLQsCDRhdC10LTQtdGAINC/0YDQuCDRgdC60YDQvtC70LvQtSDRgdGC0YDQsNC90LjRhlxuXHRcdHZhciBzY3JvbGxUb3A9JCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXHRcdGNvbnNvbGUubG9nKGhlaWdodEhlYWRlcik7XG5cblx0XHQvL9GN0YLQuCDRg9GB0LvQvtCy0LjRjyDRgdGA0LDQsdCw0YLRi9Cy0LDRjtGCINC60L7Qs9C00LAg0L/RgNC+0LrRgNGD0YLQutCwINC+0L/Rg9GB0LrQsNC10YLRgdGPINC00L4g0L3Rg9C20L3QvtCz0L4g0LHQu9C+0LrQsCDQuCDQsdC10YDRg9GC0YzRgdGPINC/0LDRgNCw0LzQtdGC0YDRiyDQuNC3INCR0JQg0Lgg0L/RgNC40LzQtdC90Y/RjtGC0YHRjyDQuiDQvdGD0LbQvdC+0LzRgyDQutGA0YPQttC60YNcblx0XHRpZihzY3JvbGxUb3A8dG9wUGFnZTIpey8v0L/RgNC4INC/0YDQvtC60YDRg9GC0LrQtSDQvNC10L3Rj9C10Lwg0YbQstC10YIgaGVhZGVyINC4IGZvb3RlclxuXHRcdFx0aGVhZGVyLmNzcygnYmFja2dyb3VuZCcsJyM0QUI3QzcnKTtcblx0XHRcdGhlYWRlckxvZ28uYXR0cignc3JjJywnaW1hZ2UvbG9nb3ZlY3Rvci5wbmcnKTtcblx0XHRcdGhlYWRCdXR0b24ucmVtb3ZlQ2xhc3MoJ2NvbG9yX2JsdWUnKTtcblx0XHRcdGhlYWRlck5hdi5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpOy8v0YPQtNCw0LvRj9C10Lwg0LDQutGC0LjQstC90YvQuSDQutC70LDRgdGBXG5cdFx0XHRhY3RpdmVMaW5rLmVxKDApLmFkZENsYXNzKCdhY3RpdmUnKTsvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0LDQutGC0LjQstC90YvQuSDQutC70LDRgdGBINGB0YHRi9C70LrQtSDRgtC10LrRg9GJ0LXQuSDRgdGC0YDQsNC90LjRhtGLXG5cdFx0fVxuXHRcdGlmKHNjcm9sbFRvcD49dG9wUGFnZTIpey8v0L/RgNC4INC/0YDQvtC60YDRg9GC0LrQtSDQvNC10L3Rj9C10Lwg0YbQstC10YIgaGVhZGVyINC4IGZvb3RlclxuXHRcdFx0aGVhZGVyLmNzcygnYmFja2dyb3VuZCcsJyNlZGEyMjMnKTtcblx0XHRcdGhlYWRlckxvZ28uYXR0cignc3JjJywnaW1hZ2UvbG9nb1doaXRlLnBuZycpO1xuXHRcdFx0aGVhZEJ1dHRvbi5hZGRDbGFzcygnY29sb3JfYmx1ZScpO1xuXHRcdFx0aGVhZGVyTmF2LmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7Ly/Rg9C00LDQu9GP0LXQvCDQsNC60YLQuNCy0L3Ri9C5INC60LvQsNGB0YFcblx0XHRcdGFjdGl2ZUxpbmsuZXEoMSkuYWRkQ2xhc3MoJ2FjdGl2ZScpOy8vINC00L7QsdCw0LLQu9GP0LXQvCDQsNC60YLQuNCy0L3Ri9C5INC60LvQsNGB0YEg0YHRgdGL0LvQutC1INGC0LXQutGD0YnQtdC5INGB0YLRgNCw0L3QuNGG0YtcblxuXHRcdH1cblx0XHRpZihzY3JvbGxUb3A+PXRvcFBhZ2UzKXsvL9C/0YDQuCDQv9GA0L7QutGA0YPRgtC60LUg0LzQtdC90Y/QtdC8INGG0LLQtdGCIGhlYWRlciDQuCBmb290ZXJcblx0XHRcdGhlYWRlci5jc3MoJ2JhY2tncm91bmQnLCcjNEFCN0M3Jyk7XG5cdFx0XHRoZWFkZXJMb2dvLmF0dHIoJ3NyYycsJ2ltYWdlL2xvZ292ZWN0b3IucG5nJyk7XG5cdFx0XHRoZWFkQnV0dG9uLnJlbW92ZUNsYXNzKCdjb2xvcl9ibHVlJyk7XG5cdFx0XHRoZWFkZXJOYXYuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTsvL9GD0LTQsNC70Y/QtdC8INCw0LrRgtC40LLQvdGL0Lkg0LrQu9Cw0YHRgVxuXHRcdFx0YWN0aXZlTGluay5lcSgyKS5hZGRDbGFzcygnYWN0aXZlJyk7Ly8g0LTQvtCx0LDQstC70Y/QtdC8INCw0LrRgtC40LLQvdGL0Lkg0LrQu9Cw0YHRgSDRgdGB0YvQu9C60LUg0YLQtdC60YPRidC10Lkg0YHRgtGA0LDQvdC40YbRi1xuXG5cdFx0fVxuXHRcdGlmKHNjcm9sbFRvcD49dG9wUGFnZTQpey8v0L/RgNC4INC/0YDQvtC60YDRg9GC0LrQtSDQvNC10L3Rj9C10Lwg0YbQstC10YIgaGVhZGVyINC4IGZvb3RlclxuXHRcdFx0aGVhZGVyLmNzcygnYmFja2dyb3VuZCcsJyNlZGEyMjMnKTtcblx0XHRcdGhlYWRlckxvZ28uYXR0cignc3JjJywnaW1hZ2UvbG9nb1doaXRlLnBuZycpO1xuXHRcdFx0aGVhZEJ1dHRvbi5hZGRDbGFzcygnY29sb3JfYmx1ZScpO1xuXHRcdFx0aGVhZGVyTmF2LmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7Ly/Rg9C00LDQu9GP0LXQvCDQsNC60YLQuNCy0L3Ri9C5INC60LvQsNGB0YFcblx0XHRcdGFjdGl2ZUxpbmsuZXEoMykuYWRkQ2xhc3MoJ2FjdGl2ZScpOy8vINC00L7QsdCw0LLQu9GP0LXQvCDQsNC60YLQuNCy0L3Ri9C5INC60LvQsNGB0YEg0YHRgdGL0LvQutC1INGC0LXQutGD0YnQtdC5INGB0YLRgNCw0L3QuNGG0YtcblxuXHRcdH1cblx0XHRpZihzY3JvbGxUb3A+PXRvcFBhZ2U1KXsvL9C/0YDQuCDQv9GA0L7QutGA0YPRgtC60LUg0LzQtdC90Y/QtdC8INGG0LLQtdGCIGhlYWRlciDQuCBmb290ZXJcblx0XHRcdGhlYWRlci5jc3MoJ2JhY2tncm91bmQnLCcjNEFCN0M3Jyk7XG5cdFx0XHRoZWFkZXJMb2dvLmF0dHIoJ3NyYycsJ2ltYWdlL2xvZ292ZWN0b3IucG5nJyk7XG5cdFx0XHRoZWFkQnV0dG9uLnJlbW92ZUNsYXNzKCdjb2xvcl9ibHVlJyk7XG5cdFx0XHRoZWFkZXJOYXYuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTsvL9GD0LTQsNC70Y/QtdC8INCw0LrRgtC40LLQvdGL0Lkg0LrQu9Cw0YHRgVxuXHRcdFx0YWN0aXZlTGluay5lcSg0KS5hZGRDbGFzcygnYWN0aXZlJyk7Ly8g0LTQvtCx0LDQstC70Y/QtdC8INCw0LrRgtC40LLQvdGL0Lkg0LrQu9Cw0YHRgSDRgdGB0YvQu9C60LUg0YLQtdC60YPRidC10Lkg0YHRgtGA0LDQvdC40YbRi1xuXG5cdFx0fVxuXG5cblxuXG5cdFx0Ly/RjdGC0Lgg0YPRgdC70L7QstC40Y8g0YHRgNCw0LHQsNGC0YvQstCw0Y7RgiDQutC+0LPQtNCwINC/0YDQvtC60YDRg9GC0LrQsCDQvtC/0YPRgdC60LDQtdGC0YHRjyDQtNC+INC90YPQttC90L7Qs9C+INCx0LvQvtC60LAg0Lgg0LHQtdGA0YPRgtGM0YHRjyDQv9Cw0YDQsNC80LXRgtGA0Ysg0LjQtyDQkdCUINC4INC/0YDQuNC80LXQvdGP0Y7RgtGB0Y8g0Log0L3Rg9C20L3QvtC80YMg0LrRgNGD0LbQutGDXG5cdFx0aWYoc2Nyb2xsVG9wPj1ibG9ja0Nsb3VkQmVmb3JlKXsvL9C/0YDQuCDQv9GA0L7QutGA0YPRgtC60LUg0LTQtdC70LDQtdC8INCx0LvQvtC60Lgg0L/RgNC+0LfRgNCw0YfQvdGL0LzQuFxuXHRcdFx0Y29uc29sZS5sb2coJ9Cy0YvRgdC+0YLQsDE6ICcrc2Nyb2xsVG9wKTtcblxuXHRcdFx0Zm9yKGk9MDtpPGNsb3Vkcy5sZW5ndGg7aSsrKXtcblx0XHRcdFx0Y2xvdWRzLmVxKGkpLmNzcygnb3BhY2l0eScsMCk7XG5cdFx0XHR9XG5cdFx0XHQkKCcucGFnZTNfZG90YXRlZExlZnQnKS5jc3MoJ29wYWNpdHknLDApO1xuXHRcdFx0JCgnLnBhZ2UzX2RvdGF0ZWRDZW50ZXInKS5jc3MoJ29wYWNpdHknLDApO1xuXHRcdFx0JCgnLnBhZ2UzX2RvdGF0ZWRSaWdodCcpLmNzcygnb3BhY2l0eScsMCk7XG5cdFx0XHRcblx0XHR9XG5cblx0XHQvL9GN0YLQuCDRg9GB0LvQvtCy0LjRjyDRgdGA0LDQsdCw0YLRi9Cy0LDRjtGCINC60L7Qs9C00LAg0L/RgNC+0LrRgNGD0YLQutCwINC+0L/Rg9GB0LrQsNC10YLRgdGPINC00L4g0L3Rg9C20L3QvtCz0L4g0LHQu9C+0LrQsCDQuCDQsdC10YDRg9GC0YzRgdGPINC/0LDRgNCw0LzQtdGC0YDRiyDQuNC3INCR0JQg0Lgg0L/RgNC40LzQtdC90Y/RjtGC0YHRjyDQuiDQvdGD0LbQvdC+0LzRgyDQutGA0YPQttC60YNcblx0XHRpZihzY3JvbGxUb3A+PWJsb2NrQ2xvdWQpe1xuXHRcdFx0Y29uc29sZS5sb2coJ9Cy0YvRgdC+0YLQsDI6ICcrc2Nyb2xsVG9wKTtcblxuXHRcdFx0Zm9yKGk9MDtpPGNsb3Vkcy5sZW5ndGg7aSsrKXtcblx0XHRcdFx0Y2xvdWRzLmVxKGkpLmNzcygnb3BhY2l0eScsMSk7XG5cdFx0XHR9XG5cdFx0XHQkKCcucGFnZTNfZG90YXRlZExlZnQnKS5jc3MoJ29wYWNpdHknLDEpO1xuXHRcdFx0JCgnLnBhZ2UzX2RvdGF0ZWRDZW50ZXInKS5jc3MoJ29wYWNpdHknLDEpO1xuXHRcdFx0JCgnLnBhZ2UzX2RvdGF0ZWRSaWdodCcpLmNzcygnb3BhY2l0eScsMSk7XG5cblx0XHQgfVxuXG5cdH0pO1xuXG5cblxuXG4iLCJcclxuXHJcbnZhciBhcnJvd1JpZ2h0PSQoJy5wYWdlM19hcnJvdy1yaWdodCcpLC8v0YHRgtGA0LXQu9C+0YfQutCwINCy0L/RgNCw0LLQvlxyXG4gICAgYXJyb3dMZWZ0PSQoJy5wYWdlM19hcnJvdy1sZWZ0JyksLy/RgdGC0YDQtdC70L7Rh9C60LAg0LLQu9C10LLQvlxyXG5cclxuICAgIGFsbENsb3VkPSQoJy5wYWdlM19jb250ZW50X2Fic29sdXRlQmxvY2snKSwvL9Cy0YHQtSDQvtCx0LvQsNC60LBcclxuICAgIGNvbnRlaW5lcj0kKCcucGFnZTNfY29udGVudCcpLC8v0LrQvtC90YLQtdC50L3QtdGAINCz0LTQtSDQu9C10LbQsNGCINCy0YHQtSDQvtCx0LvQsNC60LBcclxuICAgIGk9MTsvL9C/0L7RgNGP0LTQutC+0LLRi9C5INC90L7QvNC10YBcclxuXHJcbiAgICAgICAgYXJyb3dSaWdodC5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyaWdodCcpO1xyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQvdC+0LzQtdGAOiAnK2kpO1xyXG4gICAgICAgICAgICBpZihpPT1hbGxDbG91ZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGk9MDtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQvtCx0L3Rg9C70LjQu9C4IGknKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihpPT1hbGxDbG91ZC5sZW5ndGgrMSkge1xyXG4gICAgICAgICAgICAgICAgaT0xO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ9C+0LHQvdGD0LvQuNC70LggaScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBjZW50ZXI9aSsxLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ9aSsyLFxyXG4gICAgICAgICAgICAgICAgcmlnaHRPdXQ9aSszLCBcclxuICAgICAgICAgICAgICAgIGxlZnRPdXQ9aSs0O1xyXG5cclxuICAgICAgICAgICAgaWYoaT09YWxsQ2xvdWQubGVuZ3RoLTEpIHtpPTA7IH1cclxuICAgICAgICAgICAgaWYoY2VudGVyPT1hbGxDbG91ZC5sZW5ndGgtMSkge2NlbnRlcj0wOyB9XHJcbiAgICAgICAgICAgIGlmKHJpZ2h0PT1hbGxDbG91ZC5sZW5ndGgtMSkge3JpZ2h0PTA7IH1cclxuICAgICAgICAgICAgaWYocmlnaHRPdXQ9PWFsbENsb3VkLmxlbmd0aC0xKSB7cmlnaHRPdXQ9MDsgfVxyXG4gICAgICAgICAgICBpZihsZWZ0T3V0PT1hbGxDbG91ZC5sZW5ndGgtMSkge2xlZnRPdXQ9MDsgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnRlaW5lci5maW5kKCcuY2xvdWRfYWJzb2x1dGVfbGVmdCcpLnJlbW92ZUNsYXNzKCdjbG91ZF9hYnNvbHV0ZV9sZWZ0Jyk7Ly/Rg9C00LDQu9GP0LXQvCDQutC70LDRgdGB0Ysg0YfRgtC+0LEg0L7QsdC70LDQutC+0Lwg0L/QvtC80LXQvdGP0LvQviDQvNC10YHRgtC+XHJcbiAgICAgICAgICAgIGNvbnRlaW5lci5maW5kKCcuY2xvdWRfYWJzb2x1dGVfY2VudGVyJykucmVtb3ZlQ2xhc3MoJ2Nsb3VkX2Fic29sdXRlX2NlbnRlcicpO1xyXG4gICAgICAgICAgICBjb250ZWluZXIuZmluZCgnLmNsb3VkX2Fic29sdXRlX3JpZ2h0JykucmVtb3ZlQ2xhc3MoJ2Nsb3VkX2Fic29sdXRlX3JpZ2h0Jyk7XHJcbiAgICAgICAgICAgIGNvbnRlaW5lci5maW5kKCcuY2xvdWRfYWJzb2x1dGVfb3V0X3JpZ2h0JykucmVtb3ZlQ2xhc3MoJ2Nsb3VkX2Fic29sdXRlX291dF9yaWdodCcpO1xyXG4gICAgICAgICAgICBjb250ZWluZXIuZmluZCgnLmNsb3VkX2Fic29sdXRlX291dF9sZWZ0JykucmVtb3ZlQ2xhc3MoJ2Nsb3VkX2Fic29sdXRlX291dF9sZWZ0Jyk7XHJcblxyXG4gICAgICAgICAgICBhbGxDbG91ZC5lcShpKS5hZGRDbGFzcygnY2xvdWRfYWJzb2x1dGVfbGVmdCcpOy8v0LTQvtCx0LDQstC70Y/QtdC8INC60LvQsNGB0YEg0LrQvtGC0L7RgNGL0Lkg0L/QtdGA0LXQvNC10YHRgtC40YIg0L7QsdC70LDQutC+INCyINC90YPQttC90L7QtSDQvdC+0LLQvtC1INC/0L7Qu9C+0LbQtdC90LjQtVxyXG4gICAgICAgICAgICBhbGxDbG91ZC5lcShjZW50ZXIpLmFkZENsYXNzKCdjbG91ZF9hYnNvbHV0ZV9jZW50ZXInKTtcclxuICAgICAgICAgICAgYWxsQ2xvdWQuZXEocmlnaHQpLmFkZENsYXNzKCdjbG91ZF9hYnNvbHV0ZV9yaWdodCcpO1xyXG4gICAgICAgICAgICBhbGxDbG91ZC5lcShyaWdodE91dCkuYWRkQ2xhc3MoJ2Nsb3VkX2Fic29sdXRlX291dF9sZWZ0Jyk7XHJcbiAgICAgICAgICAgIGFsbENsb3VkLmVxKGxlZnRPdXQpLmFkZENsYXNzKCdjbG91ZF9hYnNvbHV0ZV9vdXRfcmlnaHQnKTtcclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhcnJvd0xlZnQub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbGVmdCcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn0L3QvtC80LXRgDogJytpKTtcclxuICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICBpZihpPDApIHtcclxuICAgICAgICAgICAgICAgIGk9YWxsQ2xvdWQubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ9C/0L7QstGL0YHQuNC70LggaScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBjZW50ZXI9aS0xLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ9aS0yLFxyXG4gICAgICAgICAgICAgICAgcmlnaHRPdXQ9aS0zLFxyXG4gICAgICAgICAgICAgICAgbGVmdE91dD1pLTQ7XHJcblxyXG4gICAgICAgICAgICBpZihpPT1hbGxDbG91ZC5sZW5ndGgpIHtpPWFsbENsb3VkLmxlbmd0aDsgfVxyXG4gICAgICAgICAgICBpZihjZW50ZXI9PWFsbENsb3VkLmxlbmd0aCkge2NlbnRlcj1hbGxDbG91ZC5sZW5ndGg7IH1cclxuICAgICAgICAgICAgaWYocmlnaHQ9PWFsbENsb3VkLmxlbmd0aCkge3JpZ2h0PWFsbENsb3VkLmxlbmd0aDsgfVxyXG4gICAgICAgICAgICBpZihyaWdodE91dD09YWxsQ2xvdWQubGVuZ3RoKSB7cmlnaHRPdXQ9YWxsQ2xvdWQubGVuZ3RoOyB9XHJcbiAgICAgICAgICAgIGlmKGxlZnRPdXQ9PWFsbENsb3VkLmxlbmd0aCkge2xlZnRPdXQ9YWxsQ2xvdWQubGVuZ3RoOyB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb250ZWluZXIuZmluZCgnLmNsb3VkX2Fic29sdXRlX2xlZnQnKS5yZW1vdmVDbGFzcygnY2xvdWRfYWJzb2x1dGVfbGVmdCcpOy8v0YPQtNCw0LvRj9C10Lwg0LrQu9Cw0YHRgdGLINGH0YLQvtCxINC+0LHQu9Cw0LrQvtC8INC/0L7QvNC10L3Rj9C70L4g0LzQtdGB0YLQvlxyXG4gICAgICAgICAgICBjb250ZWluZXIuZmluZCgnLmNsb3VkX2Fic29sdXRlX2NlbnRlcicpLnJlbW92ZUNsYXNzKCdjbG91ZF9hYnNvbHV0ZV9jZW50ZXInKTtcclxuICAgICAgICAgICAgY29udGVpbmVyLmZpbmQoJy5jbG91ZF9hYnNvbHV0ZV9yaWdodCcpLnJlbW92ZUNsYXNzKCdjbG91ZF9hYnNvbHV0ZV9yaWdodCcpO1xyXG4gICAgICAgICAgICBjb250ZWluZXIuZmluZCgnLmNsb3VkX2Fic29sdXRlX291dF9yaWdodCcpLnJlbW92ZUNsYXNzKCdjbG91ZF9hYnNvbHV0ZV9vdXRfcmlnaHQnKTtcclxuICAgICAgICAgICAgY29udGVpbmVyLmZpbmQoJy5jbG91ZF9hYnNvbHV0ZV9vdXRfbGVmdCcpLnJlbW92ZUNsYXNzKCdjbG91ZF9hYnNvbHV0ZV9vdXRfbGVmdCcpO1xyXG5cclxuICAgICAgICAgICAgYWxsQ2xvdWQuZXEoaSkuYWRkQ2xhc3MoJ2Nsb3VkX2Fic29sdXRlX3JpZ2h0Jyk7Ly/QtNC+0LHQsNCy0LvRj9C10Lwg0LrQu9Cw0YHRgSDQutC+0YLQvtGA0YvQuSDQv9C10YDQtdC80LXRgdGC0LjRgiDQvtCx0LvQsNC60L4g0LIg0L3Rg9C20L3QvtC1INC90L7QstC+0LUg0L/QvtC70L7QttC10L3QuNC1XHJcbiAgICAgICAgICAgIGFsbENsb3VkLmVxKGNlbnRlcikuYWRkQ2xhc3MoJ2Nsb3VkX2Fic29sdXRlX2NlbnRlcicpO1xyXG4gICAgICAgICAgICBhbGxDbG91ZC5lcShyaWdodCkuYWRkQ2xhc3MoJ2Nsb3VkX2Fic29sdXRlX2xlZnQnKTtcclxuICAgICAgICAgICAgYWxsQ2xvdWQuZXEocmlnaHRPdXQpLmFkZENsYXNzKCdjbG91ZF9hYnNvbHV0ZV9vdXRfcmlnaHQnKTtcclxuICAgICAgICAgICAgYWxsQ2xvdWQuZXEobGVmdE91dCkuYWRkQ2xhc3MoJ2Nsb3VkX2Fic29sdXRlX291dF9sZWZ0Jyk7XHJcblxyXG5cclxuICAgICAgICB9KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
