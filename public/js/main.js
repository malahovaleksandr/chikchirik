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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmtfc2xpZGUuanMiLCJtYWluLmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiY29uc29sZSIsImxvZyIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImlkIiwidGhpcyIsImF0dHIiLCJ0b3AiLCJvZmZzZXQiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwiaXRlbU1lbnUiLCJ0ZXh0TWVudSIsImZpbmQiLCIkdGhpcyIsInBhZ2U0IiwicGFyZW50IiwiYWN0aXZCbG9ja1RleHQiLCJhY3RpdkJsb2NrVGl0bGUiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIl0sIm1hcHBpbmdzIjoiQUFBQUEsRUFBQUMsVUFBQUMsTUFBQSxXQUNBQyxRQUFBQyxJQUFBLDBCQUdBSixFQUFBQyxVQUFBQyxNQUFBLFdBQ0FGLEVBQUEsZUFBQUssR0FBQSxRQUFBLElBQUEsU0FBQUMsR0FFQUEsRUFBQUMsZ0JBRUEsSUFBQUMsR0FBQVIsRUFBQVMsTUFBQUMsS0FBQSxRQUVBQyxFQUFBWCxFQUFBUSxHQUFBSSxTQUFBRCxHQUVBWCxHQUFBLGFBQUFhLFNBQUFDLFVBQUFILEdBQUEsT0FHQVgsRUFBQSxrQkFBQUssR0FBQSxRQUFBLFNBQUFDLEdBRUFBLEVBQUFDLGdCQUVBLElBQUFDLEdBQUFSLEVBQUFTLE1BQUFDLEtBQUEsUUFFQUMsRUFBQVgsRUFBQVEsR0FBQUksU0FBQUQsR0FFQVgsR0FBQSxhQUFBYSxTQUFBQyxVQUFBSCxHQUFBLFNDeEJBWCxFQUFBQyxVQUFBQyxNQUFBLFdBQ0FDLFFBQUFDLElBQUEsa0NBSUEsSUFBQVcsVUFBQWYsRUFBQSxvQkFDQWdCLFNBQUFELFNBQUFFLEtBQUEsbUJBRUFGLFVBQUFWLEdBQUEsUUFBQSxXQUNBLEdBQUFhLEdBQUFsQixFQUFBUyxNQUNBVSxFQUFBRCxFQUFBRSxPQUFBLDBCQUNBQyxFQUFBRixFQUFBRixLQUFBLDBCQUNBSyxFQUFBSCxFQUFBRixLQUFBLDBCQUVBSyxHQUFBQyxZQUFBLDBCQUNBRixFQUFBRSxZQUFBLHlCQUNBTCxFQUFBRCxLQUFBLG9CQUFBTyxTQUFBLHlCQUNBTixFQUFBRCxLQUFBLHFCQUFBTyxTQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICAgICBjb25zb2xlLmxvZygn0L/QvtC00LrQu9GO0YfQtdC9IGxpbmtfc2xpZGUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJChcIi5oZWFkZXJfbmF2XCIpLm9uKFwiY2xpY2tcIixcImFcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIC8v0L7RgtC80LXQvdGP0LXQvCDRgdGC0LDQvdC00LDRgNGC0L3Rg9GOINC+0LHRgNCw0LHQvtGC0LrRgyDQvdCw0LbQsNGC0LjRjyDQv9C+INGB0YHRi9C70LrQtVxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAvL9C30LDQsdC40YDQsNC10Lwg0LjQtNC10L3RgtC40YTQuNC60LDRgtC+0YAg0LHQvtC60LAg0YEg0LDRgtGA0LjQsdGD0YLQsCBocmVmXHJcbiAgICAgICAgICAgIHZhciBpZCAgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKSxcclxuICAgICAgICAgICAgLy/Rg9C30L3QsNC10Lwg0LLRi9GB0L7RgtGDINC+0YIg0L3QsNGH0LDQu9CwINGB0YLRgNCw0L3QuNGG0Ysg0LTQviDQsdC70L7QutCwINC90LAg0LrQvtGC0L7RgNGL0Lkg0YHRgdGL0LvQsNC10YLRgdGPINGP0LrQvtGA0YxcclxuICAgICAgICAgICAgICAgIHRvcCA9ICQoaWQpLm9mZnNldCgpLnRvcDtcclxuICAgICAgICAgICAgLy/QsNC90LjQvNC40YDRg9C10Lwg0L/QtdGA0LXRhdC+0LQg0L3QsCDRgNCw0YHRgdGC0L7Rj9C90LjQtSAtIHRvcCDQt9CwIDE1MDAg0LzRgVxyXG4gICAgICAgICAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6IHRvcH0sIDEwMDApO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICAkKFwiLmpzX2xpbmtfcGFnZTJcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgLy/QvtGC0LzQtdC90Y/QtdC8INGB0YLQsNC90LTQsNGA0YLQvdGD0Y4g0L7QsdGA0LDQsdC+0YLQutGDINC90LDQttCw0YLQuNGPINC/0L4g0YHRgdGL0LvQutC1XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIC8v0LfQsNCx0LjRgNCw0LXQvCDQuNC00LXQvdGC0LjRhNC40LrQsNGC0L7RgCDQsdC+0LrQsCDRgSDQsNGC0YDQuNCx0YPRgtCwIGhyZWZcclxuICAgICAgICAgICAgdmFyIGlkICA9ICQodGhpcykuYXR0cignaHJlZicpLFxyXG4gICAgICAgICAgICAvL9GD0LfQvdCw0LXQvCDQstGL0YHQvtGC0YMg0L7RgiDQvdCw0YfQsNC70LAg0YHRgtGA0LDQvdC40YbRiyDQtNC+INCx0LvQvtC60LAg0L3QsCDQutC+0YLQvtGA0YvQuSDRgdGB0YvQu9Cw0LXRgtGB0Y8g0Y/QutC+0YDRjFxyXG4gICAgICAgICAgICAgICAgdG9wID0gJChpZCkub2Zmc2V0KCkudG9wO1xyXG4gICAgICAgICAgICAvL9Cw0L3QuNC80LjRgNGD0LXQvCDQv9C10YDQtdGF0L7QtCDQvdCwINGA0LDRgdGB0YLQvtGP0L3QuNC1IC0gdG9wINC30LAgMTUwMCDQvNGBXHJcbiAgICAgICAgICAgICQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe3Njcm9sbFRvcDogdG9wfSwgMTAwMCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9KTtcclxuIiwiICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ9C/0L7QtNC60LvRjtGH0LXQvSDQvNC10L3RjiDQv9C10YDQtdC70LjRgdGC0YvQstCw0LXRgiAnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGRlc2N0b3AgNCDQv9GA0Lgg0L3QsNC20LDRgtC40Lgg0L3QsCDQvNC10L3RjiDQv9C+0Y/QstC70Y/QtdGC0YHRjyDRgtC10LrRgdGCXHJcbiAgICB2YXIgaXRlbU1lbnU9JCgnLnBhZ2U0X21lbnUtaXRlbScpLC8v0L/Rg9C90LrRgiDQvNC10L3RjlxyXG4gICAgICAgIHRleHRNZW51PWl0ZW1NZW51LmZpbmQoJy5wYWdlNF9tZW51LXRleHQnKTsvL9GC0LXQutGB0YIg0LrQvtGC0L7RgNGL0LnQtNC+0LvQttC10L0g0L/QvtGP0LLQuNGC0YzRgdGPXHJcblxyXG4gICAgaXRlbU1lbnUub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIHBhZ2U0PSR0aGlzLnBhcmVudCgnLmNvbnRlbnQtZGVza3RvcF9wYWdlNCcpLC8v0L3QsNGF0L7QtNC40Lwg0LHQu9C+0Log0YHRgtGA0LDQvdC40YbRi1xyXG4gICAgICAgICAgICBhY3RpdkJsb2NrVGV4dD1wYWdlNC5maW5kKCcucGFnZTRfbWVudS10ZXh0X2FjdGl2JyksLy/QvdCw0YXQvtC00LjQvCDRgdGD0YnQtdGB0YLQstGD0Y7RidC40Lkg0LDQutGC0LjQstC90YvQuSDQutC70LDRgSDRgyDRgtC10LrRgdGC0LBcclxuICAgICAgICAgICAgYWN0aXZCbG9ja1RpdGxlPXBhZ2U0LmZpbmQoJy5wYWdlNF9tZW51LXRpdGxlX2FjdGl2Jyk7Ly/QvdCw0YXQvtC00LjQvCDRgdGD0YnQtdGB0YLQstGD0Y7RidC40Lkg0LDQutGC0LjQstC90YvQuSDQutC70LDRgSDRgyDRgtC40YLRg9C70LBcclxuXHJcbiAgICAgICAgICAgIGFjdGl2QmxvY2tUaXRsZS5yZW1vdmVDbGFzcygncGFnZTRfbWVudS10aXRsZV9hY3RpdicpOy8vINGD0LTQsNC70Y/QtdC8INGDINGC0LjRgtGD0LvQsCDRgdGD0YnQtdGB0YLQstGD0Y7RidC40Lkg0LDQutGC0LjQstC90YvQuSDQutC70LDRgdGBXHJcbiAgICAgICAgICAgIGFjdGl2QmxvY2tUZXh0LnJlbW92ZUNsYXNzKCdwYWdlNF9tZW51LXRleHRfYWN0aXYnKTsvLyDRg9C00LDQu9GP0LXQvCDRgyDRgtC10LrRgdGC0LAg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQuNC5INCw0LrRgtC40LLQvdGL0Lkg0LrQu9Cw0YHRgVxyXG4gICAgICAgICR0aGlzLmZpbmQoJy5wYWdlNF9tZW51LXRleHQnKS5hZGRDbGFzcygncGFnZTRfbWVudS10ZXh0X2FjdGl2Jyk7Ly8g0LTQvtCx0LDQstC70Y/QtdC8INGC0LXQutGB0YLRgyDQsNCy0YLQuNC60LLQvdGL0Lkg0LrQu9Cw0YHRgSDRjdC70LXQvNC10L3RgtGDINC90LAg0LrQvtGC0L7RgNGL0Lkg0L3QsNC20LDQu9C4XHJcbiAgICAgICAgJHRoaXMuZmluZCgnLnBhZ2U0X21lbnUtdGl0bGUnKS5hZGRDbGFzcygncGFnZTRfbWVudS10aXRsZV9hY3RpdicpOy8vINC00L7QsdCw0LLQu9GP0LXQvCDRgtC40YLRg9C70YMg0LDQstGC0LjQutCy0L3Ri9C5INC60LvQsNGB0YEg0Y3Qu9C10LzQtdC90YLRgyDQvdCwINC60L7RgtC+0YDRi9C5INC90LDQttCw0LvQuFxyXG5cclxuICAgIH0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
