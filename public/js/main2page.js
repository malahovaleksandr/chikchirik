$(document).ready(function(){
    console.log('changhe header');//подключения меню на весь экран зеленое

    //переменные для перемены фона хэдер
    var    footer=$('.footer'),//блок футера
        header=$('.header'),//блок хедер
        headerLogo=$('.header_logo'),//картинка логотипа
        headButton=$('.header__coins_button'),//кнопка купить в шапке
        heightHeader=header.height(),
        topPage2=$('#2').offset().top-heightHeader;//начало верха второй страницы минус высота хедера

    $(document).on('scroll',function() {//функция для смены цвета хедер при скролле страниц
        var scrollTop = $(window).scrollTop();
        //эти условия срабатывают когда прокрутка опускается до нужного блока и беруться параметры из БД и применяются к нужному кружку
        if (scrollTop < topPage2) {//при прокрутке меняем цвет header и footer
            header.css('background', '#4AB7C7');
            headerLogo.attr('src', '../image/logovector.png');
            headButton.removeClass('color_blue');
        }
        if (scrollTop >= topPage2) {//при прокрутке меняем цвет header и footer
            header.css('background', '#eda223');
            headerLogo.attr('src', '../image/logoWhite.png');
            headButton.addClass('color_blue');
        }   
    });

});









$(document).ready(function(){

    var page1Height=$('#1').offset().top,//положение первой страницы
        page2Height=$('#2').offset().top,//положение второй страницы от верха
        lastScrollTop = 0,
        windowHeight=$(window).height();//высота экрана при которой будет работать перелистывание

    if(windowHeight>660){
        $(window).scroll(function(){
            var st = $(this).scrollTop();
            if (st > lastScrollTop){//вниз прокрутка
                if(lastScrollTop==page1Height){
                    $("html, body").animate({scrollTop: page2Height}, 1000);
                }
            } else {//вверх
                if(lastScrollTop==page2Height){
                    $("html, body").animate({scrollTop: page1Height}, 1000);
                }
            }
            lastScrollTop = st;
        });
    } else {
        console.log('маленький экран');
    }

});
$(document).ready(function(){
    console.log('con slide11');
    var arrowRight=$('.blogPage2_arrow-right'),//стрелочка вправо
        arrowLeft=$('.blogPage2_arrow-left'),//стрелочка влево

        allCloud=$('.page3_content_absoluteBlock'),//все облака
        conteiner=$('.page3_content'),//контейнер где лежат все облака
        t=1;//порядковый номер
    console.log('номер: '+t);
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
});


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZUhlYWRlckNvbG9yLmpzIiwic2Nyb2xsUGFnZS5qcyIsInNsaWRlQ2xvdWQuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJjb25zb2xlIiwibG9nIiwiaGVhZGVyIiwiaGVhZGVyTG9nbyIsImhlYWRCdXR0b24iLCJoZWlnaHRIZWFkZXIiLCJoZWlnaHQiLCJ0b3BQYWdlMiIsIm9mZnNldCIsInRvcCIsIm9uIiwic2Nyb2xsVG9wIiwid2luZG93IiwiY3NzIiwiYXR0ciIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJwYWdlMUhlaWdodCIsInBhZ2UySGVpZ2h0IiwibGFzdFNjcm9sbFRvcCIsIndpbmRvd0hlaWdodCIsInNjcm9sbCIsInN0IiwidGhpcyIsImFuaW1hdGUiLCJhcnJvd1JpZ2h0IiwiYXJyb3dMZWZ0IiwiYWxsQ2xvdWQiLCJjb250ZWluZXIiLCJ0IiwiY2VudGVyIiwicmlnaHQiLCJsZW5ndGgiLCJmaW5kIiwiZXEiLCJsZWZ0Il0sIm1hcHBpbmdzIjoiQUFBQUEsRUFBQUMsVUFBQUMsTUFBQSxXQUNBQyxRQUFBQyxJQUFBLGlCQUdBLElBQ0FDLElBREFMLEVBQUEsV0FDQUEsRUFBQSxZQUNBTSxFQUFBTixFQUFBLGdCQUNBTyxFQUFBUCxFQUFBLHlCQUNBUSxFQUFBSCxFQUFBSSxTQUNBQyxFQUFBVixFQUFBLE1BQUFXLFNBQUFDLElBQUFKLENBRUFSLEdBQUFDLFVBQUFZLEdBQUEsU0FBQSxXQUNBLEdBQUFDLEdBQUFkLEVBQUFlLFFBQUFELFdBRUFBLEdBQUFKLElBQ0FMLEVBQUFXLElBQUEsYUFBQSxXQUNBVixFQUFBVyxLQUFBLE1BQUEsMkJBQ0FWLEVBQUFXLFlBQUEsZUFFQUosR0FBQUosSUFDQUwsRUFBQVcsSUFBQSxhQUFBLFdBQ0FWLEVBQUFXLEtBQUEsTUFBQSwwQkFDQVYsRUFBQVksU0FBQSxtQkN0QkFuQixFQUFBQyxVQUFBQyxNQUFBLFdBRUEsR0FBQWtCLEdBQUFwQixFQUFBLE1BQUFX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cmVhZHkoZnVuY3Rpb24oKXtcclxuICAgIGNvbnNvbGUubG9nKCdjaGFuZ2hlIGhlYWRlcicpOy8v0L/QvtC00LrQu9GO0YfQtdC90LjRjyDQvNC10L3RjiDQvdCwINCy0LXRgdGMINGN0LrRgNCw0L0g0LfQtdC70LXQvdC+0LVcclxuXHJcbiAgICAvL9C/0LXRgNC10LzQtdC90L3Ri9C1INC00LvRjyDQv9C10YDQtdC80LXQvdGLINGE0L7QvdCwINGF0Y3QtNC10YBcclxuICAgIHZhciAgICBmb290ZXI9JCgnLmZvb3RlcicpLC8v0LHQu9C+0Log0YTRg9GC0LXRgNCwXHJcbiAgICAgICAgaGVhZGVyPSQoJy5oZWFkZXInKSwvL9Cx0LvQvtC6INGF0LXQtNC10YBcclxuICAgICAgICBoZWFkZXJMb2dvPSQoJy5oZWFkZXJfbG9nbycpLC8v0LrQsNGA0YLQuNC90LrQsCDQu9C+0LPQvtGC0LjQv9CwXHJcbiAgICAgICAgaGVhZEJ1dHRvbj0kKCcuaGVhZGVyX19jb2luc19idXR0b24nKSwvL9C60L3QvtC/0LrQsCDQutGD0L/QuNGC0Ywg0LIg0YjQsNC/0LrQtVxyXG4gICAgICAgIGhlaWdodEhlYWRlcj1oZWFkZXIuaGVpZ2h0KCksXHJcbiAgICAgICAgdG9wUGFnZTI9JCgnIzInKS5vZmZzZXQoKS50b3AtaGVpZ2h0SGVhZGVyOy8v0L3QsNGH0LDQu9C+INCy0LXRgNGF0LAg0LLRgtC+0YDQvtC5INGB0YLRgNCw0L3QuNGG0Ysg0LzQuNC90YPRgSDQstGL0YHQvtGC0LAg0YXQtdC00LXRgNCwXHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ3Njcm9sbCcsZnVuY3Rpb24oKSB7Ly/RhNGD0L3QutGG0LjRjyDQtNC70Y8g0YHQvNC10L3RiyDRhtCy0LXRgtCwINGF0LXQtNC10YAg0L/RgNC4INGB0LrRgNC+0LvQu9C1INGB0YLRgNCw0L3QuNGGXHJcbiAgICAgICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuICAgICAgICAvL9GN0YLQuCDRg9GB0LvQvtCy0LjRjyDRgdGA0LDQsdCw0YLRi9Cy0LDRjtGCINC60L7Qs9C00LAg0L/RgNC+0LrRgNGD0YLQutCwINC+0L/Rg9GB0LrQsNC10YLRgdGPINC00L4g0L3Rg9C20L3QvtCz0L4g0LHQu9C+0LrQsCDQuCDQsdC10YDRg9GC0YzRgdGPINC/0LDRgNCw0LzQtdGC0YDRiyDQuNC3INCR0JQg0Lgg0L/RgNC40LzQtdC90Y/RjtGC0YHRjyDQuiDQvdGD0LbQvdC+0LzRgyDQutGA0YPQttC60YNcclxuICAgICAgICBpZiAoc2Nyb2xsVG9wIDwgdG9wUGFnZTIpIHsvL9C/0YDQuCDQv9GA0L7QutGA0YPRgtC60LUg0LzQtdC90Y/QtdC8INGG0LLQtdGCIGhlYWRlciDQuCBmb290ZXJcclxuICAgICAgICAgICAgaGVhZGVyLmNzcygnYmFja2dyb3VuZCcsICcjNEFCN0M3Jyk7XHJcbiAgICAgICAgICAgIGhlYWRlckxvZ28uYXR0cignc3JjJywgJy4uL2ltYWdlL2xvZ292ZWN0b3IucG5nJyk7XHJcbiAgICAgICAgICAgIGhlYWRCdXR0b24ucmVtb3ZlQ2xhc3MoJ2NvbG9yX2JsdWUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNjcm9sbFRvcCA+PSB0b3BQYWdlMikgey8v0L/RgNC4INC/0YDQvtC60YDRg9GC0LrQtSDQvNC10L3Rj9C10Lwg0YbQstC10YIgaGVhZGVyINC4IGZvb3RlclxyXG4gICAgICAgICAgICBoZWFkZXIuY3NzKCdiYWNrZ3JvdW5kJywgJyNlZGEyMjMnKTtcclxuICAgICAgICAgICAgaGVhZGVyTG9nby5hdHRyKCdzcmMnLCAnLi4vaW1hZ2UvbG9nb1doaXRlLnBuZycpO1xyXG4gICAgICAgICAgICBoZWFkQnV0dG9uLmFkZENsYXNzKCdjb2xvcl9ibHVlJyk7XHJcbiAgICAgICAgfSAgIFxyXG4gICAgfSk7XHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBwYWdlMUhlaWdodD0kKCcjMScpLm9mZnNldCgpLnRvcCwvL9C/0L7Qu9C+0LbQtdC90LjQtSDQv9C10YDQstC+0Lkg0YHRgtGA0LDQvdC40YbRi1xyXG4gICAgICAgIHBhZ2UySGVpZ2h0PSQoJyMyJykub2Zmc2V0KCkudG9wLC8v0L/QvtC70L7QttC10L3QuNC1INCy0YLQvtGA0L7QuSDRgdGC0YDQsNC90LjRhtGLINC+0YIg0LLQtdGA0YXQsFxyXG4gICAgICAgIGxhc3RTY3JvbGxUb3AgPSAwLFxyXG4gICAgICAgIHdpbmRvd0hlaWdodD0kKHdpbmRvdykuaGVpZ2h0KCk7Ly/QstGL0YHQvtGC0LAg0Y3QutGA0LDQvdCwINC/0YDQuCDQutC+0YLQvtGA0L7QuSDQsdGD0LTQtdGCINGA0LDQsdC+0YLQsNGC0Ywg0L/QtdGA0LXQu9C40YHRgtGL0LLQsNC90LjQtVxyXG5cclxuICAgIGlmKHdpbmRvd0hlaWdodD42NjApe1xyXG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyIHN0ID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcclxuICAgICAgICAgICAgaWYgKHN0ID4gbGFzdFNjcm9sbFRvcCl7Ly/QstC90LjQtyDQv9GA0L7QutGA0YPRgtC60LBcclxuICAgICAgICAgICAgICAgIGlmKGxhc3RTY3JvbGxUb3A9PXBhZ2UxSGVpZ2h0KXtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtzY3JvbGxUb3A6IHBhZ2UySGVpZ2h0fSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7Ly/QstCy0LXRgNGFXHJcbiAgICAgICAgICAgICAgICBpZihsYXN0U2Nyb2xsVG9wPT1wYWdlMkhlaWdodCl7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBwYWdlMUhlaWdodH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxhc3RTY3JvbGxUb3AgPSBzdDtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ9C80LDQu9C10L3RjNC60LjQuSDRjdC60YDQsNC9Jyk7XHJcbiAgICB9XHJcblxyXG59KTsiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgY29uc29sZS5sb2coJ2NvbiBzbGlkZTExJyk7XHJcbiAgICB2YXIgYXJyb3dSaWdodD0kKCcuYmxvZ1BhZ2UyX2Fycm93LXJpZ2h0JyksLy/RgdGC0YDQtdC70L7Rh9C60LAg0LLQv9GA0LDQstC+XHJcbiAgICAgICAgYXJyb3dMZWZ0PSQoJy5ibG9nUGFnZTJfYXJyb3ctbGVmdCcpLC8v0YHRgtGA0LXQu9C+0YfQutCwINCy0LvQtdCy0L5cclxuXHJcbiAgICAgICAgYWxsQ2xvdWQ9JCgnLnBhZ2UzX2NvbnRlbnRfYWJzb2x1dGVCbG9jaycpLC8v0LLRgdC1INC+0LHQu9Cw0LrQsFxyXG4gICAgICAgIGNvbnRlaW5lcj0kKCcucGFnZTNfY29udGVudCcpLC8v0LrQvtC90YLQtdC50L3QtdGAINCz0LTQtSDQu9C10LbQsNGCINCy0YHQtSDQvtCx0LvQsNC60LBcclxuICAgICAgICB0PTE7Ly/Qv9C+0YDRj9C00LrQvtCy0YvQuSDQvdC+0LzQtdGAXHJcbiAgICBjb25zb2xlLmxvZygn0L3QvtC80LXRgDogJyt0KTtcclxuICAgIGFycm93UmlnaHQub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfQvdC+0LzQtdGAOiAnK3QpO1xyXG5cclxuXHJcbiAgICAgICAgdmFyIGNlbnRlcj10KzEsXHJcbiAgICAgICAgICAgIHJpZ2h0PXQrMjtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2VudGVyOiAnK2NlbnRlcik7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JpZ2h0OiAnK3JpZ2h0KTtcclxuXHJcbiAgICAgICAgaWYodD09YWxsQ2xvdWQubGVuZ3RoKSB7dD0wOyB9Ly/QvtCx0L3Rg9C70Y/QtdC8INC60L7QtdGE0LjRhtC40LXQvdGCIHQg0LrQvtCz0LTQsCDQstGL0YjQtSDQutC+0Lst0LLQsCDQvtCx0LvQsNC60L7QslxyXG4gICAgICAgIGlmKGNlbnRlcj09YWxsQ2xvdWQubGVuZ3RoKSB7Y2VudGVyPTA7IGNvbnNvbGUubG9nKCdjZW50ZXIg0L/RgNC+0L3QuNC30LjQuzogJyt0KX0vL9GA0LXQtNCw0LrRgtC40YDRg9C10Lwg0LrQvtC10YTQuNGG0LjQtdC90YIg0YfRgtC+0LEg0L3QtSDQsdGL0Lsg0LLRi9GI0LUg0YfQtdC8INC60L7Qu9GC0YfQtdGB0YLQstC+INC+0LHQu9Cw0YfQutC+0LJcclxuICAgICAgICBpZihjZW50ZXI9PWFsbENsb3VkLmxlbmd0aCsxKSB7Y2VudGVyPTE7IGNvbnNvbGUubG9nKCdjZW50ZXIg0L/RgNC+0L3QuNC30LjQuzogJyt0KX1cclxuICAgICAgICBpZihyaWdodD09YWxsQ2xvdWQubGVuZ3RoKSB7cmlnaHQ9MDtjb25zb2xlLmxvZygncmlnaHQg0L/RgNC+0L3QuNC30LjQuzogJyt0KSB9XHJcbiAgICAgICAgaWYocmlnaHQ9PWFsbENsb3VkLmxlbmd0aCsxKSB7cmlnaHQ9MTtjb25zb2xlLmxvZygncmlnaHQg0L/RgNC+0L3QuNC30LjQuzogJyt0KSB9XHJcbiAgICAgICAgaWYocmlnaHQ9PWFsbENsb3VkLmxlbmd0aCsyKSB7cmlnaHQ9Mjtjb25zb2xlLmxvZygncmlnaHQg0L/RgNC+0L3QuNC30LjQuzogJyt0KSB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgY29udGVpbmVyLmZpbmQoJy5jbG91ZF9hYnNvbHV0ZV9sZWZ0JykucmVtb3ZlQ2xhc3MoJ2Nsb3VkX2Fic29sdXRlX2xlZnQnKTsvL9GD0LTQsNC70Y/QtdC8INC60LvQsNGB0YHRiyDRh9GC0L7QsSDQvtCx0LvQsNC60L7QvCDQv9C+0LzQtdC90Y/Qu9C+INC80LXRgdGC0L5cclxuICAgICAgICBjb250ZWluZXIuZmluZCgnLmNsb3VkX2Fic29sdXRlX2NlbnRlcicpLnJlbW92ZUNsYXNzKCdjbG91ZF9hYnNvbHV0ZV9jZW50ZXInKTtcclxuICAgICAgICBjb250ZWluZXIuZmluZCgnLmNsb3VkX2Fic29sdXRlX3JpZ2h0JykucmVtb3ZlQ2xhc3MoJ2Nsb3VkX2Fic29sdXRlX3JpZ2h0Jyk7XHJcblxyXG4gICAgICAgIGFsbENsb3VkLmVxKHQpLmFkZENsYXNzKCdjbG91ZF9hYnNvbHV0ZV9sZWZ0Jyk7Ly/QtNC+0LHQsNCy0LvRj9C10Lwg0LrQu9Cw0YHRgSDQutC+0YLQvtGA0YvQuSDQv9C10YDQtdC80LXRgdGC0LjRgiDQvtCx0LvQsNC60L4g0LIg0L3Rg9C20L3QvtC1INC90L7QstC+0LUg0L/QvtC70L7QttC10L3QuNC1XHJcbiAgICAgICAgYWxsQ2xvdWQuZXEoY2VudGVyKS5hZGRDbGFzcygnY2xvdWRfYWJzb2x1dGVfY2VudGVyJyk7XHJcbiAgICAgICAgYWxsQ2xvdWQuZXEocmlnaHQpLmFkZENsYXNzKCdjbG91ZF9hYnNvbHV0ZV9yaWdodCcpO1xyXG5cclxuXHJcbiAgICAgICAgdCsrO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGFycm93TGVmdC5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGlmKHQ8MCkge3Q9YWxsQ2xvdWQubGVuZ3RoLTE7IH1cclxuICAgICAgICB2YXIgY2VudGVyPXQtMSxcclxuICAgICAgICAgICAgbGVmdD10LTI7XHJcblxyXG5cclxuICAgICAgICBpZihjZW50ZXI9PS0xKSB7Y2VudGVyPWFsbENsb3VkLmxlbmd0aC0xOyBjb25zb2xlLmxvZygnY2VudGVyINC/0YDQvtC90LjQt9C40Ls6ICcrY2VudGVyKX1cclxuICAgICAgICBpZihjZW50ZXI9PS0yKSB7Y2VudGVyPWFsbENsb3VkLmxlbmd0aC0yOyBjb25zb2xlLmxvZygnY2VudGVyINC/0YDQvtC90LjQt9C40Ls6ICcrY2VudGVyKX1cclxuXHJcbiAgICAgICAgaWYobGVmdD09LTEpIHtsZWZ0PWFsbENsb3VkLmxlbmd0aC0xO2NvbnNvbGUubG9nKCdsZWZ0INC/0YDQvtC90LjQt9C40Ls6ICcrbGVmdCkgfVxyXG4gICAgICAgIGlmKGxlZnQ9PS0yKSB7bGVmdD1hbGxDbG91ZC5sZW5ndGgtMjtjb25zb2xlLmxvZygnbGVmdCDQv9GA0L7QvdC40LfQuNC7OiAnK2xlZnQpIH1cclxuICAgICAgICBpZihsZWZ0PT0tMykge2xlZnQ9YWxsQ2xvdWQubGVuZ3RoLTM7Y29uc29sZS5sb2coJ2xlZnQg0L/RgNC+0L3QuNC30LjQuzogJytsZWZ0KSB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0OiAnK3QpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjZW50ZXI6ICcrY2VudGVyKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnbGVmdDogJytsZWZ0KTtcclxuXHJcbiAgICAgICAgY29udGVpbmVyLmZpbmQoJy5jbG91ZF9hYnNvbHV0ZV9sZWZ0JykucmVtb3ZlQ2xhc3MoJ2Nsb3VkX2Fic29sdXRlX2xlZnQnKTsvL9GD0LTQsNC70Y/QtdC8INC60LvQsNGB0YHRiyDRh9GC0L7QsSDQvtCx0LvQsNC60L7QvCDQv9C+0LzQtdC90Y/Qu9C+INC80LXRgdGC0L5cclxuICAgICAgICBjb250ZWluZXIuZmluZCgnLmNsb3VkX2Fic29sdXRlX2NlbnRlcicpLnJlbW92ZUNsYXNzKCdjbG91ZF9hYnNvbHV0ZV9jZW50ZXInKTtcclxuICAgICAgICBjb250ZWluZXIuZmluZCgnLmNsb3VkX2Fic29sdXRlX3JpZ2h0JykucmVtb3ZlQ2xhc3MoJ2Nsb3VkX2Fic29sdXRlX3JpZ2h0Jyk7XHJcblxyXG4gICAgICAgIGFsbENsb3VkLmVxKHQpLmFkZENsYXNzKCdjbG91ZF9hYnNvbHV0ZV9yaWdodCcpOy8v0LTQvtCx0LDQstC70Y/QtdC8INC60LvQsNGB0YEg0LrQvtGC0L7RgNGL0Lkg0L/QtdGA0LXQvNC10YHRgtC40YIg0L7QsdC70LDQutC+INCyINC90YPQttC90L7QtSDQvdC+0LLQvtC1INC/0L7Qu9C+0LbQtdC90LjQtVxyXG4gICAgICAgIGFsbENsb3VkLmVxKGNlbnRlcikuYWRkQ2xhc3MoJ2Nsb3VkX2Fic29sdXRlX2NlbnRlcicpO1xyXG4gICAgICAgIGFsbENsb3VkLmVxKGxlZnQpLmFkZENsYXNzKCdjbG91ZF9hYnNvbHV0ZV9sZWZ0Jyk7XHJcblxyXG4gICAgICAgIHQtLTtcclxuXHJcblxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
